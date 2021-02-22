<template>
  <div style="height: 100%">
    <el-container>
      <el-header height="100px">
        <Header />
      </el-header>
      <el-container>
        <Aside />
        <el-main>
          <div :style="{height: winHeight}">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/aside";
import Header from '@/components/Header';
export default {
  components: {
    Aside, Header
  },
  data() {
    return {
      winHeight: null,
    };
  },
  created() {
    this.winHeight = document.body.clientHeight - 100 + 'px'
  },
};
</script>

<style scoped lang=scss>
.el-container {
  height: 100%;
}
.el-header {
  background-color: rgb(84, 92, 100);
  color: #fff;
}

.el-main {
  margin: 0;
  padding: 0;
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>