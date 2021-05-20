<template>
  <!-- 我的关注 -->
  <div class="c-user-attenion">
    我的关注
    <el-button @click="_onPersonalCenterRouter">跳转</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    _onPersonalCenterRouter() {
       this.$router.push("/personalCenter/userAttention/children");
    },
  },
};
</script>
<style lang="scss" scoped></style>
