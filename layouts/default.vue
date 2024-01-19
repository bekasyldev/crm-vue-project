<script lang="ts" setup>
</script>

<template>
    <section class="gridLayout" style="min-height:100vh">
        <LayoutSidebar/>
        <div class="p-10">            
            <slot/>
        </div>
    </section>
</template>

<style scoped>
    .gridLayout {
        display: grid;
        grid-template-columns: 1fr 4fr;
    }
</style>
