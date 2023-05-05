import { Text } from '@nextui-org/react'
import Avatar from '@mui/material/Avatar'
import Container from './Container'

export default function FigureCard({
  avatarUrl,
  text,
  by,
}: {
  avatarUrl: string
  text: string
  by: string
}) {
  return (
    <Container
      css={{
        background: 'white',
        minWidth: '656px',
        padding: '48px 48px 48px 48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'black',
        borderRadius: '20px',
        gap: '10px',
      }}
    >
      <Avatar
        sx={{
          width: '150px',
          height: '150px',
        }}
        src={avatarUrl}
        alt="avatar image"
      />
      <Text css={{ color: 'black' }}>{text}</Text>
      <Text h3 css={{ color: 'black' }} b>
        {by}
      </Text>
    </Container>
  )
}
