<template>
  <el-container>
    <el-aside>
      <slot name="aside"></slot>
    </el-aside>
    <el-container>
      <el-header>
        <slot name="header"></slot>
      </el-header>
      <el-main>
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "container",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.el-aside {
  width: 370px !important;
  height: 100vh;
}
</style>
