import { Text } from '@nextui-org/react'
import Container from './Container'
import FigureCard from './FigureCard'
import SectionTitle from './SectionTitle'
import { communityId } from '../../src/constants'

const s = [
  {
    avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
    by: '@axe.ar',
  },
  {
    avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
    by: '@axe.ar',
  },
  {
    avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
    by: '@axe.ar',
  },
  {
    avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
    by: '@axe.ar',
  },
  {
    avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
    by: '@axe.ar',
  },
]
export default function Community() {
  return (
    <Container
      css={{
        padding: '0 0 100px 0',
        backgroundImage: "url('/images/community-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#e4e4e4',
      }}
    >
      <SectionTitle sectionId={communityId} title="Community Impact" />
      <Container
        display="flex"
        wrap="nowrap"
        direction="row"
        css={{
          gap: '40px',
          flexShrink: 0,
          overflowX: 'scroll',
          '-webkit-overflow-scrolling': 'touch',
          // '&::-webkit-scrollbar': {
          //   display: 'none',
          // },
        }}
      >
        {s.map((u) => (
          <FigureCard
            key={u.text}
            avatarUrl={u.avatarUrl}
            text={u.text}
            by={u.by}
          />
        ))}
      </Container>
    </Container>
  )
}
