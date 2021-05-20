export const eventListener = {
    /**
     * @param {DOMEventTarget} targetDomElement Dom元素
     * @param {string} eventName 事件名称
     * @callback callback  回调函数 
     * @return {object} 
     */
    listen(targetDomElement, eventName, callback, options) {
      // IE 8 以上版本支持
      if (targetDomElement.addEventListener) {
        targetDomElement.addEventListener(eventName, callback, options);
        return {
          remove() {
            targetDomElement.removeEventListener(eventName, callback, options);
          }
        };
      } else if (targetDomElement.attachEvent) {
        targetDomElement.attachEvent('on' + eventName, callback);
        return {
          remove() {
            targetDomElement.detachEvent('on' + eventName, callback);
          }
        };
      }
    }
  };
