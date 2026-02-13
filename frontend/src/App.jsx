import { useState, useEffect } from 'react'

function App() {
  const [logs, setLogs] = useState([
    "🚀 SupplyChainSentinel iniciado",
    "📡 Conectado a Pairpoint Vodafone IoT (mock)",
    "🧠 RiskPredictor listo (88% precisión simulada)"
  ])

  const triggerSimulation = () => {
    setLogs(prev => [...prev, "⚡ Simulación disparada - Riesgo detectado en cadena de suministro"])
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>SupplyChainSentinel Dashboard</h1>
      <p>Agente B2B autónomo para cadenas de suministro</p>
      <button onClick={triggerSimulation} style={{ padding: '10px 20px', margin: '10px 0' }}>
        Trigger Simulation (MVP)
      </button>
      <div style={{ background: '#000', color: '#0f0', padding: '15px', height: '300px', overflowY: 'auto' }}>
        <h3>Logs en tiempo real:</h3>
        {logs.map((log, i) => <div key={i}>{log}</div>)}
      </div>
    </div>
  )
}

export default App
