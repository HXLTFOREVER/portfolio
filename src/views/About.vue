<template>
  <div class="about-page">
    <div class="course">
      <h1 style="text-align: center;line-height: 4;">2021年度 课程安排</h1>
      <a-row justify="center">
        <a-col :span="10">
          <a-table :columns="columns" :data-source="data" />
        </a-col>
      </a-row>
    </div>
    <a-divider />
    <div class="experience">
      <h1 style="text-align: center;line-height: 4;">職歴・アルバイト歴を配置</h1>
      <ul class="list">
        <li class="item" v-for="item in 3">
          <h1 class="title">Web Developer</h1>
          <div class="time">2019-10-21</div>
          <div class="badge">
            <a-tag color="#4798fd">
              hello world
            </a-tag>
          </div>
          <div class="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, omnis! Aliquid
            nostrum magnam nisi similique sint perferendis et vero necessitatibus iusto est, magni nulla beatae corporis
            fugit reiciendis, qui omnis?
          </div>
        </li>
      </ul>
    </div>

    <div class="education">
      <h1 style="text-align: center;line-height: 4;">学歴</h1>
      <ul class="list">
        <li class="item" v-for="item in 2">
          <h1 class="title">High School</h1>
          <div class="time">2019-10-21</div>
          <div class="badge">
            <a-tag color="#2dc998">
              hello world
            </a-tag>
          </div>
          <div class="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, omnis! Aliquid
            nostrum magnam nisi similique sint perferendis et vero necessitatibus iusto est, magni nulla beatae corporis
            fugit reiciendis, qui omnis?
          </div>
        </li>
      </ul>
    </div>

    <div class="skill-contact-info">
      <a-row type="flex" :gutter="16" justify="center">
        <a-col :span="10">
          <a-card>
            <h1>Skills</h1>
            <h3>HTML</h3>
            <a-progress :percent="100" :showInfo="false" />
            <h3>PHP</h3>
            <a-progress :percent="90" :showInfo="false" />
            <h3>JavaScript</h3>
            <a-progress :percent="80" :showInfo="false" />
          </a-card>
        </a-col>
        <a-col :span="10">
          <a-card>
            <h1>Contact Info</h1>
            <p>
              <span><font-awesome-icon icon="fa-regular fa-calendar" /></span>
              2000/10/21
            </p>
            <p>
              <span><font-awesome-icon icon="fa-solid fa-user" /></span>
              坂本 一龙
            </p>
            <p>
              <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
              17354312163
            </p>
            <p>
              <span><font-awesome-icon icon="fa-solid fa-envelope" /></span>
              1216044881@qq.com
            </p>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div class="hobbies">
      <h1>趣味</h1>
      <a-typography-paragraph class="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime totam deserunt, repellat
        debitis tempora qui
        ipsa modi voluptate quaerat obcaecati, quas et fugiat voluptatum laborum veritatis labore inventore odit?
        Quaerat!</a-typography-paragraph>
    </div>
    <a-divider />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns = []
const data = ref([])

</script>

<style lang="scss" scoped>
.about-page {

  .course {}

  .experience {

    .list {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      .item {
        width: 80%;
        display: grid;
        grid-gap: 1rem;
        grid-template-areas:
          "title time"
          "badge badge"
          "desc desc"
        ;
        align-items: center;
        padding-bottom: 1rem;
        border-bottom: 2px solid #f4f4f4;

        .title {
          grid-area: title;
          margin-bottom: 0;
        }

        .time {
          grid-area: time;
          display: flex;
          justify-content: end;
        }

        .badge {
          grid-area: badge;
        }

        .content {
          grid-area: desc;
        }

      }
    }
  }

  .education {
    margin-bottom: 8rem;
    .list {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      .item {
        width: 80%;
        display: grid;
        grid-gap: 1rem;
        grid-template-areas:
          "title time"
          "badge badge"
          "desc desc"
        ;
        align-items: center;
        padding-bottom: 1rem;
        border-bottom: 2px solid #f4f4f4;

        .title {
          grid-area: title;
          margin-bottom: 0;
        }

        .time {
          grid-area: time;
          display: flex;
          justify-content: end;
        }

        .badge {
          grid-area: badge;
        }

        .content {
          grid-area: desc;
        }

      }
    }
  }

  .skill-contact-info {
    overflow-x: hidden;

    h1,
    h3 {
      margin-bottom: 0;
    }

    svg {
      color: #4c9bfd;
      margin-right: 2rem;
    }
  }

  .hobbies {
    margin-bottom: 4rem;
    h1 {
      line-height: 4;
      text-align: center;
    }

    .desc {
      width: 50%;
      margin: 0 auto;
    }
  }
}
</style>