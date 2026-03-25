function Cart({ cart, setCart }) {

  const increase = (item) => {
    setCart(
      cart.map((x) =>
        x.id === item.id ? { ...x, qty: x.qty + 1 } : x
      )
    )
  }

  const decrease = (item) => {
    setCart(
      cart.map((x) =>
        x.id === item.id ? { ...x, qty: x.qty - 1 } : x
      ).filter((x) => x.qty > 0)
    )
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-4">
          <h3>{item.name}</h3>

          <div>
            <button onClick={() => decrease(item)}>-</button>
            <span className="mx-2">{item.qty}</span>
            <button onClick={() => increase(item)}>+</button>
          </div>

          <p>₹{item.price * item.qty}</p>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">
        Total: ₹{total}
      </h2>
    </div>
  )
}

export default Cart