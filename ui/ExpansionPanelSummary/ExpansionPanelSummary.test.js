import React from 'react'
import renderer from 'react-test-renderer'
import { ExpansionPanelSummary } from '.'

it('ExpansionPanelSummary: default', () => {
    const component = renderer.create(
        <ExpansionPanelSummary>
            <>
                ExpansionPanelSummary
            </>
        </ExpansionPanelSummary>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
