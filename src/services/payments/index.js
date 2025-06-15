// web/src/services/payments/index.ts

import { StripeProvider } from './StripeProvider'

/**
 * Default payment provider for your app.
 * Swap out for SquareProvider, CloverProvider, etc.
 */
export const paymentProvider = new StripeProvider()
