<template>
    <div>
        <slot></slot>
    </div>
</template>

<script setup>
const url = "http://127.0.0.1:8000/"
provide('url', url)
</script>

<style lang="scss" scoped>

</style>