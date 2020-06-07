import React from 'react'
import renderer from 'react-test-renderer'
import { ClickAwayListener } from '.'

it('ClickAwayListener: default', () => {
    const component = renderer.create(
        <ClickAwayListener>
            <>
                ClickAwayListener
            </>
        </ClickAwayListener>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
