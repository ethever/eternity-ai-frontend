import Link from 'next/link'
import Container from './Container'
import SectionTitle from './SectionTitle'
import { Grid, styled } from '@nextui-org/react'
import Image from 'next/image'
import { partnerId } from '../../src/constants'

const logos = () => {
  const t = []
  for (let i = 1; i < 15; i++) {
    t.push(`images/logos/${i}.png`)
  }
  return t
}

export default function Partner() {
  return (
    <Container
      xl
      css={{
        paddingBottom: '100px',
      }}
    >
      <SectionTitle sectionId={partnerId} title="Cooperative Partner" />
      <Grid.Container justify="center">
        {logos().map((logo) => (
          <Grid key={logo}>
            <img src={logo} alt="logo image" />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  )
}
