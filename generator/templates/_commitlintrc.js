module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#']
    }
  },
  rules: {
    'header-max-length': [0, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'feat',      // feature 新功能，新需求
        'fix',       // 修复 bug
        'docs',      // 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        'style',     // 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
        'refactor',  // 代码重构，没有加新功能或者修复bug
        'test',      // 测试用例，包括单元测试、集成测试等
        'revert',    // 回滚到上一个版本
        'perf',      // 性能优化
        'chore',     // 改变构建流程、或者增加依赖库、工具等，包括打包和发布版本
      ]
    ]
  }
}
