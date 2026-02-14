# SupplyChainSentinel

**Agente B2B autónomo para cadenas de suministro con predicción de disrupciones, negociación multi-agente y pagos programables.**

![Banner](https://via.placeholder.com/1200x400/0A2540/FFFFFF?text=SupplyChainSentinel)  
*(reemplaza con tu banner real cuando lo tengas)*

### El problema
En cadenas de suministro de componentes electrónicos, las disrupciones generan **25-35% de desperdicio** por exceso o falta de inventario. Los pagos máquina-a-máquina actuales son lentos, centralizados y exponen datos sensibles (precios, bids, niveles de stock).

### La solución
SupplyChainSentinel cierra el ciclo completo de **agentic commerce B2B**:

- Detecta riesgos con datos IoT de **Pairpoint Vodafone**
- Predice disrupciones con ML (**88% accuracy en simulación**)
- Negocia automáticamente con proveedores usando **x402 (Coinbase)**
- Ejecuta pagos programables + escrow por milestones con **AP2 (Google)**
- Aplica privacidad threshold con **BITE en SKALE**
- Registra reputación y estado con **ERC-8004**

**Impacto esperado**: reducción promedio de **~29%** en desperdicio y latencia **end-to-end < 5 segundos**.

### Demo en vivo (pruébalo tú mismo)
**[Abrir Demo en Codespaces →](https://miniature-funicular-r455vrwj97q52pv9p-5173.app.github.dev)**

**Cómo probarlo en 30 segundos:**
1. Abre el link de arriba
2. Presiona el botón **Trigger Simulation**
3. Observa el flujo completo end-to-end en logs en tiempo real

### Flujo completo (lo que verás en la demo)

```mermaid
flowchart TD
    A[1. Pairpoint Vodafone IoT Trigger] --> B[2. RiskPredictor ML]
    B --> C[3. Negotiator + x402 Payment Required]
    C --> D[4. SettlementExecutor + AP2 Escrow]
    D --> E[5. BITE Privacy Encryption]
    E --> F[6. Edge & Node Oráculo]
    F --> G[7. ERC-8004 Reputation Update]
