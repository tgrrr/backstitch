import React from 'react'
import renderer from 'react-test-renderer'
import { Collapse } from '.'

it('Collapse: default', () => {
    const component = renderer.create(
        <Collapse>
            <>
                Collapse
            </>
        </Collapse>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
