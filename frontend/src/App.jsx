import { useState } from 'react'

function App() {
  const [logs, setLogs] = useState([
    "SupplyChainSentinel iniciado",
    "Esperando trigger de Pairpoint Vodafone..."
  ])

  const triggerSimulation = () => {
    setLogs([
      "SupplyChainSentinel iniciado",
      "Trigger recibido de Pairpoint Vodafone (geoloc + temp)"
    ])

    setTimeout(() => setLogs(prev => [...prev, "RiskPredictor → 88% probabilidad de disrupción (Google Vertex AI)"]), 800)
    setTimeout(() => setLogs(prev => [...prev, "Negotiator → x402 Payment Required enviado (Coinbase)"]), 1600)
    setTimeout(() => setLogs(prev => [...prev, "Oferta aceptada → Creando escrow AP2 (30% / 50% / 20%)"]), 2400)
    setTimeout(() => setLogs(prev => [...prev, "BITE encryption activado (pre-mempool - SKALE)"]), 3200)
    setTimeout(() => setLogs(prev => [...prev, "Edge & Node oráculo confirma pickup"]), 4000)
    setTimeout(() => setLogs(prev => [...prev, "Milestone liberado + ERC-8004 reputación actualizada"]), 4800)
    setTimeout(() => setLogs(prev => [...prev, "Flujo completado → Ahorro estimado: 29%"]), 5500)
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#00ff9d' }}>SupplyChainSentinel</h1>
      <p>Agente B2B autónomo para cadenas de suministro</p>
      
      <button 
        onClick={triggerSimulation}
        style={{ 
          padding: '14px 28px', 
          fontSize: '18px', 
          background: '#00ff9d', 
          color: '#000', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer', 
          margin: '20px 0',
          fontWeight: 'bold'
        }}
      >
        Trigger Simulation (Flujo Completo End-to-End)
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
          <div key={i} style={{ margin: '8px 0', lineHeight: '1.5' }}>
            {log}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
