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
        padding: 3px;
        margin-bottom: 1em;
    }
    blockquote {
        background-color: rgb(192, 153, 153);
        padding: 0.2em;
    }
</style>