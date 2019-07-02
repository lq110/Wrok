<template>
  <div>
    这是首页
    <div class="container">
      <!-- 轮播图 -->
      <Banner :swiperSlides="slider" />
      <!-- 列表 -->
      <div>
        <ul class="homeList">
          <li v-for="item in listData" :key="item.id">
            <img :src="item.img" alt />
            <h3>{{item.name}}</h3>
            <p>{{item.info}}</p>
            <p>
              <span>{{item.price}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
//export { getBanner, getlist };
import { getBanner, getList } from "../api";

export default {
  name: "home",
  created() {
    // ajax 异步 越早发送越好 一般放 created
    this.getban();
    this.getSlider();
    //  async created() {
    //   // ajax 异步 越早发送越好 一般放 created
    //   await getBanner().then(data => {
    //     console.log(data);
    //   });
  },
  data() {
    return {
      slider: [],
      listData: []
    };
  },
  components: {
    Banner
  },
  methods: {
    // 轮播图请求
    async getban() {
      //promise异常处理
      try {
        let { banner } = await getBanner();
        this.slider = banner;
        console.log(this.slider);
      } catch (err) {
        console.log(err);
      }
    },
    // 列表数据
    async getSlider() {
      try {
        let { list } = await getList();
        this.listData = list;
        console.log(this.listData);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style coped>
ul {
  list-style: none;
  width: 80%;
  /* height: 100%; */
  height: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: center; */
  align-content: space-around;
  text-align: center;
}
li {
  /* height: 300px; */
  width: 100%;
  margin: 6px 0;
  border: 1px solid #ccc;
}
li img {
  width: 80%;
  border-radius: 5px;
}
</style>
