<script>
  import CardInfo from "./CardInfo.svelte";

    let cardData = {
        title: "My Card",
    }
    
</script>

<div class="card">
    <h2>{cardData.title}</h2>
    <div>
        <UserDisplay />
        <CardInfo />
    </div>
    
    
</div>

<style>
    .card {
        border: 1px solid grey;
        border-radius: 3px;
        max-width: fit-content;
        padding: 8px;
        background-color: #ccc;
        box-shadow: 5px 5px #333;
        margin: 0 1em 1em 0;
    }

    .card div {
        padding-left: 1.5em;
        display: flex;
        flex-direction: column;
    }
        
</style>