import BreadcrumbLink from './breadcrumb-link'
import { mount } from '@vue/test-utils'

describe('breadcrumb-link', () => {
  it('has default classes and structure', async () => {
    const wrapper = mount(BreadcrumbLink)
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.attributes('aria-current')).not.toBeDefined()
    expect(wrapper.attributes('href')).not.toBeDefined()
    expect(wrapper.text()).toBe('')
  })

  it('has content from default slot', async () => {
    const wrapper = mount(BreadcrumbLink, {
      slots: {
        default: 'foobar'
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.attributes('aria-current')).not.toBeDefined()
    expect(wrapper.attributes('href')).not.toBeDefined()
    expect(wrapper.text()).toBe('foobar')
  })

  it('has content from text prop', async () => {
    const wrapper = mount(BreadcrumbLink, {
      propsData: {
        text: 'foobar'
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.attributes('aria-current')).not.toBeDefined()
    expect(wrapper.attributes('href')).not.toBeDefined()
    expect(wrapper.text()).toBe('foobar')
  })

  it('has content from html prop', async () => {
    const wrapper = mount(BreadcrumbLink, {
      propsData: {
        html: 'foobar'
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.attributes('aria-current')).not.toBeDefined()
    expect(wrapper.attributes('href')).not.toBeDefined()
    expect(wrapper.text()).toBe('foobar')
  })

  it('has attribute aria-current when active', async () => {
    const wrapper = mount(BreadcrumbLink, {
      slots: {
        active: true
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.attributes('aria-current')).toBe('location')
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.attributes('href')).not.toBeDefined()
  })

  it('has attribute aria-current with custom value when active', async () => {
    const wrapper = mount(BreadcrumbLink, {
      slots: {
        active: true,
        ariaCurrent: 'foobar'
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.attributes('aria-current')).toBe('foobar')
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.attributes('href')).not.toBeDefined()
  })

  it('renders link when href is set', async () => {
    const wrapper = mount(BreadcrumbLink, {
      slots: {
        href: '/foo/bar'
      }
    })
    expect(wrapper.is('a')).toBe(true)
    expect(wrapper.attributes('href')).toBeDefined()
    expect(wrapper.attributes('href')).toBe('/foo/bar')
    expect(wrapper.attributes('aria-current')).not.toBeDefined()
    expect(wrapper.classes().length).toBe(0)
  })
})
