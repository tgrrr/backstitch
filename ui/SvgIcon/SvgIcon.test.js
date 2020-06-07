import React from 'react'
import renderer from 'react-test-renderer'
import { SvgIcon } from '.'

it('SvgIcon: default', () => {
    const component = renderer.create(
        <SvgIcon>
            <>
                SvgIcon
            </>
        </SvgIcon>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
