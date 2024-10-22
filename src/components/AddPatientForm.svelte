<script>
  import { createEventDispatcher, onMount } from 'svelte';

  export let patient = null;
  export let isEditing = false;
  export let endpoint;

  const dispatch = createEventDispatcher();

  let firstName = '';
  let lastName = '';
  let gender = '';
  let birthDate = '';
  let phoneNumber = '';

  onMount(() => {
    if (isEditing && patient) {
      firstName = patient.name?.[0]?.given?.[0] || '';
      lastName = patient.name?.[0]?.family || '';
      gender = patient.gender || '';
      birthDate = patient.birthDate || '';
      phoneNumber = patient.telecom?.find(t => t.system === 'phone')?.value || '';
    }
  });

  async function handleSubmit() {
    const patientData = {
      resourceType: "Patient",
      name: [
        {
          use: "official",
          family: lastName,
          given: [firstName]
        }
      ],
      gender: gender,
      birthDate: birthDate,
      telecom: [
        {
          system: "phone",
          value: phoneNumber
        }
      ]
    };

    if (isEditing) {
      patientData.id = patient.id;
    }

    try {
      const url = isEditing ? `${endpoint}/Patient/${patient.id}` : `${endpoint}/Patient`;
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/fhir+json'
        },
        body: JSON.stringify(patientData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(`Patient ${isEditing ? 'updated' : 'added'} successfully:`, result);
      dispatch('patientAdded', result);
      dispatch('toggleAddForm');
    } catch (error) {
      console.error(`Error ${isEditing ? 'updating' : 'adding'} patient:`, error);
      // Handle error (e.g., show error message to user)
    }
  }

  function handleCancel() {
    dispatch('toggleAddForm');
  }
</script>

<div class="form-container">
  <form on:submit|preventDefault={handleSubmit}>
    <h2>{isEditing ? 'Edit' : 'Add'} Patient</h2>
    
    <div class="form-group">
      <label for="firstName">First Name:</label>
      <input id="firstName" type="text" bind:value={firstName} required>
    </div>

    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input id="lastName" type="text" bind:value={lastName} required>
    </div>

    <div class="form-group">
      <label for="gender">Gender:</label>
      <select id="gender" bind:value={gender} required>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div class="form-group">
      <label for="birthDate">Date of Birth:</label>
      <input id="birthDate" type="date" bind:value={birthDate} required>
    </div>

    <div class="form-group">
      <label for="phoneNumber">Phone Number:</label>
      <input id="phoneNumber" type="tel" bind:value={phoneNumber}>
    </div>

    <div class="form-actions">
      <button type="submit">{isEditing ? 'Update' : 'Add'} Patient</button>
      <button type="button" on:click={handleCancel}>Cancel</button>
    </div>
  </form>
</div>

<style>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .form-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
  }

  button[type="submit"]:hover {
    background-color: #45a049;
  }

  button[type="button"] {
    background-color: #f44336;
    color: white;
  }

  button[type="button"]:hover {
    background-color: #da190b;
  }
</style>
