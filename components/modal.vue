<template>
    <div id="modal" class="fixed h-screen w-screen top-0 left-0 flex justify-center items-center z-50 bg-black/70 rounded-lg"
    :class="{'hidden': !visible}">
        <div class="absolute z-50 max-w-sm sm:max-w-md md:max-w-lg w-full shadow-md  bg-white">
            <button class="float-right rounded-lg py-2 px-3 m-2 ring-1
             ring-green-800 hover:ring-green-500 hover:ring-2" @click="change_visibility"><i class="fa fa-close"></i></button>
            <div class="py-10 px-5">
                <slot></slot>
            </div>
    
        </div>
    </div>
</template>

<script setup>
    
    const props = defineProps({
        visible:{
            type:Boolean
        }
    })


    const change_visibility = () =>{
        document.getElementById('modal').style.display = 'none'
        window.location.reload()
    }
</script>

<style lang="scss" scoped>

</style>