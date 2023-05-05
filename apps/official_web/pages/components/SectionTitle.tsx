import { Text } from '@nextui-org/react'

export default function SectionTitle({
  title,
  color,
  sectionId,
}: {
  title: string
  color?: string
  sectionId: string
}) {
  return (
    <Text
      h1
      id={sectionId}
      css={{
        color: color ?? 'black',
        display: 'grid',
        placeContent: 'center',
        placeSelf: 'center',
        padding: '100px 0',
      }}
    >
      {title}
    </Text>
  )
}
