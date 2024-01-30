<script>
    export let data
    let Article

    import(`../../../articles/${data.title}.md`).then(module => {
        Article = module.default;
    });
</script>

{#if Article}
    <svelte:component this={Article} />
{/if}