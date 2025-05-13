<script>
    let quote = {
        quoteText: "Words can be like X-rays, if you use them properly - they'll go through anything. You read and you're pierced.",
        author: "Aldos Huxley",
        publication: "Brave new World",
        citeUrl: "https://www.huxley.net/bnw/four.html"
    }
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

</style>