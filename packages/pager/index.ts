import { App } from 'vue'
import VxePagerComponent from './src/pager'
import { dynamicApp } from '../dynamics'

export const Pager = Object.assign(VxePagerComponent, {
  install: function (app: App) {
    app.component(VxePagerComponent.name, VxePagerComponent)
  }
})

dynamicApp.component(VxePagerComponent.name, VxePagerComponent)

export default Pager
