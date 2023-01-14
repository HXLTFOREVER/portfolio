<script setup>
import { ref } from 'vue'


const count = ref(0)
</script>

<template>
  <div class="navbar">
    <h1>Fujimoto's Portfolio</h1>
    <ul class="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/memory">Memory</router-link>
      </li>
      <li>
        <router-link to="/dialy">Dialy</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss" >
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: rgba(75, 134, 250, 1.0);
  color: #fff;
  height: 60px;

  h1 {
    font-size: 2rem;
    margin-left: 2rem;
    margin-bottom: 0;
    color: #fff;
  }

  .nav {
    display: flex;
    list-style: none;
    font-size: 1.5rem;
    gap: 2rem;
    margin-bottom: 0;

    li {
      margin-left: 1rem;

      a {
        text-decoration: none;
        color: #fff;
      }
    }

    &:last-child {
      margin-right: 2rem;
    }
  }
}
</style>
