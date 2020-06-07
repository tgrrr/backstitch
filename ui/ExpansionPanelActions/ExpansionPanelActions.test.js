import React from 'react'
import renderer from 'react-test-renderer'
import { ExpansionPanelActions } from '.'

it('ExpansionPanelActions: default', () => {
    const component = renderer.create(
        <ExpansionPanelActions>
            <>
                ExpansionPanelActions
            </>
        </ExpansionPanelActions>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
