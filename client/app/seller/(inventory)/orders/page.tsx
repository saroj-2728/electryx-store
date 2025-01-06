'use client'
import { useState } from "react"
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

const ManageOrders = () => {

  const [ordersReceived, setOrdersReceived] = useState([
    {
      id: 1,
      orderId: 'some id',
      product: {
        name: 'Product Name',
        image: 'productImageSrc'
      },
      buyer: {
        buyerId: 'some id',
        name: 'buyer name'
      },
      price: 200,
      quantity: 50,
    },
    {
      id: 2,
      orderId: 'some id',
      product: {
        name: 'Product Name',
        image: 'productImageSrc'
      },
      buyer: {
        buyerId: 'some id',
        name: 'buyer name'
      },
      price: 200,
      quantity: 50,
    },
    {
      id: 3,
      orderId: 'some id',
      product: {
        name: 'Product Name',
        image: 'productImageSrc'
      },
      buyer: {
        buyerId: 'some id',
        name: 'buyer name'
      },
      price: 200,
      quantity: 50,
    },
    {
      id: 4,
      orderId: 'some id',
      product: {
        name: 'Product Name',
        image: 'productImageSrc'
      },
      buyer: {
        buyerId: 'some id',
        name: 'buyer name'
      },
      price: 200,
      quantity: 50,
    },
    {
      id: 5,
      orderId: 'some id',
      product: {
        name: 'Product Name',
        image: 'productImageSrc'
      },
      buyer: {
        buyerId: 'some id',
        name: 'buyer name'
      },
      price: 200,
      quantity: 50,
    },

  ]);


  return (
    <div className="w-full min-h-screen px-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl mb-3">Orders Received</h2>
      </div>

      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ordersReceived.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center">
                <Image
                  height={400}
                  width={400}
                  src={'/images/signInImage.jpg'}
                  alt={order.product.name}
                  className="w-32 h-32 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium mb-2">{order.product.name}</h3>
                <p className="text-sm text-gray-600">Buyer: {order.buyer.name}</p>
                <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
                <p className="text-sm text-gray-600">Price: ${order.price}</p>
              </div>
              <div className="flex justify-end mt-4">
                <Link
                  href={`/orders/${order.orderId}`}
                  className="text-blue-500 flex items-center gap-1 hover:underline"
                >
                  View Details <GoArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManageOrders
