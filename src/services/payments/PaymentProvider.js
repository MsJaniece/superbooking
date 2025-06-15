// src/services/payments/PaymentProvider.ts

/**
 * A minimal interface for any payment processor.
 */
export interface PaymentProvider {
  /**
   * Create a deposit intent for a given amount.
   * Returns data you can use to confirm payment on the frontend.
   */
  createDepositIntent(amount: number, currency: string): Promise<{ clientSecret: string }>

  /**
   * Capture a previously created payment intent.
   */
  capturePayment(intentId: string): Promise<void>

  /**
   * Refund a completed payment.
   */
  refund(paymentId: string): Promise<void>
}
