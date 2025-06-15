// web/src/services/payments/StripeProvider.js
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_…your key…')

export function createDepositIntent(amount, currency) {
  // call your backend which returns a clientSecret
  return fetch('/api/create-deposit-intent', {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({ amount, currency })
  }).then(r => r.json())
}
