<script>
  import { onMount } from "svelte";
  import Card from './Card.svelte'
  import { createEventDispatcher } from 'svelte';

  export let endpoint;

  const dispatch = createEventDispatcher();

  let patients = [];
  let loading = true;

  onMount(() => {
    console.log('mounting...')
    fetch(endpoint + '/Patient?_sort=-_lastUpdated')
      .then(res => res.json())
      .then(data => {
        console.log(data.entry)
        patients = data.entry
        loading = false
      })
      .catch(err => console.log(err))
  });

  function handleAddPatient() {
    dispatch('addPatient');
  }

  function handleSearch() {
    dispatch('search');
  }

  function handleEdit(patient) {
    dispatch('editPatient', patient);
  }
</script>

<div class="controls">
  <button on:click={handleAddPatient}>Add Patient</button>
  <button on:click={handleSearch}>Search</button>
</div>

{#if loading}
  <h2 class="loading">Loading patients...</h2>
{:else}
  <h2>Patients:</h2>
  <div class="patients">
    {#each patients as patient }
      {#if Array.isArray(patient.resource.name) && (patient?.resource?.name[0]?.given) && (patient.resource.name[0].family)}
        <Card>
          <div class="card-content">
            <div class="patient-info">
              <p>Name: {patient?.resource?.name[0]?.given[0]} {patient.resource?.name[0].family} </p>
              <p>id: {patient?.resource?.id}</p>
              <p>Gender: {patient?.resource?.gender}</p>
              <p>date of birth: {patient?.resource?.birthDate}</p>
            </div>
            <div class="edit-button-container">
              <button class="edit-button" on:click={() => handleEdit(patient)}>Edit</button>
            </div>
          </div>
        </Card>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .controls {
    margin-bottom: 20px;
  }
  
  button {
    margin-right: 10px;
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
   border: 2px solid black;
  }

  h2 {
    margin: 20px 0px;
    font-size: large;
  }

  .patients {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .loading {
    color: #888;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .patient-info {
    flex-grow: 1;
  }

  .edit-button-container {
    margin-top: auto;
    padding-top: 10px;
  }

  .edit-button {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .edit-button:hover {
    background-color: #45a049;
  }
</style>
