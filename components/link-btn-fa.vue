<template>
    <div>
        <nuxt-link :to="link" 
                class="px-10 py-4  hover:bg-green-700 hover:text-black flex items-center rounded-lg bg-black text-green-700">
                <slot></slot> <i class="fa fa-arrow-right mt-px ms-px"></i></nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps(['link'])
</script>

<style lang="stylus" scoped>

</style>