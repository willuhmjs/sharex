<script lang="ts">
	import { onMount } from "svelte";

let api_key = "";
onMount(() => {
  api_key = localStorage.getItem("api_key") || "";
})

</script>

<form method="post" action="/upload" enctype="multipart/form-data" on:submit={() => localStorage.setItem("api_key", api_key)}>
  <input required name="api_key" type="text" bind:value={api_key} placeholder="API Key"/>  
  <input required name="file" type="file" />
    <button>Upload</button>
  </form>