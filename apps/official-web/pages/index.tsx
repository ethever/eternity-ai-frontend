import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from './components/Banner'
import Advantage from './components/Advantage'
import RoadMap from './components/RoadMap'
import Partner from './components/Partner'
import Community from './components/Community'
import ResponsiveAppBar from './components/TopBar'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eternity.AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <Banner />
      <Advantage />
      <RoadMap />
      <Partner />
      <Community />
      <Footer />
    </>
  )
}

export default Home
