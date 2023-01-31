<template>
    <Section class="page_404">
        <div class="container notFound">
            <div class="text-404">
                <H1 class="Text-Center "> 404 </H1>
            </div>
            <div class="Contant_box_404">
                <H3> Look Like You're Lost </H3>
                <P> The Page You Are Looking For Not Available! </P>
            </div>
            <div class="linkNotFound">
                <router-link to="/" class="Link_404"> Go To Home </router-link>
            </div>
        </div>
    </Section>
</template>

<script>
    export default {
        name: 'pageNotFound',
    }
</script>

<style scoped>
    .linkNotFound a:hover { color:#fff; font-weight:bold; }
</style>