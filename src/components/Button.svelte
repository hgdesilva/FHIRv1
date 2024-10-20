<script>
  export let message = 'Default text'
  
</script>

<button on:click>
  {message}
</button>

<style>
  button {
    margin-top: 60px;
    border: black solid;
    padding: 10px 40px;
    border-radius: 6px;
    background: rgb(107, 220, 177);
    box-shadow: 2px 2px 2px gray;
  }
</style>


