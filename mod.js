import { crocks } from './deps.js'
const { Identity } = crocks

const result = Identity.of('hello')
  .map(s => s.toUpperCase())
  .map(s => `${s}!`)
  .valueOf()

console.log(result)
