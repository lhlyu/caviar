import { defineComponent } from 'vue'

export const welcome = defineComponent({
    name: 'welcome',
    setup() {
        return () => <div>welcome to use caviar!</div>
    }
})
