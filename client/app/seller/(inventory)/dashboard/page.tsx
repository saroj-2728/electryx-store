'use client'
import Link from "next/link"
import { GoArrowRight } from "react-icons/go";

const date = new Date()
const dateToday = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

const Dashboard = () => {

  const ordersReceived = [
    {
      orderId: "someid",
      placedOn: dateToday,
      productId: 'some id',
      quantity: 4,
      totalPrice: 345
    },
    {
      orderId: "someid",
      placedOn: dateToday,
      productId: 'some id',
      quantity: 4,
      totalPrice: 345
    },
    {
      orderId: "someid",
      placedOn: dateToday,
      productId: 'some id',
      quantity: 4,
      totalPrice: 345
    },
    {
      orderId: "someid",
      placedOn: dateToday,
      productId: 'some id',
      quantity: 4,
      totalPrice: 345
    },
  ]

  const products = [
    {
      id: 1,
      name: 'Product A',
      price: 200,
      stock: 50,
      category: 'Category 1',
    },
    {
      id: 2,
      name: 'Product B',
      price: 300,
      stock: 30,
      category: 'Category 2',
    },
    {
      id: 3,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
    {
      id: 4,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
    {
      id: 5,
      name: 'Product C',
      price: 150,
      stock: 70,
      category: 'Category 3',
    },
  ]

  return (
    <div className="w-full min-h-screen flex flex-col px-8 space-y-10">

      <div className="w-full">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl mb-3">Recent Products</h2>
          <Link
            className="text-sm flex flex-row items-center gap-1 hover:opacity-70 text-btn-bg dark:text-btn-dark-bg text-center transition duration-300"
            href={'/seller/manage-products'}>
            <span>Manage Products</span>
            <GoArrowRight
              className="size-4"
            />
          </Link>
        </div>
        <div className="overflow-x-auto bg-card-light dark:bg-card-dark rounded-lg border border-brd-light dark:border-brd-dark shadow-light-small">
          <table className="min-w-full text-left text-sm  text-txt-sec-light dark:text-txt-sec-dark">
            <thead className="bg-neutral-light dark:bg-neutral-dark text-txt-light dark:text-txt-dark border-b border-brd-light dark:border-brd-dark">
              <tr>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="border-b border-brd-light dark:border-brd-dark"
                >
                  <td className="px-6 py-4">{product?.name}</td>
                  <td className="px-6 py-4">Rs. {product?.price}</td>
                  <td className="px-6 py-4">{product?.stock}</td>
                  <td className="px-6 py-4">{product?.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      

      <div className="w-full">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl mb-3">Orders Received</h2>
          <Link
            className="text-sm flex flex-row items-center gap-1 hover:opacity-70 text-btn-bg dark:text-btn-dark-bg text-center transition duration-300"
            href={'/seller/orders'}>
            <span>Manage Orders</span>
            <GoArrowRight
              className="size-4"
            />
          </Link>
        </div>
        <div className="overflow-x-auto bg-card-light dark:bg-card-dark rounded-lg border border-brd-light dark:border-brd-dark shadow-light-small">
          <table className="min-w-full text-left text-sm  text-txt-sec-light dark:text-txt-sec-dark">
            <thead className="bg-neutral-light dark:bg-neutral-dark text-txt-light dark:text-txt-dark border-b border-brd-light dark:border-brd-dark">
              <tr>
                <th className="px-6 py-3">Order</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Placed On</th>
                <th className="px-6 py-3">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {ordersReceived.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-brd-light dark:border-brd-dark"
                >
                  <td className="px-6 py-4">{order?.orderId}</td>
                  <td className="px-6 py-4">{order?.productId}</td>
                  <td className="px-6 py-4">{order?.quantity}</td>
                  <td className="px-6 py-4">{order?.placedOn}</td>
                  <td className="px-6 py-4">Rs. {order?.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
    </div>
  )
}

export default Dashboard