<template>
  <div class="about-page">
    <div class="course">
      <h1 style="text-align: center;line-height: 4;">２０２１年度　後期時間割</h1>
      <a-row justify="center">
        <a-col :span="14">
          <a-table :columns="columns" :data-source="data" :pagination="false" />
        </a-col>
      </a-row>
    </div>
    <a-divider />
    <div class="experience">
      <h1 style="text-align: center;line-height: 4;">職歴・アルバイト歴を配置</h1>
      <ul class="list">
        <li class="item">
          <h1 class="title">マクドナルド</h1>
          <div class="time">2020.1.5－2020.3.5</div>
          <div class="badge">
            <a-tag color="#4798fd">
              Amazing Co.
            </a-tag>
          </div>
          <div class="content">
          </div>
        </li>
        <li class="item">
          <h1 class="title">ファミリーマート</h1>
          <div class="time">2022.5.27-2023.1.20</div>
          <div class="badge">
            <a-tag color="#4798fd">
              Amazing Co.
            </a-tag>
          </div>
          <div class="content">
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
              High School
            </a-tag>
          </div>
          <div class="content">
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
              2000/01/01
            </p>
            <p>
              <span><font-awesome-icon icon="fa-solid fa-user" /></span>
              蜡笔小新
            </p>
            <p>
              <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
              1234567890
            </p>
            <p>
              <span><font-awesome-icon icon="fa-solid fa-envelope" /></span>
            </p>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div class="hobbies">
      <h1>趣味</h1>
      <a-typography-paragraph class="desc">
      </a-typography-paragraph>
    </div>
    <a-divider />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const columns = [
  {
    title: '#',
    dataIndex: 'idx',
    key: 'idx',
  },
  {
    title: '月曜',
    dataIndex: 'Monday',
    key: 'monday',
  },
  {
    title: '火曜',
    dataIndex: 'Tuesday',
    key: 'tuesday',
  },
  {
    title: '水曜',
    dataIndex: 'Wednesday',
    key: 'wednesday',
  },
  {
    title: '木曜',
    dataIndex: 'Thursday',
    key: 'thursday',
  },
  {
    title: '金曜',
    dataIndex: 'Friday',
    key: 'friday',
  },
]
const data = ref([
  {
    idx: 1,
    Monday: '',
    Tuesday: '',
    Wednesday: '情報通信ネットワークⅡ',
    Thursday: '',
    Friday: '卒業研究',
  },
  {
    idx: 2,
    Monday: '',
    Tuesday: 'データベースⅡ',
    Wednesday: '',
    Thursday: '',
    Friday: '卒業研究',
  },
  {
    idx: 3,
    Monday: 'コーポレートファイナンス',
    Tuesday: 'データベースⅡ',
    Wednesday: '',
    Thursday: '民法Ⅲ',
    Friday: '',
  },
  {
    idx: 4,
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
  },
  {
    idx: 5,
    Monday: '',
    Tuesday: '',
    Wednesday: 'Javaプログラミング応用',
    Thursday: 'Cプログラミング',
    Friday: '情報システムⅡ',
  },
])

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