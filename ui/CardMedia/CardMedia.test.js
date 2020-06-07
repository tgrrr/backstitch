import React from 'react'
import renderer from 'react-test-renderer'
import { CardMedia } from '.'

it('CardMedia: default', () => {
    const component = renderer.create(
        <CardMedia>
            <>
                CardMedia
            </>
        </CardMedia>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
