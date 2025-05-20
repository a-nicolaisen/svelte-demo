<script>
  import Card from "$lib/Card.svelte";
  import Quote from "$lib/Quote.svelte";
  import Navigation from "$lib/Navigation.svelte";

  let cards = [
    {
      title: "Ostermaier who?",
    },
    {
      title: "Abdis gruesst!",
    },
    {
      title: "Nicolaisen ist auch dabei",
    },
    {
      title: "Jemand anderes",
    },
  ];
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<section class="card-grid">
  {#each cards as card}
    <Card {card} />
  {/each}
</section>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
