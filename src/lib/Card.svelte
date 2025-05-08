<script>
  import CardInfo from "./CardInfo.svelte";

    let cardData = {
        title: "My Card",
        image: "https://picsum.photos/seed/picsum/200/300",
        name: "Melanie Ostermaier",
        info:"This is the card information. It could be very long, just put in whatever you want"
    }
    
</script>

<div class="card">
    <CardInfo />
    <!--
    <h2>{cardData.title}</h2>
    <section class="card-info">
        <img src={cardData.image} alt={cardData.title}>
        <div>
           <h3>{cardData.name}</h3>
            <p>{cardData.info}</p> 
        </div>   
    </section>
    -->
    
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
    }
    section {
        display: flex;
    }
</style>