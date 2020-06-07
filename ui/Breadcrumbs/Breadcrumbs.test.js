import React from 'react'
import renderer from 'react-test-renderer'
import { Breadcrumbs } from '.'

it('Breadcrumbs: default', () => {
    const component = renderer.create(
        <Breadcrumbs>
            <>
                Breadcrumbs
            </>
        </Breadcrumbs>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
