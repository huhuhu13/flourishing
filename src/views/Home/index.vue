<template>
  <div class="home">
    <container>
      <div slot="aside">
        <sidebar></sidebar>
      </div>
      <div slot="header">
        <language></language>
      </div>
      <div slot="main"></div>
    </container>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar";
import language from "@/components/language.vue";
export default {
  components: {
    sidebar,
    language
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: url("../../assets/home-bg.png") no-repeat;
  background-size: 100% 100%;
}
</style>