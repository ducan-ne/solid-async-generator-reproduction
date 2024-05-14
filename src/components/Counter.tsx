import { createEffect, createSignal, JSXElement } from 'solid-js'
import './Counter.css'
import {logHello} from '../actions'

export default function Counter() {
  const [count, setCount] = createSignal<JSXElement>(0)
  createEffect(() => {
    console.log(count())
  })
  return (
    <button
      class="increment"
      onClick={async () => {
        // setCount(await logHello('x'))
        const $ = await logHello('Hello')
        console.log($)
        for await (const value of $) {
          console.log(value)
        }
      }}
    >
      Clicks: {count()}
    </button>
  )
}
