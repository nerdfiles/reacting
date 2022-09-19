/**
 * @name gulpfile
 * @description
 * possibly useful for looking at maintainability and estimation from
 * different dev experience style perspectives. e.g., a dev who codes
 * like *this* by *these* rules might be able to complete N tasks
 * given some timeframe, assuming chunking in proportion to cyclomatic
 * complexity, etc.
 */
const gulp = require('gulp')
const plato = require('es6-plato')

const SRC = './src/**/**/**/*.js'
const DIR = './artifacts/plato'

const LINT = {
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
    es6: true,
    asi: true
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

const RULES = {}

const CONFIG = {
  title: 'reacting',
  eslint: LINT,
  complexity: RULES
}

gulp.task('analysis', async function () {
  return plato.inspect(SRC, DIR, CONFIG)
})

// EOF
