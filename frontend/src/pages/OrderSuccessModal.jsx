export default function OrderSuccessModal({
  name,
  cart,
  total,
  onClose,
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl m-4 shadow-xl max-w-md w-full p-6">

        <h2 className="text-2xl font-bold text-center text-green-600 mb-2">
          Order Successful 🎉
        </h2>

        <p className="text-center text-gray-600 mb-4">
          Thank you for shopping with us, <b>{name}</b>
        </p>

        {/* Product List */}
        <div className="border rounded-lg p-4 mb-4 max-h-40 overflow-y-auto">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-sm py-1"
            >
              <span>{item.name}</span>
              <span className="font-medium">₹{item.price}</span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between font-semibold mb-6">
          <span>Total</span>
          <span className="text-yellow-500">₹{total}</span>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          OK
        </button>
      </div>
    </div>
  );
}
