import { Chrono } from 'react-chrono'
import Container from './Container'
import SectionTitle from './SectionTitle'
import { roadmapId } from '../../src/constants'

const items = [
  {
    title: 'January 2022',
    cardTitle: 'Event 1',
    cardSubtitle: 'Event 1 Subtitle',
    cardDetailedText: 'This is the first event on the timeline.',
  },
  {
    title: 'February 2022',
    cardTitle: 'Event 2',
    cardSubtitle: 'Event 2 Subtitle',
    cardDetailedText: 'This is the second event on the timeline.',
  },
  {
    title: 'March 2022',
    cardTitle: 'Event 3',
    cardSubtitle: 'Event 3 Subtitle',
    cardDetailedText: 'This is the third event on the timeline.',
  },
]

const HorizontalTimeline = () => {
  return (
    <Chrono
      items={items}
      mode="HORIZONTAL"
      itemWidth={150}
      flipLayout
      // showSingle
    />
  )
}

export default function RoadMap() {
  return (
    <Container
      css={{
        height: '100vh',
        background: "rgb(14,13,14) url('/images/roadmap-bg.png') ",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center calc(100% + 200px)',
      }}
    >
      <SectionTitle
        sectionId={roadmapId}
        color="white"
        title="Development Roadmap"
      />
    </Container>
  )
  return <HorizontalTimeline />
  return (
    <div
      style={{
        backgroundImage: "url('/images/roadmap.png')",
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
      }}
    >
      <div className=" relative left-[643px] top-[98px]  w-[634px] h-[102px] gap-[8px] flex  items-center   text-center text-white">
        <div>
          <p className="absolute left-[0px] top-[0px]  h-[66px] w-[700px] font-Harmony text-6xl font-black not-italic ">
            Development Roadmap
          </p>
        </div>
      </div>
      <div className="  relative  w-[592px] h-[221px] left-[160px] top-[523px]  gap-[16px] flex flex-col items-start  text-white">
        <p className="absolute left-[0px] -top-[140px] h-[30px] w-[150px] font-Harmony text-3xl font-black not-italic ">
          Stage 1
        </p>
        <p className="absolute left-[0px] -top-[90px] h-[59px] w-[700px] font-Harmony text-xl font-normal not-italic break-workds ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus pronin sapien nunc accuan eget.
        </p>
      </div>
      <div className="  relative  w-[592px] h-[221px] left-[1068px] top-[290px]  gap-[16px] flex flex-col items-start  text-white">
        <p className="absolute left-[0px] -top-[140px] h-[30px] w-[150px] font-Harmony text-3xl font-black not-italic ">
          Stage 2
        </p>
        <p className="absolute left-[0px] -top-[90px] h-[59px] w-[700px] font-Harmony text-xl font-normal not-italic break-workds ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus pronin sapien nunc accuan eget.
        </p>
      </div>
    </div>
  )
}
