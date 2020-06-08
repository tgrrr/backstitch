import React from 'react'
import renderer from 'react-test-renderer'
import { TextareaAutosize } from '.'

function printTheWebPage() {
    window.print();
}

it('TextareaAutosize: default', () => {
    printTheWebPage();
    const component = renderer.create(
        <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Minimum 3 rows"
        />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
