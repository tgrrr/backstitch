import React from 'react'
import renderer from 'react-test-renderer'
import { FormControlLabel } from '.'
import { Checkbox } from '../index';

it('FormControlLabel: default', () => {
    const component = renderer.create(
        <FormControlLabel label='foo' control={<Checkbox />} />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
