import * as directives from 'directives/index'
export function installDirectives(Vue) {
    for (let [
        k,
        fn
    ] of Object.entries(
        directives
    )) {
        if (fn.install) {
            fn.install(Vue)
        } else {
            Vue.directive(k, fn)
        }
    }

}