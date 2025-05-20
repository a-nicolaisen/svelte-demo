<script>
  let text = $state("");
</script>

<section class="headline">
  <h2>Alina's Blog</h2>
  <p>welcome to my personal blog! Leave a comment down below :)</p>
</section>

<!--Links will go here-->
<ul>
  <li><a href="/blog/apples">Who else loves apples</a></li>
  <li><a href="/blog/two">numero dos</a></li>
  <li><a href="/blog/gesundheit">Stay healthy</a></li>
  <li><a href="/blog/dogs">Dogs are my favorite</a></li>
</ul>

<section class="comments">
  <div class="input">
    <label for="comment">Leave a nice comment!</label>
    <input id="comment" type="text" />
    <input bind:value={text} />
    <p>This is from the input: {text}</p>
  </div>

  <div class="posts">
    <p>Here's the first post</p>
  </div>
</section>

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
    margin-bottom: 1em;
    margin-top: 1em;
  }

  ul {
    display: inline;
  }

  ul li {
    padding-left: 2em;
    margin-bottom: 0.3em;
  }

  a {
    text-decoration: none;
    color: rosybrown;
  }
</style>
