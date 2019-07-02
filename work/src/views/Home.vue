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
import { getHomeAll } from "../api";

export default {
  name: "home",
  created() {
    this.getHome();
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
    //两个请求结合
    async getHome() {
      let [{ banner }, { list }] = await getHomeAll();
      // console.log(banner);
      console.log(await getHomeAll());
      this.slider = banner;
      this.listData = list;
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
