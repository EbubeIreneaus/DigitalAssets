<template>
    <div class="border  max-w-lg !w-full  min-h-[200px] py-5 shadow-md shadow-black/40 bg-slate-100">
        <div>
            <div>
                <div>
                    <div class="border p-1 bg-orange-500 rounded-full w-fit mx-auto">
                        <i class="fa fa-warning  p-1 text-white"></i>
                    </div>
                    <p class="px-5 py-5 text-center font-bold text-black/60">
                        All new and exisiting user are required to complete intermediate identity verification
                        to access the full range of digital assets product and services
                    </p>
                    <div class="w-full my-3">
                        <button 
                        class="border block mx-auto px-12 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-400"
                        >
                        Verify now
                        </button>
                        <p class="text-center my-3 font-semibold space-x-2 underline underline-offset-1 text-orange-300"><nuxt-link to="/user/">cancel</nuxt-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'verification'
})
</script>

<style scoped></style>