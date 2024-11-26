declare namespace Payjp {
  interface Elements {
    create(type: string, options?: Record<string, unknown>): {
      mount: (selector: string) => void
    }
  }

  interface PayjpInstance {
    elements(): Elements
    createToken(cardElement: any): Promise<{ id: string; error?: { message: string } }>
  }
}

declare const Payjp: {
  (publicKey: string): Payjp.PayjpInstance
}