<template>
  <div class="dialy">
    <h1>日记</h1>
    <a-row justify="center" >
      <a-col :span="12">
        <a-card>
          <a-form :model="form" layout="vertical">
            <a-form-item label="标题">
              <a-input v-model:value="form.title" />
            </a-form-item>
            <a-form-item label="内容">
              <a-input v-model:value="form.content" />
            </a-form-item>
            <a-row justify="center" :gutter="12">
              <a-col :span="12">
                <a-form-item label="日期">
                  <a-date-picker style="width: 100%" v-model:value="form.date" />
                </a-form-item>
              </a-col>
              <a-col :span="12" style="display: flex; align-items: center;">
                <a-button type="primary" shape="round" @click="add" style="width: 100%">投稿</a-button>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
    <a-row class="dialies" :gutter="[0, 16]">
      <a-spin :spinning="loading">
        <a-card class="cus-card" v-for="item in dialies">
          <h3>{{ item.title }}</h3>
          <span>{{ item.date }}</span>
          <p>{{ item.content }}</p>
          <div class="buttons">
            <font-awesome-icon v-if="user" icon="fa-solid fa-pen-to-square" @click="edit(item)" />
            <font-awesome-icon v-if="user" icon="fa-solid fa-trash" @click="remove(item.id)" />
          </div>
        </a-card>
      </a-spin>

    </a-row>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import { collection, addDoc, setDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase/index'
import { useUser } from '@/store/useUser';
import { storeToRefs } from 'pinia';

const { user } = storeToRefs(useUser())

const loading = ref(false)
const form = reactive({
  title: '',
  content: '',
  date: ''
})

// 随机生成10个对象，包含title date image
let dialies = ref([])

onMounted(async () => {
  loading.value = true
  const querySnapshot = await getDocs(collection(db, "dialy"));
  let res = []
  querySnapshot.forEach((doc) => {
    const { id, title, content, date } = doc.data()
    console.log(id, title, content, date);
    res.push({
      id,
      title,
      content,
      date
    })
  });
  dialies.value = res
  loading.value = false
})

const add = () => {
  dialies.value.push({
    id: Math.random(),
    title: form.title,
    content: form.content,
    date: dayjs(form.date).format('YYYY-MM-DD')
  })
}

const edit = (row) => {
  form.title = row.title
  form.content = row.content
  form.date = dayjs(row.date)
}

const remove = (id) => {
  dialies.value = dialies.value.filter(item => item.id !== id)
}

const setMemos = async (db, target, title, content) => {
  if (target.id === null) {
    await addDoc(collection(db, 'dialy'), {
      title: form.title,
      content: form.content,
      date: dayjs(form.date).format('YYYY-MM-DD'),
      author_uid: user.uid
    })
  } else {
    await setDoc(doc(db, "dialy", target.id), {
      title: "Los Angeles",
      content: "CA",
      created: "USA",
      author_uid: user.uid
    });
  }
}

</script>

<style lang="scss" scoped>
.dialy {
  h1 {
    line-height: 4;
    text-align: center;
  }

  .dialies {
    margin-top: 2rem;
    flex-direction: column;

    .cus-card {
      flex: 1;
    }

    .cus-card:deep(.ant-card-body) {
      padding: 0;
      display: grid;
      grid-template-areas:
        "title date"
        "content content"
        "buttons buttons";

      h3 {
        grid-area: title;
        padding: 16px;
        font-size: 18px;
        font-weight: 600;
      }

      span {
        grid-area: date;
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 16px;
        font-size: 14px;
        color: #999;
      }

      p {
        grid-area: content;
        padding: 0 16px;
        font-size: 14px;
        color: #666;
      }

      .buttons {
        grid-area: buttons;
        display: flex;
        justify-content: flex-start;
        gap: 16px;
        padding: 16px;
        font-size: 18px;
        color: #333;
        cursor: pointer;
      }
    }

  }


}
</style>