<script>
  import { createEventDispatcher } from 'svelte';
  import Card from './Card.svelte';

  export let endpoint;

  const dispatch = createEventDispatcher();

  let firstName = '';
  let lastName = '';
  let phoneNumber = '';
  let searchResults = [];
  let isSearching = false;
  let errorMessage = '';
  let phoneError = '';
  let hasSearched = false;

  function handlePhoneInput(event) {
    const input = event.target.value;
    const validInput = input.replace(/[^0-9()\-\s]/g, '');
    
    if (input !== validInput) {
      phoneError = 'Only numbers, spaces, hyphens (-), and parentheses () are allowed.';
    } else {
      phoneError = '';
    }
    
    phoneNumber = validInput;
  }

  async function handleSearch() {
    // Clear previous error message
    errorMessage = '';

    // Check if at least one field has a character
    if (!firstName && !lastName && !phoneNumber) {
      errorMessage = 'Please enter at least one search criteria.';
      return;
    }

    if (phoneError) {
      errorMessage = 'Please correct the phone number before searching.';
      return;
    }

    isSearching = true;
    searchResults = [];
    hasSearched = true;  // Set this to true when a search is performed

    try {
      let searchParams = new URLSearchParams();
      if (firstName) searchParams.append('given', firstName);
      if (lastName) searchParams.append('family', lastName);
      if (phoneNumber) searchParams.append('phone', phoneNumber);

      const response = await fetch(`${endpoint}/Patient?${searchParams.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch search results');

      const data = await response.json();
      searchResults = data.entry || [];
    } catch (error) {
      console.error('Search error:', error);
      errorMessage = 'An error occurred while searching. Please try again.';
    } finally {
      isSearching = false;
    }
  }

  function handleEdit(patient) {
    dispatch('editPatient', patient);
  }

  function handleBack() {
    dispatch('back');
  }
</script>

<div class="form-container">
  <h2>Search Patients</h2>
  <div class="search-form">
    <div class="form-group">
      <label for="firstName">First Name:</label>
      <input id="firstName" type="text" bind:value={firstName} placeholder="Enter first name">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input id="lastName" type="text" bind:value={lastName} placeholder="Enter last name">
    </div>
    <div class="form-group">
      <label for="phoneNumber">Phone Number:</label>
      <input 
        id="phoneNumber" 
        type="tel" 
        bind:value={phoneNumber}
        on:input={handlePhoneInput}
        placeholder="Enter numbers, spaces, hyphens (-), or parentheses ()"
      >
      {#if phoneError}
        <p class="error-message">{phoneError}</p>
      {/if}
    </div>
    <div class="form-actions">
      <button on:click={handleSearch} disabled={phoneError}>Search</button>
      <button on:click={handleBack}>Back to Patient List</button>
    </div>
  </div>

  {#if errorMessage}
    <p class="error-message">{errorMessage}</p>
  {/if}

  {#if isSearching}
    <p>Searching...</p>
  {:else if hasSearched}
    {#if searchResults.length === 0}
      <p class="no-results">No results found.</p>
    {:else}
      <div class="search-results">
        {#each searchResults as result}
          <Card>
            <div class="card-content">
              <div class="patient-info">
                <p>Name: {result.resource.name?.[0]?.given?.[0] || ''} {result.resource.name?.[0]?.family || ''}</p>
                <p>Phone: {result.resource.telecom?.find(t => t.system === 'phone')?.value || 'N/A'}</p>
              </div>
              <div class="edit-button-container">
                <button class="edit-button" on:click={() => handleEdit(result)}>Edit</button>
              </div>
            </div>
          </Card>
        {/each}
      </div>
    {/if}
  {/if}
</div>

<style>
  .form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(232, 247, 227);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  .search-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .form-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:first-child {
    background-color: #4CAF50; /* Green background for the Search button */
  }

  button:last-child {
    background-color: #f44336; /* Red background for the Back to Patient List button */
  }

  button:hover {
    opacity: 0.9;
    border: 1px solid black;
  }

  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  .search-results {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  :global(.card) {
    height: 200px; /* Set a fixed height for all cards */
    display: flex;
    flex-direction: column;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color:white; /* Light gray background for cards */
    padding: 15px;
    border-radius: 8px;
  }

  .patient-info {
    flex-grow: 1;
  }

  .edit-button-container {
    margin-top: auto;
    padding-top: 10px;
  }

  .card-content .edit-button {
    width: 100%;
    background-color: #4CAF50; /* Green background */
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .card-content .edit-button:hover {
    background-color: #45a049; /* Slightly darker green on hover */
    border: 1px solid black;
  }

  p {
    text-align: center;
    color: #666;
  }

  .error-message {
    color: #f44336;
    font-size: 0.8em;
    margin-top: 5px;
  }

  .no-results {
    color: #f44336;
    font-size: 0.8em;
    margin-top: 15px;
  }
</style>
