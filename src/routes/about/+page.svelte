<script>
    import Quote from "$lib/Quote.svelte";
    import Footer from "$lib/Footer.svelte";

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
</script>

<h2>About us</h2>

{#each quotes as quote}
  <Quote {quote}/>
{/each}

<Footer /> 

<style>

</style>