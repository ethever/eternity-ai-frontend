import { Card, Row, Text, Button } from '@nextui-org/react'
import Container from './Container'
import { firstSectionId } from '../../src/constants'

export default function Banner() {
  return (
    <Container
      id={firstSectionId}
      css={{
        backgroundImage: "url('/images/background.png')",
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container
        lg
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '100%',
          gap: '10px',
        }}
      >
        <Text h1>Building Immortal Silicon-based Life</Text>
        <Text>
          Innovation Frontier，Dream of Eternal Life, Exploring the Future Road
          of Silicon Based Life
        </Text>
        <Button auto color="primary" rounded>
          Get Your SBT
        </Button>
      </Container>
    </Container>
  )
}
