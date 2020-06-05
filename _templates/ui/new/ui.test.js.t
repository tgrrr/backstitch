---
to: src/common/ui/<%= name %>/<%= name %>.test.js
---
import React from 'react'
import renderer from 'react-test-renderer'
import { <%= name %> } from '.'

it('<%= name %>: default', () => {
  const component = renderer.create(<<%= name %> name={<%= name %>}><%= name %></<%= name %>>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
