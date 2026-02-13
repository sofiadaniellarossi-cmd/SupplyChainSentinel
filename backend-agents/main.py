from fastapi import FastAPI

app = FastAPI(title="SupplyChainSentinel - Backend Agents")

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "Backend corriendo - listo para agentes y sponsors",
        "integrations": ["Pairpoint Vodafone", "Coinbase x402", "SKALE + BITE"]
    }

@app.get("/flow")
def test_flow():
    return {"flow": "Trigger → Predictor → Negotiator → Settlement (MVP listo)"}
