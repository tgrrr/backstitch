import React from 'react'
import renderer from 'react-test-renderer'
import { Container } from '.'

it('Container: default', () => {
    const component = renderer.create(
        <Container>
            <>
                Container
            </>
        </Container>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
