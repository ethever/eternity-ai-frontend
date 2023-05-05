import { ReactNode } from 'react'
import {
  ContainerProps,
  Display,
  Container as NextUIContainer,
  Wrap,
} from '@nextui-org/react'

function Container(containerProps: ContainerProps) {
  const { children, ...otherProps } = containerProps
  return (
    <NextUIContainer {...otherProps}>{containerProps.children}</NextUIContainer>
  )
}

const defaultProps = {
  gap: 2,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  responsive: false,
  fluid: true,
  wrap: 'wrap' as Wrap,
  as: 'div' as keyof JSX.IntrinsicElements,
  display: 'block' as Display,
}

Container.defaultProps = defaultProps

export default Container
