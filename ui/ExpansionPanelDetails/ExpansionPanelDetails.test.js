import React from 'react'
import renderer from 'react-test-renderer'
import { ExpansionPanelDetails } from '.'

it('ExpansionPanelDetails: default', () => {
    const component = renderer.create(
        <ExpansionPanelDetails>
            <>
                ExpansionPanelDetails
            </>
        </ExpansionPanelDetails>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
