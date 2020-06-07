import React from 'react'
import renderer from 'react-test-renderer'
import { NoSsr } from '.'

it('NoSsr: default', () => {
    const component = renderer.create(
        <NoSsr>
            <>
                NoSsr
            </>
        </NoSsr>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
