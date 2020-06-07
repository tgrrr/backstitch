import React from 'react'
import renderer from 'react-test-renderer'
import { NativeSelect } from '.'

it('NativeSelect: default', () => {
    const component = renderer.create(
        <NativeSelect>
            <>
                NativeSelect
            </>
        </NativeSelect>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
