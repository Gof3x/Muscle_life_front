import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// Cart removed: don't import CartItem from CartContext

const CheckoutSuccess: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // estado enviado via navigate({ state: order })
  const order = (location.state as any) || null

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
        <div className="max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Pedido não encontrado</h2>
          <p className="mb-4">Parece que não há um pedido ativo. Volte às compras para adicionar itens ao carrinho.</p>
          <button onClick={() => navigate('/products')} className="btn-primary py-2 px-4 rounded">Ir para Produtos</button>
        </div>
      </div>
    )
  }

  const items: any[] = order.items || []

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded border border-gray-800">
        <h1 className="text-3xl font-bold mb-2">Compra realizada com sucesso!</h1>
        <p className="text-gray-300 mb-4">Pedido <span className="font-mono">{order.id}</span> — {new Date(order.createdAt).toLocaleString()}</p>

        <div className="space-y-4">
          {items.map((it) => (
            <div key={`${it.product.id}-${it.flavor ?? 'no'}`} className="flex items-center gap-4">
              <img src={it.product.images[0]} alt={it.product.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{it.product.name}</div>
                <div className="text-sm text-gray-400">{it.flavor ?? ''}</div>
              </div>
              <div className="font-bold">R$ {(it.product.price * it.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-lg font-bold">Total</div>
          <div className="text-xl font-bold">R$ {order.subtotal.toFixed(2)}</div>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={() => navigate('/products')} className="btn-primary py-2 px-4 rounded">Continuar Comprando</button>
          <button onClick={() => navigate('/')} className="py-2 px-4 rounded border border-gray-600">Ir para Início</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccess
