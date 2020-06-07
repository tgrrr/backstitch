import React from 'react'
import renderer from 'react-test-renderer'
import { Card } from '.'

it('Card: default', () => {
    const component = renderer.create(
        <Card>
            <>
                Card
            </>
        </Card>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
