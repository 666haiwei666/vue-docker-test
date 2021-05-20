<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      :collapse="collapse"
      :background-color="backgroundColor"
      :active-text-color="activeTextColor"
      :text-color="textColor"
      :mode="mode"
      @select="menuSelect"
      @open="open"
      @close="close"
    >
      <template v-for="(item, index) in menuList">
        <template v-if="item.children">
          <el-submenu :index="index.toString()" :key="index">
            <template slot="title">
             <svg-icon :icon-class="item.meta.icon"></svg-icon>
              {{ item.meta.title }}
            </template>
            <el-menu-item v-for="(k, j) in item.children" :key="j.toString()">{{
              k.meta.title
            }}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="index.toString()" :key="index">
            <svg-icon :icon-class="item.meta.icon"></svg-icon>
            {{ item.meta.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    activeTextColor: {
      type: String,
      default: "#333",
    },
    textColor: {
      type: String,
      default: "#333",
    },
    backgroundColor: {
      type: String,
      default: "#f5f5f5",
    },
    collapse: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "vertical",
    },
    activeIndex: {
      type: String,
      default: "",
    },
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    menuSelect(key, keyPath) {
      this.$emit("custom-menu-selectChange");
    },
    open(key, keyPath) {
      this.$emit("custom-menu-open");
    },
    close(key, keyPath) {
      this.$emit("custom-menu-close");
    },
  },
};
</script>
