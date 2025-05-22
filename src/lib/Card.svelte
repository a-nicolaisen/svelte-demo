<script>
  import CardInfo from "./CardInfo.svelte";
  import UserDisplay from "./UserDisplay.svelte";

  let { cardData } = $props();
  let user = cardData.user;
  let info = cardData.info;
</script>

<div class="card">
  <h2>{cardData.title}</h2>
  <div>
    <UserDisplay {user} />
    <CardInfo {info} />
  </div>
</div>

<style>
  .card {
    border: 1px solid grey;
    border-radius: 3px;
    max-width: 500px;
    padding: 1.5em;
    background-color: #ccc;
    box-shadow: 5px 5px #333;
    margin: 0 1em 1em 0;
  }

  .card div {
    display: flex;
  }
</style>
