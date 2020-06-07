import React from 'react'
import renderer from 'react-test-renderer'
import { TextareaAutosize } from '.'

it('TextareaAutosize: default', () => {
    const component = renderer.create(
        <TextareaAutosize>
            <>
                TextareaAutosize
            </>
        </TextareaAutosize>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
