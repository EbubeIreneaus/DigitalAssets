<template>
    <div>
        <nuxt-link :to="link" 
                class="px-10 py-4 hover:bg-orange-400 flex items-center rounded-sm bg-orange-600 text-white">
                <slot></slot> <i class="fa fa-arrow-right mt-1 ms-1 "></i></nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps(['link'])
</script>

<style lang="stylus" scoped>

</style>