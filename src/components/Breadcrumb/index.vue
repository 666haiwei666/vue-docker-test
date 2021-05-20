<template>
  <div class="c-breadCrumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in routerList" :key="index">
        <span @click="_onRouter(item.path)">{{
          item.meta.title
        }}</span></el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "breadCrumbs",
  data() {
    return {
      routerList: [],
    };
  },
  created() {
    this.getRouterInfo(this.$route, {});
  },
  watch: {
    $route(to, from) {
      this.getRouterInfo(to, from);
    },
  },
  methods: {
    getRouterInfo(toRouterInfo, fromRouterInfo) {
      let _this = this;
      let routes = this.$router.options.routes;
      let modulesPath = toRouterInfo.matched[0].path;
      let modulesIndex = routes.findIndex((el) => el.path === modulesPath);
      let toRouterIndex = this.routerList.findIndex((el) => el.path == toRouterInfo.path);

      if (modulesIndex == -1) {
        this.routerList = [];
      }
      if (toRouterIndex !== -1) {
        this.routerList = this.routerList.slice(0, toRouterIndex);
      }
      if (!toRouterInfo.children) {
        this.routerList[0] = toRouterInfo.matched[0];
      }
      findChildrenRouter(routes, modulesIndex);
      function findChildrenRouter(allRouters, modulesIndex) {
        if (modulesIndex < 0) return;
        if (!allRouters[modulesIndex].children) return;
        for (let i = 0; i < allRouters[modulesIndex].children.length; i++) {
          if (allRouters[modulesIndex].children[i].path == toRouterInfo.path) {
            _this.routerList.push(toRouterInfo);
            return;
          } else {
            findChildrenRouter(allRouters[modulesIndex].children, i);
          }
        }
      }
    },
    _onRouter(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style></style>
