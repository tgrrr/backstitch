import React from 'react'
import renderer from 'react-test-renderer'
import { CardActions } from '.'

it('CardActions: default', () => {
    const component = renderer.create(
        <CardActions>
            <>
                CardActions
            </>
        </CardActions>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
