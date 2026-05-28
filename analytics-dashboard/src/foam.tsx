import * as foam from '@foam-ai/node-opentelemetry';
import { FOAM_API_KEY, IS_PRODUCTION } from './config';

foam.init({
  serviceName: 'analytics-dashboard',
  isProduction: IS_PRODUCTION,
  apiKey: FOAM_API_KEY,
  tracesPercentage: IS_PRODUCTION ? 0.1 : 1.0,
});