import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonGroup } from '.'

it('ButtonGroup: default', () => {
    const component = renderer.create(
        <ButtonGroup>
            <>
                ButtonGroup
            </>
        </ButtonGroup>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
