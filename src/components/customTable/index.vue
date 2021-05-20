<template>
  <el-table
    :data="tableData"
    :height="height"
    :border="border"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column v-if="columns && columns.length && columns[0].type" :type="columns && columns[0].type" width="55" />
    <template
      v-for="(item,index) in columnsArr"
    >
      <template v-if="item.filters">
        <el-table-column
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :align="item.align || `center`"
          :width="item.width"
          :filter-multiple="item.filterMultiple"
          :filters="item.filters"
          :filter-method="filterHandler"
        />
      </template>
      <template v-else>
        <el-table-column
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :align="item.align || `center`"
          :width="item.width"
        >
          <template slot-scope="scope">
            <div v-if="item.prop == 'image' && scope.row.image!==''">
              <img
                :src="scope.row.image"
                :style="{width: '100%', height: '100%', maxWidth: '100px', display: scope.row ? '': 'none'}"
              >
            </div>
            <div v-else-if="item.label !== '操作'">
              <template v-if="item.isSlot">
                <slot :name="item.prop" :content="scope.row[item.prop]" :row="scope.row" :index="scope.$index" />
              </template>
              <template v-else>{{ scope.row[item.prop] }}</template>
            </div>
            <div v-else>
              <slot :row="scope.row" />
            </div>
          </template>
        </el-table-column>
      </template>
    </template>

  </el-table>
</template>
<script>
export default {
  name: 'TcTable',
  props: {
    tableData: {
      type: Array,
      required: false
    },
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    height: {
      type: String
    },
    // 边框
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    columnsArr() {
      return (this.columns && this.columns.length && this.columns[0].type)
        ? this.columns.slice(1, this.columns.length)
        : this.columns
    }
  },
  methods: {
    filterHandler(value, row, column) {
      this.$emit('filterHandler', value, row, column)
    },
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange', val)
    }
  }
}
</script>
