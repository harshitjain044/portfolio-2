import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - stays at top */}
      <Header />

      {/* Main - grows to take all leftover space */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer - stays at bottom */}
      <Footer />
    </div>
  )
}

export default Layout
