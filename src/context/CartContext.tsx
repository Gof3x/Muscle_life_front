// CartContext removed: provide a harmless, no-op placeholder API so the app
// doesn't crash if something still imports the context while we clean up.
import React, { ReactNode } from 'react'

export const CartProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

export const useCart = () => {
  // Return a minimal no-op API matching prior shape to keep consumers safe.
  return {
    isOpen: false,
    items: [],
    addToCart: (_product: any, _qty = 1, _flavor?: string) => {},
    removeFromCart: (_id: string, _flavor?: string) => {},
    updateQty: (_id: string, _qty: number, _flavor?: string) => {},
    toggle: () => {},
    open: () => {},
    close: () => {},
    clear: () => {},
    totalItems: 0,
    subtotal: 0
  }
}

export type CartItem = any
