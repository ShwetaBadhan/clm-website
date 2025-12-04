// plugins/purecounter.client.js
import PureCounter from '@srexi/purecounterjs'

export default (context, inject) => {
  // Initialize PureCounter on mounted (we'll call it in components)
  inject('purecounter', () => {
    return new PureCounter()
  })
}