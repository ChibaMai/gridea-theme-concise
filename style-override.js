const generateOverride = (params = {}) => {
  let result = ''
  /**
   * Write your custom css in here, doc: https://gridea.dev
   */

  // 侧边栏宽度 - sidebarWidth
  if (params.sidebarWidth && params.sidebarWidth !== '320px') {
    result += `
      .sidebar {
        width: ${params.sidebarWidth};
      }
      .main-container {
        margin-left: ${params.sidebarWidth};
      }
    `
  }

  // 封面图圆角 - featureBorderRadius
  if (params.featureBorderRadius && params.featureBorderRadius !== '3px') {
    result += `
      .post-item .right .feature-container {
        border-radius: ${params.featureBorderRadius};
      }
    `
  }

  if (params.customCss) {
    result += `
      ${params.customCss}
    `
  }

  console.log('result', result)

  return result
}

module.exports = generateOverride
