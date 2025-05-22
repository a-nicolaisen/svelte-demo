<script>
  import Card from "$lib/Card.svelte";
  import Quote from "$lib/Quote.svelte";
  import Navigation from "$lib/Navigation.svelte";

  let cards = [
    {
      title: "Ostermaier who?",
      user: {
        userName: "m.ostermaier",
        img: "https://picsum.photos/id/237/200/300",
      },
      info: "Hier kommt infotext rein",
    },
    {
      title: "Abdis gruesst!",
      user: {
        userName: "m.ostermaier",
        img: "https://picsum.photos/id/237/200/300",
      },
      info: "Hier kommt infotext rein",
    },
    {
      title: "Nicolaisen ist auch dabei",
      user: {
        userName: "m.ostermaier",
        img: "https://picsum.photos/id/237/200/300",
      },
      info: "Hier kommt infotext rein",
    },
    {
      title: "Jemand anderes",
      user: {
        userName: "m.ostermaier",
        img: "https://picsum.photos/id/237/200/300",
      },
      info: "Hier kommt infotext rein",
    }
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
