<template>
    <div>
        <div class="py-10">
            <div class="flex items-center justify-center gap-10 w-[300px] border mx-auto py-10">
                <i class="fa fa-wallet"></i>
                <div>
                    <h2 class="font-mono font-bold text-xl"><i class="fa fa-dollar-sign"></i>5.00</h2>
                    <p>Account balance</p>
                </div>
            </div>
            <div class="max-w-xl w-full mx-auto my-10 font-sans">
                <form>
                    <div>
                        <label class="text-black/50 mb-1">Enter Email or Username</label>
                        <input type="text" class="block py-2 w-full ps-2 outline-none border mt-2" 
                        placeholder="enter receipant email address or username"/>
                    </div><br>
                    <div>
                        <label class="text-black/50 ">Amount(<i class="fa fa-dollar-sign"></i>)</label>
                        <input type="text" class="block py-2 w-full ps-2 outline-none border mt-2" 
                        placeholder="enter amount"/>
                    </div><br>
                    <p class="font-semibold text-[1.2em] text-black/50">Transfer Charges: <span class="text-red-500">12%</span></p>
                    <br>
                    <button type="submit" class="w-full text-center py-3 bg-orange-600 text-white">proceed</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'db'
})
</script>

<style lang="scss" scoped>

</style>