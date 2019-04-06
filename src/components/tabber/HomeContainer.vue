<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
      
    </mt-swipe>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          //console.log(result);
          if (result.body.status == 0) {
            this.list = result.body.message;
          } else {
            Toast("轮播图加载失败");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>