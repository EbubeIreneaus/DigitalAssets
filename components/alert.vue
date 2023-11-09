<template>
    <div class="border fixed  z-[700] right-0 top-20 max-w-sm w-full px-10 py-2 bg-green-800/90
     text-green-500 rounded-lg animate__animated animate__slideInRight"
     :class="{'hidden': !visible}">

        <slot></slot>
    </div>
</template>

<script setup>
    
    const props = defineProps({
        visible:{
            type:Boolean,
            default: true
        }
    })
</script>

<style lang="scss" scoped>

</style>