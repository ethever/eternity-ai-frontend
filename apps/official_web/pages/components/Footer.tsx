import { Button, Text } from '@nextui-org/react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Container from './Container'

export default function Footer() {
  return (
    <Container
      css={{
        padding: '20px 0',
        background: 'black',
        color: 'white',
      }}
      fluid
    >
      <Container lg>
        <Container>
          <Text>Contact Us</Text>
          <Container css={{ display: 'flex' }}>
            <Button auto light>
              <TwitterIcon />
            </Button>
            <Button auto light>
              <FacebookIcon />
            </Button>
            <Button auto light>
              <InstagramIcon />
            </Button>
            <Button auto light>
              <LinkedInIcon />
            </Button>
            <Button auto light>
              <YouTubeIcon />
            </Button>
          </Container>
        </Container>
        <Container>
          <Text>Eternity.AI</Text>
        </Container>
      </Container>
    </Container>
  )
}
