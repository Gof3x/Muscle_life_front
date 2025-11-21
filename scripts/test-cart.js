// Script de teste rápido para o reducer do carrinho
// Executar com: node scripts/test-cart.js

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, qty, flavor } = action.payload
      const key = (i) => `${i.product.id}::${i.flavor ?? ''}`
      const existingIndex = state.items.findIndex(i => key(i) === `${product.id}::${flavor ?? ''}`)
      if (existingIndex >= 0) {
        const items = [...state.items]
        items[existingIndex] = { ...items[existingIndex], quantity: items[existingIndex].quantity + qty }
        return { ...state, items }
      }
      return { ...state, items: [...state.items, { product, quantity: qty, flavor }] }
    }
    case 'REMOVE': {
      const { id, flavor } = action.payload
      if (flavor === undefined) {
        return { ...state, items: state.items.filter(i => i.product.id !== id) }
      }
      return { ...state, items: state.items.filter(i => !(i.product.id === id && i.flavor === flavor)) }
    }
    case 'UPDATE_QTY': {
      const { id, qty, flavor } = action.payload
      const items = state.items
        .map(i => {
          if (i.product.id === id && i.flavor === flavor) return { ...i, quantity: qty }
          return i
        })
        .filter(i => i.quantity > 0)
      return { ...state, items }
    }
    default:
      return state
  }
}

const initialState = { items: [], isOpen: false }

const p1 = { id: 'whey-01', name: 'Whey Gold', price: 199.9 }
const p2 = { id: 'pre-01', name: 'Pre-Treino', price: 129.0 }

let state = initialState
console.log('Estado inicial:', JSON.stringify(state, null, 2))

// Adicionar p1 sem flavor
state = reducer(state, { type: 'ADD', payload: { product: p1, qty: 1 } })
console.log('\nApós ADD p1 (sem flavor):', JSON.stringify(state.items, null, 2))

// Adicionar p1 com flavor Chocolate
state = reducer(state, { type: 'ADD', payload: { product: p1, qty: 2, flavor: 'Chocolate' } })
console.log('\nApós ADD p1 (Chocolate):', JSON.stringify(state.items, null, 2))

// Adicionar p2 com flavor Citrus
state = reducer(state, { type: 'ADD', payload: { product: p2, qty: 1, flavor: 'Citrus' } })
console.log('\nApós ADD p2 (Citrus):', JSON.stringify(state.items, null, 2))

// Remover p1 com flavor Chocolate (should remove only that entry)
state = reducer(state, { type: 'REMOVE', payload: { id: 'whey-01', flavor: 'Chocolate' } })
console.log('\nApós REMOVE p1 Chocolate:', JSON.stringify(state.items, null, 2))

// Remover p1 without flavor (should remove all p1 entries)
state = reducer(state, { type: 'REMOVE', payload: { id: 'whey-01' } })
console.log('\nApós REMOVE p1 sem flavor:', JSON.stringify(state.items, null, 2))

// Update qty on p2 (Citrus) to 3
state = reducer(state, { type: 'UPDATE_QTY', payload: { id: 'pre-01', qty: 3, flavor: 'Citrus' } })
console.log('\nApós UPDATE_QTY p2 Citrus -> 3:', JSON.stringify(state.items, null, 2))

// Update qty to 0 should remove
state = reducer(state, { type: 'UPDATE_QTY', payload: { id: 'pre-01', qty: 0, flavor: 'Citrus' } })
console.log('\nApós UPDATE_QTY p2 Citrus -> 0 (deve remover):', JSON.stringify(state.items, null, 2))

console.log('\nTeste finalizado.')
