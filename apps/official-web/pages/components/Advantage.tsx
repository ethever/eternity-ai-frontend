import { Container, Text } from '@nextui-org/react'
import SectionTitle from './SectionTitle'
import { advantagesId } from '../../src/constants'

function Card({
  imageUrl,
  text,
  title,
}: {
  imageUrl: string
  title: string
  text: string
}) {
  return (
    <Container
      display="inline-flex"
      wrap="nowrap"
      css={{
        gap: '2px',
        width: 'min-content',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: '100px',
      }}
    >
      <img src={imageUrl} alt="card image" />
      <Text
        h3
        css={{
          whiteSpace: 'nowrap',
          color: 'black',
        }}
      >
        {title}
      </Text>
      <Text
        css={{
          color: 'black',

          textAlign: 'center',
        }}
      >
        {text}
      </Text>
    </Container>
  )
}

const advantages = [
  {
    url: '/images/advantages/1.png',
    title: 'All in One 存储',
    text: '适配图片、视频、文档、社交媒体账户、NFT等存储',
  },
  {
    url: '/images/advantages/2.png',
    title: '永存不丢失',
    text: '基于 Arweave 区块链技术的存储方案，确保用户的数字资产最少存储 200 年，实现数据永存',
  },
  {
    url: '/images/advantages/3.png',
    title: '个性AI虚拟人',
    text: '使用AI构建智、形、音一体的模型，实现个性化智能虚拟人',
  },
  {
    url: '/images/advantages/4.png',
    title: '灵活可继承',
    text: '支持用户设置数字资产的继承规则，让用户可以传承自己的数字资产给后代',
  },
]
export default function Advantage() {
  return (
    <Container lg>
      <SectionTitle sectionId={advantagesId} title="Our Advantages" />
      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          gap: '180px',
          flexWrap: 'wrap',
        }}
      >
        {advantages.map((a) => (
          <Card key={a.url} imageUrl={a.url} title={a.title} text={a.text} />
        ))}
      </Container>
    </Container>
  )
}
