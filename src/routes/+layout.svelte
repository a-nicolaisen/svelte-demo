<script>
  import Header from "$lib/Header.svelte";

  let { children } = $props();
</script>

<!--Include the main heading and the navigation-->
<Header />
<!--This is where the page content will go-->
{@render children()}

<style>
</style>
