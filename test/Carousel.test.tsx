import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Carousel } from '../src/Carousel'
import { CarouselItem } from '../src/CarouselItem'

describe('Carousel', () => {
  it('renders correctly', () => {
    const defaultWrapper = renderer
      .create(
        <Carousel displayCount={1}>
          <div>test</div>
        </Carousel>
      )
      .toJSON()
    expect(defaultWrapper).toMatchSnapshot()

    const carouselWrapper = renderer.create(
      <Carousel displayCount={1}>
        <CarouselItem />
      </Carousel>
    ).toJSON()
    expect(carouselWrapper).toMatchSnapshot()
  })
})
