<template>
    <div>
        <nuxt-link :to="link" 
                class="px-10 py-4 hover:text-slate-200 flex items-center rounded-sm bg-black/90 text-white">
                <slot></slot> <i class="fa fa-arrow-right mt-1 ms-1 "></i></nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps(['link'])
</script>

<style lang="stylus" scoped>

</style>