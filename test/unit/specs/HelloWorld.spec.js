import { mount , createLocalVue} from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('HelloWorld.vue', () => {
  it('adds a new shop', async () => {
    // build component
    const wrapper = mount(HelloWorld, {localVue})
    expect(wrapper.vm.formValid).toBe(false)
    const input = wrapper.find('input#name')
    input.trigger('focus')
    await wrapper.vm.$nextTick()
    input.element.value = 'TARO'
    input.trigger('input')
    await wrapper.vm.$nextTick()
    input.trigger('blur')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.formValid).toBe(true)
  })

})
