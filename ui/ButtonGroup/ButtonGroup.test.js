import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonGroup } from '.'
import { Button } from '../Button'

it('ButtonGroup: default', () => {
    const component = renderer.create(
        <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
