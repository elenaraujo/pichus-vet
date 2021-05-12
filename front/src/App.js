 import React from 'react'

import HomeView from './components/views/HomeView'
import Footer from './components/Footer'
import Header from './components/Header'

import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import './App.css'

function App() {
  return (    
    <ThemeProvider theme={theme}>
      <Header />
      <HomeView />
      <Footer />
    </ThemeProvider>
  )
}

export default App