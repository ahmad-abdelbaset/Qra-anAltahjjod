

<script lang="ts">
  import { browser } from "$app/environment";
  import { setupIonicSvelte } from 'ionic-svelte';
  
  
  import '/src/css/ionic.css';
  import '/src/css/ionic.app.min.css';
  import '/src/css/ionic.app.css';
  import '/src/css/ionic.min.css';  
  import '/src/css/style.css';
  import '/src/css/menu.css';
  import '/src/css/model.css';

  setupIonicSvelte();

  export let data;


  let SurahComponent;


  import(`../${data.playlist.id}.svelte`).then(module => {
    SurahComponent = module.default;
  });


  function nav_back() {
    if (browser) window.history.back();
}



</script>

<div class="navbar">

  <div class="nav">
    <button class="back" on:click={nav_back}>  &lt; الفهرس</button>
    <h1>{data.playlist.title}</h1>
  </div>

</div>

<div class="scrollable-container" dir="rtl">


  {#if SurahComponent}
  <SurahComponent />
{:else}
  <p>No Surah component found for this title.</p>
{/if}

<!--

  <h1>{data.title}</h1>
  {#if data.title == 1}
  <Surah1 />
{:else if data.title == 2}
  <Surah2 />
  {/if}
-->
</div>


<style>

.scrollable-container {
    max-height: 100vh; /* Set your desired height */
    overflow: auto;
  }
 

  .navbar {
    display: flex;
    background-color: #444;
    color: #ddd;
    align-items: center;
    position: relative;
  }

  .nav {
      display: flex;
      justify-content: flex-start; /* Updated to align items to the left */
      width: 100%;
      }

  h1 {
    margin: 0 auto;
    font-family: 'Cairo', sans-serif;
    padding: 7px;
    text-align: center;
    font-size: 17px;
    font-weight: lighter;
    color: #ddd;
  }

  .back {
      height: 28px;
      border: 0px;
      background-color: transparent;
      border-radius: 5px;
      display: flex;
      align-items: center; /* Add this line to vertically center the button */
      text-align: left;
      font-family: 'Cairo', sans-serif;
      padding: 7px;
      font-size: 17px;
      font-weight: lighter;
      color: #ddd;
      margin-top: 5px;
      
      }



</style>