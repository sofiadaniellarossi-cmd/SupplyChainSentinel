# SupplyChainSentinel

**Agente B2B autónomo para cadenas de suministro con predicción de disrupciones, negociación multi-agente y pagos programables.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python)](https://www.python.org)
[![SKALE](https://img.shields.io/badge/SKALE-BITE-00FF9D)](https://skale.network)
[![x402](https://img.shields.io/badge/x402-Coinbase-0052FF)](https://x402.org)

### El problema
En cadenas de suministro de componentes electrónicos y logística, las interrupciones generan entre el 25% y el 35% de desperdicio debido a exceso o falta de inventario. Los pagos máquina-a-máquina actuales son lentos, centralizados y exponen datos sensibles como precios, ofertas y niveles de stock.

### La solución
SupplyChainSentinel implementa un ciclo completo de agentic commerce B2B:

- Detección de riesgos mediante datos IoT de Pairpoint Vodafone
- Predicción de disrupciones mediante modelos de machine learning (88% de precisión en simulación)
- Negociación automática con proveedores a través de x402 de Coinbase
- Ejecución de pagos programables y escrow por milestones mediante AP2 de Google
- Privacidad threshold encryption con BITE en SKALE
- Registro de reputación y orquestación de agentes mediante ERC-8004

**Impacto proyectado**: reducción promedio del 29% en desperdicio y latencia end-to-end inferior a 5 segundos.

### Demo en vivo
**[Abrir Demo →](https://miniature-funicular-r455vrwj97q52pv9p-5173.app.github.dev)**

**Instrucciones para probar:**
1. Acceder al enlace anterior
2. Hacer clic en el botón **Trigger Simulation**
3. Observar la ejecución completa del flujo en los logs en tiempo real

### Flujo del sistema

```mermaid
flowchart TD
    A[1. Trigger IoT - Pairpoint Vodafone] --> B[2. RiskPredictor - Vertex AI]
    B --> C[3. Negotiator - x402 Payment Required]
    C --> D[4. SettlementExecutor - AP2 Escrow]
    D --> E[5. BITE Encryption - SKALE]
    E --> F[6. Oráculo - Edge & Node]
    F --> G[7. Actualización de reputación - ERC-8004]
