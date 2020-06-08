import React from 'react'
import renderer from 'react-test-renderer'
import { TextareaAutosize } from '.'

it('TextareaAutosize: default', () => {
    const component = renderer.create(
        <TextareaAutosize
            placeholder='Minimum 3 rows'
            rowsMin={3} 
        />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
