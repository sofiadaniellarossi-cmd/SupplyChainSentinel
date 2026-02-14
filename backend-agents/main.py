from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SupplyChainSentinel")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "message": "Backend funcionando correctamente",
        "integrations": ["Pairpoint Vodafone", "Coinbase x402", "Google AP2", "SKALE BITE"]
    }

@app.get("/flow")
def test_flow():
    return {"message": "Flujo completo listo para simulación"}
