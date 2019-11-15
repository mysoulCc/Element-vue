<template>
  <div>
    {{msg}}
    <el-button :plain="true" @click="open">打开消息提示</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "这是home界面"
    };
  },
  methods: {
    open() {
      this.$message(this.$t("customize.NavMenu.Home"));
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
