<template>
  <div>
    <div
      @click="isCollapse = !isCollapse"
      class="flex-x-y-center"
      style="height: 56px; background: #324157"
    >
      <i
        :class="{
          'el-icon-s-unfold': isCollapse,
          'el-icon-s-fold': !isCollapse,
        }"
      ></i>
    </div>

    <el-aside width="collapse">
      <div :style="{ height: winHeight }" class="over-y-auto">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2" route="/system/dragg">
            <i class="el-icon-menu"></i>
            <span slot="title">拖拽awe-dnd</span>
          </el-menu-item>
          <el-menu-item index="3" route='/system/layout'>
            <i class="el-icon-document"></i>
            <span slot="title">vue-grid-layout</span>
          </el-menu-item>
          <el-menu-item index="4" route='/system/editor'>
            <i class="el-icon-setting"></i>
            <span slot="title">富文本</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      winHeight: null,
    };
  },
  created() {
    this.winHeight = document.body.clientHeight - 156 + "px";
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-aside {
  display: block;
  position: relative;
  background-color: #324157 !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  border: none;
}
.el-menu {
  border: none;
  background: none;
}
</style>