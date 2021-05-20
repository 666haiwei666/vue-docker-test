import breadCrumbs from 'components/Breadcrumb/index'
import customMenu from 'components/Menu/index'
import svgIcon from 'components/SvgIcon/index'
import customTable from 'components/customTable/index'
export function installCustomComponet(Vue) {
    Vue.component('breadCrumbs', breadCrumbs)
    Vue.component('customMenu', customMenu)
    Vue.component('svgIcon', svgIcon)
    Vue.component('customTable', customTable)
}