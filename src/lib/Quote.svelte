<script>
    let { quote } = $props();
</script>

<div>
    <blockquote cite={quote.citeUrl}>
        <p>
            {quote.quoteText}
        </p>
    </blockquote>
    <p>-{quote.author}, <cite>{quote.publication}</cite></p>
</div>

<style>
    div {
        background-color: rgb(247, 227, 227);
        padding: 3px dashed rgb(192, 153, 153);
        border-radius: 3px;
        margin-bottom: 1em;
        border: 1px ;
    }
    blockquote {
        background-color: rgb(192, 153, 153);
        padding: 0.2em;
        border-left: 0.5em solid black;
    }
    blockquote + p {
        margin-left: 3em;
        color: darkslategrey;
    }
</style>