import React from 'react'
import renderer from 'react-test-renderer'
import { FormControlLabel } from '.'
// import { Checkbox } from '../index';
import { Checkbox } from '@material-ui/core';

it('FormControlLabel: default', () => {
    const component = renderer.create(
        <FormControlLabel label='foo' control={
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        // <Checkbox />
    } />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
