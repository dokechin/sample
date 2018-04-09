import { mount , createLocalVue} from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('HelloWorld.vue', () => {
  it('adds', async () => {
    // build component
    const wrapper = mount(HelloWorld, {localVue})
    expect(wrapper.vm.valid1).toBe(false)
    const input = wrapper.find('input#name1')
    input.trigger('focus')
    await wrapper.vm.$nextTick()
    input.element.value = 'TARO'
    input.trigger('input')
    await wrapper.vm.$nextTick()
    input.trigger('blur')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.valid2).toBe(true)
  })
  it('adds in dialog', async () => {
    // build component
    const wrapper = mount(HelloWorld, {localVue})
    expect(wrapper.vm.dialog).toBe(false)
    wrapper.find('button#new').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.dialog).toBe(true)
    expect(wrapper.vm.valid2).toBe(false)
    const input = wrapper.find('input#name2')
    input.trigger('focus')
    await wrapper.vm.$nextTick()
    input.element.value = 'HANAKO'
    input.trigger('input')
    await wrapper.vm.$nextTick()
    input.trigger('blur')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.valid2).toBe(true)
  })
})
