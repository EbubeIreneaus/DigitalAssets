<script setup>
let timeout
const count = (num, id, secs=50) => {
    let index = 0;
    const elem = document.getElementById(id);
    
    const increment = () => {
        if (index <= num) {
           elem.innerHTML = index
            index += 10;
            timeout = setTimeout(increment, secs);
        }
    };
    increment();
   
};
const scrollUsage = () =>{
    let usage, top, bottom, height
    usage = document.getElementById('usage').getBoundingClientRect()
    top = usage.top
    bottom = usage.bottom
    height = window.innerHeight

    if (top + 100 < height && bottom > 0) {
        count(700, 'dp')
        count(1100, 'au', 33)
        count(3000, 'ra', 15)
        window.removeEventListener('scroll', scrollUsage)
    }
}
onMounted(()=>{
    window.addEventListener('scroll', scrollUsage)
})

onUnmounted(() => {
    clearTimeout(timeout)
    
})
</script>

<template>
    <section id="usage"
        class="relative mt-10 bg-[url('~/assets/media/logo.jpg')] bg-cover bg-center before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-slate-950/70">
        <div class="py-5 z-40 text-white">
            <div class="flex lg:flex-row flex-wrap gap-5 mt-10 justify-center py-14 px-5">
                <div class="flex flex-col gap-2 shadow-md items-center px-5 py-5 basis-[350px] grow z-40">
                    <h2 class="text-4xl font-mono" id="dp">
                    </h2>
                    <p class="text-center">Developed Project</p>
                </div>
                <div class="flex flex-col gap-2 shadow-md items-center px-5 py-5 basis-[350px] grow z-40">
                    <h2 class="text-4xl font-mono" id="ra" >
                       
                    </h2>
                    <p class="text-center">Registered Account</p>
                </div>

                <div class="flex flex-col gap-2 shadow-md items-center px-5 py-5 basis-[350px] grow z-40">
                    <h2 class="text-4xl font-mono" id="au" >
                    
                    </h2>
                    <p class="text-center">Active Users</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
