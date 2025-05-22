<script>
  import Card from '$lib/Card.svelte';

    // This page will display bunch of pokemon cards
    let { data } = $props();
    const pokemon = data.poke.results;
    console.log(pokemon);

    // const pokeData = {
    //     title: pokemon.name,
    //     user: {
    //         userName: pokemon.name,
    //         img: pokemon.sprites.front_default,
    //     },
    //     info: "space for more information",
    // }
</script>

<!--<Card cardData={pokeData}/> -->

{#each pokemon as mon}
    <li>
        <a href={mon.url}>{mon.name}</a>
    </li>
    
{/each}

<style>

</style>