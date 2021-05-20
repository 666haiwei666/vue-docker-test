import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 处理当前mudules
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules1 = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const otherModulesFiles = require.context('@/views/', true, /\.js$/)
const modules2 = otherModulesFiles.keys().reduce((modules, modulePath) => {
  if (/^\.\/\w+[\/\w+]{1,}\/modules\/\w+.js$/.test(modulePath)) {
    const moduleName = modulePath.split('/')[modulePath.split('/').length - 1].split('.')[0]
    const value = otherModulesFiles(modulePath)
    modules[moduleName] = value.default
  }
  return modules
}, {})

const modules = {
  ...modules1,
  ...modules2
}

export default new Vuex.Store({ // eslint-disable-line
  modules
})