<script>
  import Footer from "$lib/Footer.svelte";
  import Card from "$lib/Card.svelte";
  import Header from "$lib/Header.svelte";
  import Quote from "$lib/Quote.svelte";

  let quotes = [
    {
    quoteText: "Das ist so ein Spruch von mir...",
    author: "Melanie Ostermaier",
    publication: "Apartment 306",
    citeUrl: "https://www.huxley.net/bnw/four.html"
    },  
  {
    quoteText: "Words can be like X-rays, if you use them properly - they'll go through anything. You read and you're pierced.",
    author: "Aldos Huxley",
    publication: "Brave new World",
    citeUrl: "https://www.huxley.net/bnw/four.html"
    },
    {
      quoteText: "lorem...",
      author: "Lorem Author",
      publication: "Lorem is boring by now",
      citeUrl: "https://www.huxley.net/bnw/four.html"
    },
    {
      quoteText: "Heute zitiere ich Melanie Ostermaier: Hallooooooooo",
      author: "Alina",
      publication: "Spoken",
      citeUrl: "https://www.huxley.net/bnw/four.html"
    },
    {
      quoteText: "I'm batman!!",
      author: "Batman",
      publication: "Marvel",
      citeUrl: "https://www.huxley.net/bnw/four.html"
    }
  ];

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

{#each quotes as quote}
  <Quote {quote}/>
{/each}

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