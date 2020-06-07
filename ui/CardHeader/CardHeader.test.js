import React from 'react'
import renderer from 'react-test-renderer'
import { CardHeader } from '.'

it('CardHeader: default', () => {
    const component = renderer.create(
        <CardHeader>
            <>
                CardHeader
            </>
        </CardHeader>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
