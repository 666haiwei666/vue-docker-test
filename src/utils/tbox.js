/**
 *  清除本地缓存
 */
const clearLocal = () => {
  const keys = []
  Object.keys(window.localStorage || {}).forEach(key => {
    if (!keys.includes(key)) {
      window.localStorage.removeItem(key)
    }
  })
}

/**
 * @function 判断是否是一个数组
 * @returns {Boolean}
*/
const isArray = (array) => {
  return Object.prototype.toString.call(array) === '[object Array]'
}

/**
 * @function 深度克隆
 * @description 深拷贝
*/
const deepClone = (source) => {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = source[keys].constructor === Array ? [] : {}
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
/** 
* @description  判断浏览器
*/

const browser = () => {
  let userAgent = window.navigator.userAgent.toLowerCase()
  let isIE = {
    IELower11: userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1,
    Edge: userAgent.indexOf("edg") > -1,
    IE11: userAgent.indexOf('trident') > -1 && userAgent.indexOf("rv:11.0") > -1
  }
  let browserInfo = {
    ie: Object.values(isIE).some(el => el),
    opera: userAgent.indexOf('presto/') > -1,
    chrome: userAgent.indexOf('applewebkit/') > -1,
    firefox: userAgent.indexOf("firefox") > -1,
    safari: userAgent.match(/version\/([\d.]+).*safari/) ? true : false,
    version: 0
  };
  if (browserInfo.ie) {
    if (isIE.IELower11) {
      browserInfo.version = window.document.documentMode
    }
    if (isIE.Edge) {
      browserInfo.version = 'edge'
    }
    if (isIE.IE11) {
      browserInfo.version = 11
    }
  }

  return browserInfo;
};

/**
 * 判断pc端还是移动端
 */
const isMobile = () => {
  let sUserAgent = navigator.userAgent.toLowerCase()
  let bIsIpad = sUserAgent.match(/ipad/i) == "ipad"
  let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os"
  let bIsMidp = sUserAgent.match(/midp/i) == "midp"
  let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"
  let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb"
  let bIsAndroid = sUserAgent.match(/android/i) == "android"
  let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce"
  let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile"

  if (bIsIpad || bIsIphoneOs || bIsAndroid || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM) {
    return true
  } else {
    return false
  }
}
export {
  browser,
  isMobile,
  isArray,
  deepClone,
  clearLocal
}