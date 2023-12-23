<script  setup>
import Cookies from "js-cookie";
definePageMeta({
  layout:''
})
const props = defineProps(['api'])
const url = props.api;
const remember_me = ref(null);
const form = reactive({
  username: "",
  password: "",
});
const Login = async (e) => {
  form.username = form.username.trim()
  let submit_btn = document.getElementById("sbutton");
  submit_btn.disabled = true;
  const res = await useFetch(`${url}auth/`, {
    method: "get",
    query: form,
    key: new Date().getTime().toString(),
    watch: false,
  });

  if (res.data.value.status == "success") {
    e.target.reset();
    if (remember_me.value) {
      Cookies.set('profileId', res.data.value.profileId, { expires: 30 })
    } else {
      Cookies.set('profileId', res.data.value.profileId)
    }
    useRouter().push("/user/");

  } else if(res.data.value.status == "unverified"){
    if (remember_me.value) {
      Cookies.set('profileId', res.data.value.profileId, { expires: 30 })
    } else {
      Cookies.set('profileId', res.data.value.profileId)
    }
    useRouter().push('/auth/verify/')
  }else{
    alert("User Not Found!!!");
    submit_btn.disabled = false;
  }
}
</script>

<template>
  <div class="flex justify-center h-screen bg-slate-200">
    <br />
    <div class="h-max py-2 mt-20 w-full">
      <section class="">
        <div class="flex items-center justify-center px-2 py-8 mx-auto sm:px-10 sm:py-0">
          <div class="w-full flex flex-col md:flex-row md:items-center md:justify-center md:mt-0 py-8 px-3 shadow-md shadow-black/30">
            <div class="order-2">
                  <img src="~/assets/media/logo.png" alt="" class=" rounded-lg object-cover object-center">
                  <p class="text-sm text-center font-semibold font-serif">
                    Don't have an account yet?
                    <NuxtLink to="/auth/register"
                      class="text-primary-600 text-green-500 hover:text-green-700 font-bold font-sans">
                     Register</NuxtLink>
                  </p>
                </div>
            <div class="space-y-4 md:space-y-6 max-w-md w-full sm:p-8">
              <div class="mx-auto ">
                <logo></logo>
              </div>
              <form class="space-y-4 md:space-y-6" @submit.prevent="Login">

                <div>
                  <label for="username" class="block mb-2 text-sm font-medium">Username</label>
                  <input type="text" v-model="form.username" id="username"
                    class=" border outline-0 rounded-lg block w-full p-3"
                    placeholder="username" required />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                  <input type="password" v-model="form.password" id="password" placeholder="••••••••"
                    class=" border  text-gray-900 sm:text-sm rounded-lg  block w-full p-3 outline-0"
                    required />
                </div><br>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" v-model="remember_me"
                        class="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="">Remember me</label>
                    </div>
                  </div>
                  <NuxtLink to="/auth/fgpass" class="text-sm font-medium hover:text-green-700">Forgot password?</NuxtLink>
                </div>

                <div class="my-5 text-center">
                  <button type="submit" class="mt-2  group mb-3 ring-2 max-w-sm w-full rounded-lg py-2 font-bold
                                      ring-green-700 hover:ring-green-500 hover:ring-4 disabled:ring-0" id="sbutton">
                      <i class="fas fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                      Login
                    </button>
                </div>

              
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
