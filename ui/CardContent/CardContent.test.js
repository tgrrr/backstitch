import React from 'react'
import renderer from 'react-test-renderer'
import { CardContent } from '.'

it('CardContent: default', () => {
    const component = renderer.create(
        <CardContent>
            <>
                CardContent
            </>
        </CardContent>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
