<script setup>
import Cookies from 'js-cookie'
if (Cookies.get('userId')) {
    Cookies.remove('userId')
}
useRouter().push('/auth/signin')
onBeforeMount(() => {

})
</script>

<template></template>