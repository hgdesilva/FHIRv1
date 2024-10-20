<script lang="ts">
  
  import ShowPatients from "./components/ShowPatients.svelte";
  import Button from "./components/Button.svelte"
  
  let displayPatients = true

  const handleAddPatient = () => {
   displayPatients = false;
  }

</script>

<main>
  <h1 class ="text-4xl text-200">Patient management application</h1>
  {#if (displayPatients)}
  <ShowPatients />
  {/if}

  <div class="create-patients">
    <Button message={'Add a patient'} on:click={handleAddPatient}/>
  </div>
</main>


<style>

  h1 {
    margin-top: 20px;
  }
  main{
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 20px 0;
  }

</style>

