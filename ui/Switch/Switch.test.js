import React from 'react'
import renderer from 'react-test-renderer'
import { Switch } from '.'

it('Switch: default', () => {
    const component = renderer.create(
        <Switch>
            <>
                Switch
            </>
        </Switch>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
