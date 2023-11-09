<script setup>
definePageMeta({
    layout: "db",
});
const userId = inject("userId");
const account = inject("account");
const url = inject("url");
const withdraw_success = ref(false)
const form = reactive({
    profileId: account.value.profile.id,
    amount: '',
    wallet: "",
    password: "",
    channel: "BTC",
});

const validate_withdrawal = () => {
    if (form.amount == '' || form.wallet == '' || form.channel == '' || form.password == '') {
        alert("please fill in the form completely before initiating transaction")
        return false
    }
    if (account.value.balance < form.amount) {
        alert("insufficient funds on your account balance")
        return false
    }
    return true
}

const initiate = async (e) => {
    const sbutton = document.getElementById("sbutton");

    if (!validate_withdrawal()) {
        return false;
    }
    sbutton.disabled = true;
    const { data: res, error: error } = await useFetch(`${url}transaction/withdraw/`, {
        method: "post",
        watch: false,
        body: form,
        key: new Date().getTime().toString(),
    });

    if (res.value) {
        if (res.value.status == "success") {
            withdraw_success.value = true
            sbutton.disabled = false
            e.target.reset();
        } else {
            alert("could not initiate this transaction, Error details \n" + res.value.code);
            sbutton.disabled = false;
        }
    } else {
        alert("could not initiate this transaction at this moment try again later!!!");
        sbutton.disabled = false;
    }
};
</script>

<template>
    <div class="flex justify-center">
        <br />
        <div class="h-max py-2 w-full">
            <section class="">
                <div class="flex items-center justify-center  mx-auto  mt-10">
                    <div class="w-full rounded-lg md:mt-0 w-full xl:p-0 px-4 py-8 shadow-lg max-w-2xl">
                        <div class="space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                                Withdraw Funds
                            </h1>
                            <form class="space-y-3 md:space-y-4" @submit.prevent="initiate($event)" autocomplete="off">
                                <div class="flex gap-2 md:flex-row flex-col">
                                    <div class="w-full">
                                        <label for="amount" class="block mb-1 text-sm font-medium">Amount(USD)</label>
                                        <input type="number" min="100" v-model="form.amount" placeholder="100"
                                            class="!appearance-none w-full py-2 px-3 font-mono border 
                                            outline-none out-of-range:ring-1 out-of-range:ring-red-500" />
                                    </div>
                                    <div class="w-full">
                                        <label for="">Channel</label>
                                        <select v-model="form.channel"
                                            class="appearance-none w-full  py-2  px-3 font-mono border outline-none">
                                            <option value="BTC"  class="outline-0 border py-2">BTC</option>
                                            <option value="TETHER USDT"  class="outline-0 border py-2">TETHER USDT</option>
                                            <option value="ETHEREUM"  class="outline-0 border py-2">ETHERUM</option>
                                            <option value="BNB" class="outline-0 border py-2">BNB</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label for="address" class="block mb-1 text-sm font-medium">Wallet Address</label>
                                   <textarea id="wallet-address" rows="2" v-model="form.wallet"
                                    placeholder="Paste Wallet Address" class="w-full border outline-0 p-2"></textarea>
                                </div>
                                <div>
                                    <label for="password" class="block mb-1 text-sm font-medium">Password</label>
                                    <input type="password" v-model="form.password"
                                        class="w-full py-2 my-2 px-3 font-mono border outline-none invalid:ring-1 invalid:ring-red-500" />
                                </div>
                                <div class="mt-5 ">
                                    <button type="submit"
                                        class="ring-1  px-10 py-3 mt-3 hover:ring-4 rounded-md group disabled:cursor-not-allowed disabled:ring-0 disabled:border"
                                        id="sbutton">
                                        <i class="fas fa-spinner !hidden group-disabled:!inline-block animate-spin"></i>
                                        Procceed
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <modal :visible="withdraw_success">
            <div>
                <div class="flex gap-5 items-center ">
                    <img src="~/assets/media/successful.png" alt="" class="w-14 h-14 object-cover">
                    <h2 class="text-2xl font-bold">Withdrawal Initiated Succesfull</h2>
                </div>
                <div>

                    <p class="text-sm font-bold italic">We have recieve your withdrawal request and we are currently working on
                    your payment, kindly note that this may take up to 24hrs. if you have any issue on this transaction
                       kindly send or email us the id of this transaction <small class="text-xsm">see dashboard for transaction details</small></p>
                </div>
            </div> 
        </modal>
    </div>
</template>

<style lang="scss" scoped></style>
