import React from 'react'
import renderer from 'react-test-renderer'
import { Divider } from '.'

it('Divider: default', () => {
    const component = renderer.create(
        <Divider>
            <>
                Divider
            </>
        </Divider>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
