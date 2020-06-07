import React from 'react'
import renderer from 'react-test-renderer'
import { ExpansionPanel } from '.'

it('ExpansionPanel: default', () => {
    const component = renderer.create(
        <ExpansionPanel>
            <>
                ExpansionPanel
            </>
        </ExpansionPanel>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
