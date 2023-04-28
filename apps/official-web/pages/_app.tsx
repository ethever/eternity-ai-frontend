import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import PropTypes from 'prop-types'
import { chain, createClient, WagmiProvider } from 'wagmi'
import createEmotionCache from '../src/createEmotionCache'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { muiUITheme, nextUITheme } from '../src/theme'
import { NextUIProvider } from '@nextui-org/react'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [apiProvider.alchemy(process.env.ALCHEMY_ID), apiProvider.fallback()]
)

const { connectors } = getDefaultWallets({
  appName: 'Rainbowkit Starter App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={muiUITheme}>
        <CssBaseline />
        <NextUIProvider theme={nextUITheme}>
          <WagmiProvider client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiProvider>
        </NextUIProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
