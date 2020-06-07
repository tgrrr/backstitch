import React from 'react'
import renderer from 'react-test-renderer'
import { CardActionArea } from '.'

it('CardActionArea: default', () => {
    const component = renderer.create(
        <CardActionArea>
            <>
                CardActionArea
            </>
        </CardActionArea>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
