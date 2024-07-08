import { createContext } from 'react'
import { DUMMY_PRODUCTS } from '../dummy-products.js'

import { useReducer } from 'react'

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updatedItemQuantity: () => {},
})

function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items]

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    )
    const existingCartItem = updatedItems[existingCartItemIndex]

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      }
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      )
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      })
    }

    return {
      ...state, //we do not require this in our case because we have only one value
      items: updatedItems,
    }
  }
  if (action.type === 'UPDATE_ITEM_QUANTITY') {
    const updatedItems = [...state.items]
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    )

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    }

    updatedItem.quantity += action.payload.amount

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1)
    } else {
      updatedItems[updatedItemIndex] = updatedItem
    }

    return {
      ...state,
      items: updatedItems,
    }
  }
  return state
}

export function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  )
  function handleAddItemToCart(id) {
    shoppingCartDispatch({ type: 'ADD_ITEM', payload: id })
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { productId: productId, amount: amount },
    })
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updatedItemQuantity: handleUpdateCartItemQuantity,
  }

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  )
}
