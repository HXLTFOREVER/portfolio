<template>
  <div class="footer" style="display: flex; flex-direction: column; justify-content: center;">
      <a-row justify="center" style="margin-bottom: 8px">
        <a-col :span='1' class="flex-center">
          <router-link to="/about">About</router-link>
        </a-col>
        <a-col :span='1' class="flex-center">
          <router-link to="/memory">Memory</router-link>
        </a-col>
        <a-col :span='1' class="flex-center">
          <router-link to="/dialy">Dialy</router-link>
        </a-col>
      </a-row>
      <a-row justify="center">
        <a-col :span='4' class="flex-center" style="gap: 1rem">
          <a-button type="circle" size="small">
            <facebook-outlined />
          </a-button>
          <a-button type="circle" size="small">
            <linkedin-outlined />
          </a-button>
          <a-button type="circle" size="small">
            <instagram-outlined />
          </a-button>
        </a-col>
      </a-row>
    </div>
</template>

<script setup>
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons-vue'

</script>

<style lang="scss" scoped>
.footer {
    height: 8rem;
  }
</style>