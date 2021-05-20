<template>
  <div class="c-layout">
    <div class="c-layout_header">
      <c-layout-header></c-layout-header>
    </div>
    <div class="c-layout_content">
        <c-layout-content></c-layout-content>
    </div>
    <div class="c-layout_footer">
      <c-layout-footer></c-layout-footer>
    </div>
  </div>
</template>
<script>
import cLayoutFooter from "./footer/index";
import cLayoutHeader from "./header/index";
import cLayoutContent from './content/index'
export default {
  name: "layout",
  components: {
    cLayoutFooter,
    cLayoutHeader,
    cLayoutContent
  },
};
</script>
