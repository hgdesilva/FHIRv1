<script>
  import { onMount, onDestroy } from "svelte";
  import Card from './Card.svelte'


  //  GET   https://hapi.fhir.org/baseR4/metadata
  //  GET   https:/hapi.fhir.org/baseR4/Patient
  let endpoint =  'https:/hapi.fhir.org/baseR4/Patient';
  

  // onMount( async function() {
  //   const response = await fetch(endpoint);
  //   let data
  //   if(response.ok){
  //    data = await response.json()
  //   }
  //   patients = data.entry;
  // });
  let patients = []

  onMount( ()=> {
    
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        patients = data.entry
      })
      .catch(err => console.log(err))
    
  })
  
</script>


<h3>Patients:</h3>
  <div class="patients">
  {#each patients as patient }
  <Card>
        <p>Name: {patient.resource.name[0].given[0]}  {patient.resource.name[0]?.family} </p>
        <p>id: {patient.resource.id}</p>
        <p>Gender: {patient.resource?.gender}</p>
        <p>date of birth: {patient.resource.birthDate}</p>
  </Card>
  {/each}
</div>
<!-- -->

<style>
  h3{
    margin: 20px 0px;
  }
  .patients {
    display :grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }

  .create-patients{
    margin-top: 60px;
    font-size: large;
  }
</style>