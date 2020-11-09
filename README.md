## Reslick

![CI](https://github.com/hey3/reslick/workflows/CI/badge.svg)

This is the simple carousel using React + Typescript + styled-component.

## Screenshots

<img src="https://user-images.githubusercontent.com/38312611/98507708-7ac8ef80-22a1-11eb-8dcb-c07554183880.gif" alt="auto slide carousel"/>

<img src="https://user-images.githubusercontent.com/38312611/98507825-b6fc5000-22a1-11eb-8170-fa7f953ee00b.gif" alt="with content carousel"/>

## Docs and Demo

[demo](https://hey3.github.io/reslick/?path=/docs/reslick--default-story)

## Installation

```bash
# Install package
$ yarn add reslick

# Install peerDependencies
$ yarn add --dev react react-dom styled-components
```

## Usage

```tsx
import React from 'react'
import { Carousel, CarouselItem } from 'reslick'

const YourComponent: React.FC = props => {
  //...
  return (
    <Carousel displayCount={4}>
      <CarouselItem src="..." alt="..." />
    </Carousel>
  )
}
```

## License

[MIT License](https://github.com/hey3/reslick/blob/main/LICENSE)

## Author

Kohei Oyama (a.k.a hey3)
