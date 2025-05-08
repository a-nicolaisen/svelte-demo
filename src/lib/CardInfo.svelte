<script>
  import UserDisplay from "./UserDisplay.svelte";

    let cardData = {
        title: "My Card",
    }
</script>

<div>
    <h2>{cardData.title}</h2>
    <section>
        <UserDisplay />
    </section>
</div>

<style></style>