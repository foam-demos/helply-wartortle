import foam
from src.config import FOAM_API_KEY, IS_PRODUCTION

foam.init(
    service_name="knowledge-bridge",
    is_production=IS_PRODUCTION,
    api_key=FOAM_API_KEY,
    traces_sample_rate=1.0,
)