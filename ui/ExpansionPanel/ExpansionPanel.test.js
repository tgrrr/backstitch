import React from 'react'
import renderer from 'react-test-renderer'
import { ExpansionPanel } from '.'
import { ExpansionPanelSummary } from '../index';

it('ExpansionPanel: default', () => {
    const component = renderer.create(
        <ExpansionPanel>
            <ExpansionPanelSummary />
            <>
                ExpansionPanel
            </>
        </ExpansionPanel>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

// TODO: https://material-ui.com/components/expansion-panels/#expansion-panel
// it('should render the summary and collapse elements', () => {
//     const wrapper = mount(
//         <ExpansionPanel>
//             <ExpansionPanelSummary>Summary</ExpansionPanelSummary>
//             <div id="panel-content">Hello</div>
//         </ExpansionPanel>,
//     );
