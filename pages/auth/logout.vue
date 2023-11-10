<script setup>
import Cookies from 'js-cookie'
if (Cookies.get('profileId')) {
    Cookies.remove('profileId')
}
useRouter().push('/auth/login')
onBeforeMount(() => {

})
</script>

<template></template>