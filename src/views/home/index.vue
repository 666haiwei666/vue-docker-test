<template>
  <div>
    <h1>1111hahhahah</h1>
    <el-button @click="_onPersonalCenterRouter">跳转</el-button>
    <!-- <ul class="animateIcon" v-animateIcon:maxScale="0.6">
      <li class="item-1">
        <el-image
          src="https://company-help-frontend.oss-cn-hangzhou.aliyuncs.com/1.0.0/YLY.png"
        ></el-image>
      </li>
      <li class="item-2">
        <el-image
          src="https://company-help-frontend.oss-cn-hangzhou.aliyuncs.com/1.0.0/YLY.png"
        ></el-image>
      </li>
      <li class="item-3">
        <el-image
          src="https://company-help-frontend.oss-cn-hangzhou.aliyuncs.com/1.0.0/YLY.png"
        ></el-image>
      </li>
      <li class="item-4">
        <el-image
          src="https://company-help-frontend.oss-cn-hangzhou.aliyuncs.com/1.0.0/YLY.png"
        ></el-image>
      </li>
    </ul> -->
    <div class="five-animation"></div>
    <div class="ball"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('hahahah')
    this._onDraw()
  },
  methods: {
    _onDraw() {
      const line = d3 // eslint-disable-line
        .line()
        .x(function (d) {
          console.log(d)
          return d.x;
        })
        .y(function (d) {
          return d.y;
        });
      let svg = d3 // eslint-disable-line
        .select(".five-animation")
        .append("svg")
        .attr("width", 500)
        .attr("height", 600);
      svg
        .append("path")
        .attr('class','line')
        .attr(
          "d",
          line([
            {
              x: 100,
              y: 100,
            },
            {
              x: 500,
              y: 100,
            },
          ])
        )
        .transition()
        .duration(2000)
        .styleTween("stroke-dashoffset", function() {
            return d3.interpolateNumber(400, 0); // eslint-disable-line
        });
    },
    _onPersonalCenterRouter() {
      this.$router.push("/personalCenter");
    },
  },
};
</script>
<style lang="scss">
.ball{
  width: 100px;
  height: 100px;
}
.line {
  stroke-width: 3;
  stroke: steelblue;
  fill: none;
  stroke-dasharray:400,400;
  stroke-dashoffset:0;
}
.animateIcon {
  position: relative;
}
li {
  position: absolute;
  transition: transform 0.01s cubic-bezier(0.32, 0.94, 0.6, 1) 0.02s;
}
@for $i from 1 through 4 {
  .item-#{$i} {
    bottom: -100px * $i;
  }
}
</style>
