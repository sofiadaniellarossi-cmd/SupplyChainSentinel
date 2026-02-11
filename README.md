# SupplyChainSentinel

**Agente B2B autónomo para cadenas de suministro con predicción de disrupciones, negociación multi-agente y pagos programables.**

![Banner](https://via.placeholder.com/1200x400/0A2540/FFFFFF?text=SupplyChainSentinel)  
<!-- Reemplaza con un banner real cuando lo tengas -->

### El problema
En cadenas de suministro de componentes electrónicos y logística, las disrupciones generan **25-35% de desperdicio** por exceso o falta de inventario. Los pagos máquina-a-máquina actuales son lentos, centralizados y exponen datos sensibles (precios, bids, niveles de stock).

### La solución
**SupplyChainSentinel** cierra el ciclo completo de **agentic commerce** en supply chain:
- Detecta riesgos con datos IoT **reales** de Pairpoint Vodafone
- Predice disrupciones con ML (**88% accuracy**)
- Negocia automáticamente con múltiples proveedores
- Ejecuta pagos programables + escrow inteligente con **x402 + AP2 + BITE privacy** en SKALE
- Verificación externa y registro de reputación **ERC-8004**

**Impacto esperado**: reducción promedio de **~28-30%** en desperdicio y latencia **end-to-end < 5 segundos**.

### Cómo funciona (flujo paso a paso)

```mermaid
flowchart TD
    A[1. Pairpoint Vodafone IoT] --> B[Trigger Agente Comprador]
    B --> C[2. RiskPredictor - Vertex AI]
    C --> D[3. Negotiator - x402 HTTP 402]
    D --> E[4. SettlementExecutor - AP2 Escrow + BITE]
    E --> F[5. Edge & Node Oráculo]
    F --> G[6. ERC-8004 Reputation Update]
