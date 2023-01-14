<template>
  <div class="memory">
    <h1>大学的回忆</h1>
    <a-row justify="center">
      <a-col :span="12">
        <a-card>
          <a-form :model="form" layout="vertical">
            <a-form-item label="标题">
              <a-input v-model:value="form.title" />
            </a-form-item>
            <a-form-item label="年份">
              <a-input v-model:value="form.date" />
            </a-form-item>
            <a-row justify="center">
              <a-button type="primary" shape="round" @click="search">检索</a-button>
            </a-row>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
    <a-row class="gallery" :wrap="true" :gutter="[16, 16]">
      <a-col v-for="item in galleries" :span="6">
        <a-card>
          <h3>{{ item.title }}</h3>
          <p>{{ item.date }}</p>
          <img :src="item.image" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { mockGallries } from '@/mock.js'

const form = reactive({
  title: '',
  date: ''
})

// 随机生成10个对象，包含title date image
let galleries = ref(mockGallries)

const search = () => {
  let res = mockGallries.filter(item => {
    return item.title.includes(form.title) && item.date.includes(form.date)
  })
  galleries.value = [...res]
}



</script>

<style lang="scss" scoped>
.memory {
  h1 {
    line-height: 4;
    text-align: center;
  }

  .gallery {

    img {
      width: 100%;
    }
  }
}
</style>