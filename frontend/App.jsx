import { useState } from 'react'

function App() {
  const = useState([
    "🚀 SupplyChainSentinel iniciado",
    "📡 Conectado a Pairpoint Vodafone IoT (mock)"
  ])

  const trigger = () => {
    setLogs(prev => )
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>SupplyChainSentinel</h1>
      <button onClick={trigger}>Trigger Simulation</button>
      <div style={{ background: '#000', color: '#0f0', padding: 10, marginTop: 10 }}>
        {logs.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  )
}

export default App
