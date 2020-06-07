import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonBase } from '.'

it('ButtonBase: default', () => {
    const component = renderer.create(
        <ButtonBase>
            <>
                ButtonBase
            </>
        </ButtonBase>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
