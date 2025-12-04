// plugins/purecounter.client.js
import { defineNuxtPlugin } from '#app'
import PureCounter from '@srexi/purecounterjs'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Initialize PureCounter
    new PureCounter({
      duration: 1000,
      once: true, // only animate once when in view
    })
  }
})