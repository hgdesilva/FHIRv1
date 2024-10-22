<script lang="ts">
  import AddPatientForm from './components/AddPatientForm.svelte';
  import ShowPatients from './components/ShowPatients.svelte';
  import SearchPatients from './components/SearchPatients.svelte';

  // let patients = []; // Your existing patients array
  let endpoint = 'https://hapi.fhir.org/baseR4';
  
  let showAddForm = false;
  let showPatientsList = true;
  let showSearch = false;
  let editingPatient = null;

  // const FHIR_SERVER_URL = 'http://your-hapi-fhir-server-url/fhir'; // Replace with your actual HAPI FHIR server URL
  const FHIR_SERVER_URL = 'https://hapi.fhir.org/baseR4';

  async function addPatientToServer(newPatient) {
    const patientResource = {
      resourceType: 'Patient',
      // id: Math.floor(Math.random() * (7000 - 6000 + 1) + 6000).toString(), // Random integer between 6000 and 7000
      name: [
        {
          use: 'official',
          given: [newPatient.given],
          family: newPatient.family
        }
      ],
      gender: newPatient.gender,
      birthDate: newPatient.dob,
      telecom: [
        {
          system: 'phone',
          value: newPatient.phoneNumber,
          use: 'mobile'
        }
      ]
    };

    try {
      const response = await fetch(`${FHIR_SERVER_URL}/Patient`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/fhir+json',
          'Accept': 'application/fhir+json'
        },
        body: JSON.stringify(patientResource)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Patient added successfully:', result);
      return result;
    } catch (error) {
      console.error('Error adding patient to server:', error);
      throw error;
    }
  }

  // Consolidated handleAddPatient function
  async function handleAddPatient(event) {
    const newPatient = event.detail;
    try {
      const addedPatient = await addPatientToServer(newPatient);
      // patients = [...patients, addedPatient];
      showAddForm = false; // Hide the form after adding a patient
      showPatientsList = true; // Show the patients list
      // You might want to add a success message here
    } catch (error) {
      console.error('Failed to add patient:', error);
      // Handle error (e.g., show an error message to the user)
    }
  }

  function toggleAddForm() {
    showAddForm = !showAddForm;
    showPatientsList = !showAddForm;
    showSearch = false;
    editingPatient = null;
  }

  function togglePatientsList() {
    showPatientsList = true;
    showAddForm = false;
    showSearch = false;
    editingPatient = null;
  }

  function toggleSearch() {
    showSearch = true;
    showAddForm = false;
    showPatientsList = false;
    editingPatient = null;
  }

  function handleSearch() {
    toggleSearch();
  }

  function handlePatientAdded(event) {
    // Handle the newly added patient
    console.log('New patient added:', event.detail);
    togglePatientsList();
  }

  function handleEditPatient(event) {
    editingPatient = event.detail;
    showAddForm = true;
    showPatientsList = false;
    showSearch = false;
  }
</script>

<main>
  <h1 class="text-4xl text-200">Patient management application</h1>
  
  {#if showAddForm}
    <AddPatientForm 
      patient={editingPatient?.resource || null}
      isEditing={!!editingPatient}
      on:toggleAddForm={toggleAddForm}
      on:patientAdded={handleAddPatient} 
      {endpoint}
    />
  {:else if showSearch}
    <SearchPatients 
      {endpoint}
      on:editPatient={handleEditPatient}
      on:back={togglePatientsList}
    />
  {:else}
    <ShowPatients 
      {endpoint} 
      on:addPatient={toggleAddForm}
      on:editPatient={handleEditPatient}
      on:search={handleSearch}
    />
  {/if}
</main>

<style>
  h1 {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  main{
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 20px 0;
  }
  button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
