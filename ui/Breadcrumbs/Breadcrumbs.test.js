import React from 'react'
import renderer from 'react-test-renderer'
import { Breadcrumbs } from '.'

it('Breadcrumbs: default', () => {
    const component = renderer.create(
        <Breadcrumbs>
            <span>
                1
            </span>
            <span>
                2
            </span>
            <span>
                3
            </span>
        </Breadcrumbs>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
