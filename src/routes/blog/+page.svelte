<script>
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";


</script>

<Header />
<section class="headline">
    <h2>Alina's Blog</h2>
    <p>welcome to my personal blog! Leave a comment down below :)</p> 
</section>
<section class="comments">
    <div class="input">
        <label for="comment">Leave a nice comment!</label>
        <input id="comment" type="text"> 
    </div>
    
    <div class="posts">
        <p>Here's the first post</p>
    </div>
</section>

<Footer />

<style>
    .headline {
        color: rosybrown;
        font-style: bold;
    }

    .input {
        display: flex;
        flex-direction: column;
    }

    .input input {
        min-height: 150px;
    }
    .comments {
        background-color: rgb(240, 240, 240);
        padding: 2em;
    }
</style>