/**
 * @description
 * possibly useful for looking at maintainability and estimation from
 * different dev experience style perspectives. e.g., a dev who codes
 * like *this* by *these* rules might be able to complete N tasks
 * given some timeframe, assuming chunking in proportion to cyclomatic
 * complexity, etc.
 */
const gulp = require('gulp')
const plato = require('es6-plato')

const src = './src/**/**/**/*.js'
const outputDir = './artifacts/plato'

const lintRules = {
  rules: {
    indent: [2, 'tab'],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'no-console': [1],
    curly: ['error'],
    'no-dupe-keys': 2,
    'func-names': [1, 'always']
  },
  env: {
    es6: true
  },
  globals: ['require'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  }
}

const complexityRules = {}

const platoArgs = {
  title: 'reacting',
  eslint: lintRules,
  complexity: complexityRules
}

gulp.task('analysis', async function () {
  return plato.inspect(src, outputDir, platoArgs)
})

// EOF
