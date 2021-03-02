import { Component, Plugin } from 'vue'

// cards
import CardA from './components/cards/card-a/index.vue'

export { CardA }

export const caviar: Plugin = {
    install(app) {
        const useComponent = (component: Component) => {
            if (component.name) {
                app.component(component.name, component)
            } else {
                throw 'component need name'
            }
        }

        useComponent(CardA)
    }
}
