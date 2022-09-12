/**
 * @filepath ./test/sass.test.js
 * @description test.
 */
import { path } from 'path'
import { sassTrue } from 'sass-true'
import { describe, it } from 'jasmine'

const sassFile = path.join(__dirname, 'test.scss')
sassTrue.runSass({ file: sassFile }, { describe, it })

// EOF
