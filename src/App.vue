<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';
import { onMounted } from 'vue';
import { ref } from 'vue'
import { useUser } from '@/store/useUser.js';
import { storeToRefs } from 'pinia';
import ja_JP from "ant-design-vue/es/locale/ja_JP";

const store = useUser()
const locale = ref(ja_JP)
const { user, user_display_name } = storeToRefs(store)
const { initUserState, login, logout } = store

onMounted(() => {
  initUserState()
})

</script>

<template>
  <a-config-provider :locale="locale">
    <NavBar />
    <div class="login-and-register">
      <a-button v-if="!user" type="primary" @click="login">Login</a-button>
      <a-button v-else type="primary" @click="logout">Logout</a-button>
      <span v-if="user">welcome {{ user_display_name }}</span>
    </div>
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </a-config-provider>

</template>

<style scoped lang="scss">
.content {
  max-width: 80%;
  margin: 0 auto;
}
</style>
