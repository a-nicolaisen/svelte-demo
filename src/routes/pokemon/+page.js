const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"

export async function load({ fetch }) {
    const res = await fetch(url);
    const poke = await res.json();
    return { poke };
}