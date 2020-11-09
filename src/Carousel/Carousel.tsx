import React from 'react'
import { CarouselItem } from '../CarouselItem'
import styled, { css, keyframes } from 'styled-components'

type ContainerProps = {
  className?: string
  /** Whether to slide automatically  */
  autoSlide?: boolean
  /** Number of slides to display at one time */
  displayCount: number
  /** Image size in slide (horizontal) */
  imageWidth?: string
  /** Image size in slide (vertical) */
  imageHeight?: string
  children: React.ReactElement<typeof CarouselItem> | Array<React.ReactElement<typeof CarouselItem>>
}

type PresenterProps = {
  slideCount: number
  displayCount: number
  imageWidth: string
  imageHeight: string
}

type Props = ContainerProps & PresenterProps

const DomComponent: React.FC<Props> = ({ className, children }) => {
  return (
    <section className={`${className} carousel-root`}>
      <ul className="horizontal-media-scroller" tabIndex={0}>
        {children}
      </ul>
    </section>
  )
}

const StyledComponent = styled(DomComponent)`
  ul {
    margin: 0;
    padding-inline-start: 0;
  }

  .horizontal-media-scroller {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: ${props => `calc(100% / ${props.displayCount} - calc(2.5rem / 2))`};
    gap: calc(2.5rem / 2);
    width: ${props => (props.autoSlide ? `calc(100% / ${props.displayCount})` : 'auto')};
    min-width: 100%;
    padding-inline: 2.5rem;
    padding-block: calc(2.5rem / 2);
    overflow-x: ${props => (props.autoSlide ? 'unset' : 'auto')};
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    outline-offset: -5px;
    animation: ${props =>
      props.autoSlide
        ? css`
            ${autoScroll(props.slideCount, props.displayCount)} ${(props.slideCount -
              props.displayCount) *
            3}s infinite
          `
        : 'unset'};

    &::-webkit-scrollbar {
      display: none;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      animation-play-state: paused;
    }

    & > li > a {
      width: ${props => props.imageWidth};
      height: ${props => props.imageHeight};
      inline-size: ${props => props.imageWidth};
      block-size: ${props => props.imageHeight};
    }
  }
`

const autoScroll = (slideCount: number, displayCount: number) =>
  keyframes`
    ${[...Array(slideCount - displayCount + 1)].map((_, i) => {
      return css`
        ${(100 / (slideCount - displayCount + 1)) * i}% {
          transform: translateX(calc(calc(-100% / ${displayCount} * ${i})));
        }
      `
    })}
  `

export const Carousel: React.FC<ContainerProps> = ({
  children,
  imageWidth = 'auto',
  imageHeight = 'auto',
  ...props
}) => {
  const slideCount = React.Children.count(children)
  const presenterProps: PresenterProps = {
    slideCount,
    displayCount: slideCount - props.displayCount < 0 ? slideCount : props.displayCount,
    imageWidth,
    imageHeight,
  }
  return (
    <StyledComponent {...props} {...presenterProps}>
      {children}
    </StyledComponent>
  )
}
