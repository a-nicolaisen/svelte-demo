<script>
  import Footer from "$lib/Footer.svelte";
  import Card from "$lib/Card.svelte";
  import Header from "$lib/Header.svelte";
  import Quote from "$lib/Quote.svelte";
  import Navigation from "$lib/Navigation.svelte";

  let cards = [
    {
        title: "Ostermaier who?"
    },
    {
        title: "Abdis gruesst!"
    },
    {
        title: "Nicolaisen ist auch dabei"
    },
    {
        title: "Jemand anderes"
    }
  ];
</script>

<Header />
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


<section class="card-grid">
  {#each cards as card}
    <Card {card}/>
  {/each}
</section>
<Footer />

<style>
    :global(*) {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
</style>