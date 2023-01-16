<template>
  <div class="container">
    <div class="profile">
      <a-row justify="center">
        <a-col :span='1'>
          <a-avatar :size="64" :src="avatar" />
        </a-col>
      </a-row>
      <a-row justify="center">
        <a-col style="height: 7rem;display: flex; align-items: center;justify-content: center;" :span="6">
          <p style="margin-bottom: 0;">北陸大学　経済経営学部　潘明です</p>
        </a-col>
      </a-row>
      <a-row justify="center">
        <a-col style="height: 7rem;display: flex; align-items: center;justify-content: center;" :span="12">
          <p>北陸大学の留学生です</p>
        </a-col>
      </a-row>
      <a-row justify="center">
        <a-col :span="2" class="flex-center">
          <a-button shape="round" @click="$router.push('/about')">About Me</a-button>
        </a-col>
      </a-row>
    </div>
    <div class="memorys">
      <a-row justify="space-between">
        <a-col :span="7">
          <img :src="image1" />
        </a-col>
        <a-col :span="7">
          <img :src="image2" />

        </a-col>
        <a-col :span="7">
          <img :src="image3" />
        </a-col>
      </a-row>
      <a-row style="margin: 3rem 0" justify="center">
        <a-col :span="2" style="display: flex;align-items: center;">
          <span>大学の思い出</span>
        </a-col>
        <a-col :span="2">
          <a-button shape="round" @click="$router.push('/memory')">Memory</a-button>
        </a-col>
      </a-row>
      <a-divider />
    </div>

    <div class="info">
      <a-row justify="center" align="middle" style="margin: 3rem 0">
        <a-col :span="4" class="flex-center">
          <h2 style="font-weight: bold;">スキルや資格</h2>
        </a-col>
      </a-row>
      <a-row justify="space-between">
        <a-col :span="7">
          <a-card class="cus-card" :bordered="false">
            <a-button shape="circle" type="primary">
              <template #icon>
                <font-awesome-icon icon="fa-regular fa-star" />
              </template>
            </a-button>
            <h1>コンピュータ</h1>
            <p>プログラミングが得意な方</p>
          </a-card>
        </a-col>
        <a-col :span="7">
          <a-card class="cus-card" :bordered="false">
            <a-button shape="circle" type="primary">
              <template #icon>
                <font-awesome-icon icon="fa-regular fa-lightbulb" />
              </template>
            </a-button>
            <h1>ダンス</h1>
            <p>ハンサムなストリートダンスを踊ることができる</p>
          </a-card>
        </a-col>
        <a-col :span="7">
          <a-card class="cus-card" :bordered="false">
            <a-button shape="circle" type="primary">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-ribbon" />
              </template>
            </a-button>
            <h1>バスケットボールをする.</h1>
            <p>バスケットボールは大好きなスポーツです。</p>
          </a-card>
        </a-col>
      </a-row>

    </div>

    <div class="activity">
      <a-card class="cus-card" :bordered="false">
        <div class="card-left">
          <h1>ゼミでの活動</h1>
          <p>毎週金曜日の一限と二限</p>
        </div>
        <div class="card-right">
          <img style="border: 5px solid #fff" :src="activity">
        </div>
      </a-card>
    </div>



  </div>
</template>

<script setup>
import avatar from '@/assets/images/avatar.jpg'
import image1 from '@/assets/images/image1.jpg'
import image2 from '@/assets/images/image2.jpg'
import image3 from '@/assets/images/image3.jpg'
import activity from '@/assets/images/activity.jpg'

</script>

<style lang="scss" scoped>
.container {
  min-height: 100%;
  overflow-y: auto;


  .profile {
    margin: 5rem 0;
  }

  .memorys {

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {

    margin-bottom: 8rem;

    .cus-card :deep(.ant-card-body) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  }

  .activity {
    height: 40rem;
    background-color: rgb(103, 121, 247);

    .cus-card {
      height: 100%;
    }

    .cus-card:deep(.ant-card-body) {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: rgb(103, 121, 247);
    }

    .card-left {
      color: white;
      width: 40rem;

      h1 {
        color: white;
      }
    }

    img {
      width: 30rem;
      height: 100%;
      object-fit: cover;
    }
  }



}
</style>