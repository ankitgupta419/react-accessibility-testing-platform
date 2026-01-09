import { useState } from 'react'
import AccessibilityShowcase from './components/AccessibilityShowcase';
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Accessibility Testing Platform</h1>
        <p>Comprehensive testing platform for React accessibility patterns</p>
      </header>
      
      <main id="showcase">
        <AccessibilityShowcase />
      </main>
    </div>
  )
}

export default App
