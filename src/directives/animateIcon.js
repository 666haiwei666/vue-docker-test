// 模拟macOS桌面icon动画 
import { eventListener } from 'utils/eventListener'
export default {
    bind: function (currentDom, binding, vnode) {
        let maxScale = binding.value
        initAnimate(currentDom, maxScale)
    },
    unbind(currentDom, binding, vnode) {
        currentDom.children.forEach(children => {
            eventListener.listen(children, 'mousemove', () => { }).remove()
        })
    }
}
function initAnimate(currentDom, maxScale) {
    currentDom.children.forEach(children => {
        eventListener.listen(children, 'mousemove', (e) => {
            let itemRect = children.getBoundingClientRect()
            let offset = Math.abs((e.clientX - itemRect.left) / itemRect.width)

            let pre = children.previousElementSibling || null
            let next = children.nextElementSibling || null

            resetScale(currentDom)
            
            children.style.transform = `scale(${maxScale + 1})`
            if (pre) {
                pre.style.transform = `scale(${Math.abs(maxScale * (1 - offset) + 1)})`
            }
            if (next) {
                next.style.transform = `scale(${Math.abs(maxScale * offset + 1)})`
            }
        })
        eventListener.listen(children, 'mouseleave', (e) => {
            resetScale(currentDom)
        })
    })
}
function resetScale(currentDom) {
    currentDom.children.forEach(el => {
        el.setAttribute('style', 'transform: scale(1)')
    })
}