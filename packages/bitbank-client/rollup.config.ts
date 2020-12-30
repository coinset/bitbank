import { main, module } from './package.json'
import alias from '@rollup/plugin-alias'
import { join } from 'path'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
const config = {
  input: 'src/index.ts',

  output: [
    {
      file: main,
      format: 'cjs'
    },
    { file: module, format: 'es' }
  ],
  external: ['ky', 'url-join', 'node-fetch'],

  plugins: [
    alias({
      entries: [{ find: /^@\//, replacement: join(__dirname, 'src/') }]
    }),
    commonjs(),
    typescript({
      typescript: require('ttypescript'),
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [
            {
              transform: 'typescript-transform-paths',
              afterDeclarations: true
            }
          ]
        }
      }
    }),
    copy({
      targets: [{ src: 'src/types', dest: 'dist' }]
    })
  ]
}

export default config
