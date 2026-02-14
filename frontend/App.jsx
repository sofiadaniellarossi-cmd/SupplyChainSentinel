import { useState } from 'react'

function App() {
  const [logs, setLogs] = useState([
    "SupplyChainSentinel iniciado",
    "Esperando trigger de Pairpoint Vodafone..."
  ])

  const [isRunning, setIsRunning] = useState(false)

  const triggerSimulation = () => {
    setIsRunning(true)
    setLogs([
      "SupplyChainSentinel iniciado",
      "Trigger recibido de Pairpoint Vodafone (geoloc + temp)"
    ])

    const steps = [
      "RiskPredictor → 88% probabilidad de disrupción (Google Vertex AI)",
      "Negotiator → x402 Payment Required enviado (Coinbase)",
      "Oferta aceptada → Creando escrow AP2 (30% / 50% / 20%)",
      "BITE encryption activado (pre-mempool - SKALE)",
      "Edge & Node oráculo confirma pickup",
      "Milestone liberado + ERC-8004 reputación actualizada",
      "Flujo completado → Ahorro estimado: 29%"
    ]

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, step])
      }, (index + 1) * 700)
    })

    setTimeout(() => setIsRunning(false), 5500)
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#00ff9d' }}>SupplyChainSentinel</h1>
      <p>Agente B2B autónomo para cadenas de suministro</p>

      <button 
        onClick={triggerSimulation}
        disabled={isRunning}
        style={{ 
          padding: '14px 32px', 
          fontSize: '18px', 
          background: isRunning ? '#555' : '#00ff9d', 
          color: '#000', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: isRunning ? 'not-allowed' : 'pointer', 
          margin: '20px 0',
          fontWeight: 'bold'
        }}
      >
        {isRunning ? "Ejecutando flujo..." : "Trigger Simulation (Flujo Completo)"}
      </button>

      <div style={{ 
        background: '#111', 
        padding: '20px', 
        borderRadius: '8px', 
        height: '420px', 
        overflowY: 'auto',
        fontFamily: 'monospace'
      }}>
        <h3>Logs en tiempo real:</h3>
        {logs.map((log, i) => (
          <div key={i} style={{ margin: '10px 0', padding: '8px', background: '#1a1a1a', borderRadius: '4px' }}>
            {log}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
