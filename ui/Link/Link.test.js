import React from 'react'
import renderer from 'react-test-renderer'
import { Link } from '.'

it('Link: default', () => {
    const component = renderer.create(
        <Link>
            <>
                Link
            </>
        </Link>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
