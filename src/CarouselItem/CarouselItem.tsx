import React from 'react'
import styled from 'styled-components'

type ContainerProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  className?: string
  /** href for component */
  href?: string
}
type PresenterProps = Record<string, unknown>
type Props = ContainerProps & PresenterProps

const DomComponent: React.FC<Props> = ({ className, href, alt, children, ...props }) => {
  return (
    <li className={`${className} carousel-item-root`}>
      <a className="carousel-link-area" href={href} aria-label={props['aria-label']}>
        <figure className="carousel-image-are">
          <picture className="carousel-picture">
            <img className="carousel-image" loading="lazy" alt={alt} {...props} />
          </picture>
        </figure>
      </a>
      <div className="carousel-content">{children}</div>
    </li>
  )
}

const StyledComponent = styled(DomComponent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: calc(2.5rem / 2);
  scroll-snap-align: start;

  a {
    align-self: center;

    & > figure {
      position: relative;
      justify-content: center;
      width: inherit;
      height: inherit;
      inline-size: inherit;
      block-size: inherit;
      margin: 0;
      cursor: pointer;
      user-select: none;

      & > picture {
        display: inline-block;
        width: inherit;
        height: inherit;
        inline-size: inherit;
        block-size: inherit;
        border-radius: 1ex;
        box-shadow: 0 1px 2px 0 hsl(0 0% 0% / 20%);
        overflow: hidden;

        & > img {
          display: block;
          width: 100%;
          height: 100%;
          inline-size: 100%;
          block-size: 100%;
          background-image: linear-gradient(to bottom, hsl(210 10% 40%), hsl(210 10% 20%));
          background-color: #525252;
          object-fit: cover;
        }
      }
    }
  }
`

export const CarouselItem: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledComponent {...props}>{children}</StyledComponent>
}
