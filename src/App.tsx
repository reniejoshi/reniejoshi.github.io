import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SiteNav from './components/SiteNav'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
