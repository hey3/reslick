import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { CarouselItem } from '../src/CarouselItem'

describe('CarouselItem', () => {
  it('renders correctly', () => {
    const defaultWrapper = renderer
      .create(
        <CarouselItem />
      )
      .toJSON()
    expect(defaultWrapper).toMatchSnapshot()

    const withContentWrapper = renderer.create(
      <CarouselItem>
        <article>
          <h1>test title</h1>
          <p>test</p>
        </article>
      </CarouselItem>
    )
    expect(withContentWrapper).toMatchSnapshot()
  })
})
