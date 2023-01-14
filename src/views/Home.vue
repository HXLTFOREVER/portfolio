<template>
  <div class="container">
    <div class="profile">
      <a-row justify="center">
        <a-col :span='1'>
          <a-avatar :size="64" :src="avatar1" />
        </a-col>
      </a-row>
      <a-row justify="center">
        <a-col :span="2">
          <p style="text-align: center;">北陆大学 经济学</p>
        </a-col>
      </a-row>
      <a-row justify="center">
        <a-col :span="12">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi, sapiente cum sed ea ipsum ad
            laudantium! Saepe earum veritatis molestiae dolorum modi asperiores repudiandae voluptates atque aut maxime?
            Alias!
          </p>
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
          <img :src="avatar2" />
        </a-col>
        <a-col :span="7">
          <img :src="avatar4" />
        </a-col>
        <a-col :span="7">
          <img :src="avatar3" />
        </a-col>
      </a-row>
      <a-row style="margin: 3rem 0" justify="center">
        <a-col :span="2" style="display: flex;align-items: center;">
          <span>大学的思い出</span>
        </a-col>
        <a-col :span="2">
          <a-button shape="round">Memory</a-button>
        </a-col>
      </a-row>
      <a-divider />
    </div>

    <div class="info">
      <a-row justify="center" align="middle" style="margin: 3rem 0">
        <a-col :span="4" class="flex-center">
          <span>资格</span>
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
            <h1>Web开发</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque labore provident suscipit nisi a quia
              asperiores earum, in tempora. Aliquid corporis iure excepturi qui. Ex nam similique excepturi tempora
              quos?</p>
          </a-card>
        </a-col>
        <a-col :span="7">
          <a-card class="cus-card" :bordered="false">
            <a-button shape="circle" type="primary">
              <template #icon>
                <font-awesome-icon icon="fa-regular fa-lightbulb" />
              </template>
            </a-button>
            <h1>Web开发</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque labore provident suscipit nisi a quia
              asperiores earum, in tempora. Aliquid corporis iure excepturi qui. Ex nam similique excepturi tempora
              quos?</p>
          </a-card>
        </a-col>
        <a-col :span="7">
          <a-card class="cus-card" :bordered="false">
            <a-button shape="circle" type="primary">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-ribbon" />
              </template>
            </a-button>
            <h1>Web开发</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque labore provident suscipit nisi a quia
              asperiores earum, in tempora. Aliquid corporis iure excepturi qui. Ex nam similique excepturi tempora
              quos?</p>
          </a-card>
        </a-col>
      </a-row>

    </div>

    <div class="activity">
      <a-card class="cus-card" :bordered="false">
        <div class="card-left">
          <h1>活动</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem adipisci doloremque, asperiores, eos
            quibusdam perferendis possimus facere, repudiandae repellat nisi magnam nam aperiam ipsam. In nihil deserunt
            iure ipsum aliquam.</p>
        </div>
        <div class="card-right">
          <img :src="activity">
        </div>
      </a-card>
    </div>



  </div>
</template>

<script setup>
import avatar1 from '@/assets/images/1.jpeg'
import avatar2 from '@/assets/images/2.jpg'
import avatar3 from '@/assets/images/3.jpg'
import avatar4 from '@/assets/images/4.jpg'
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