'use client'
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"

const date = new Date()
const dateToday = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

const UserProfile = () => {

  const { data: session, status } = useSession()
  const router = useRouter()

  const searchParams = useSearchParams()
  const tab = searchParams.get('tab')

  const recentOrders = [
    {
      orderId: "someid",
      placedOn: dateToday,
      itemImgSrc: "/images/signInImage.jpg",
      totalPrice: 345
    },
    {
      orderId: "someid",
      placedOn: dateToday,
      itemImgSrc: "/images/signInImage.jpg",
      totalPrice: 345
    },
    {
      orderId: "someid",
      placedOn: dateToday,
      itemImgSrc: "/images/signInImage.jpg",
      totalPrice: 345
    },
    {
      orderId: "someid",
      placedOn: dateToday,
      itemImgSrc: "/images/signInImage.jpg",
      totalPrice: 345
    },
  ]

  const renderContent = () => {
    switch (tab) {
      case 'editprofile':
        return (
          <>
            Edit Profile
          </>
        )
      case 'address':
        return (
          <>
            Address
          </>
        )
      case 'payment':
        return (
          <>
            <p>This feature is currently under development.</p>
          </>
        )
      case 'orders':
        return (
          <>
            Your Orders
          </>
        )
      case 'returns':
        return (
          <>
            <>
              <p>This feature is currently under development.</p>
            </>
          </>
        )
      case 'cancellations':
        return (
          <>
            <>
              <p>This feature is currently under development.</p>
            </>
          </>
        )
      default:
        return (
          <>
            <div className="w-full">
              <h2 className="text-xl mb-3">Manage My Account</h2>
              <div className="cards flex flex-row gap-[5%] justify-around items-center">
                <div className="profile w-[30%] bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-light-small">
                  <p className="text-base pb-3">Personal Profile {" "}
                    <Link
                      className="text-xs text-btn-bg dark:text-btn-dark-bg hover:opacity-70 transition duration-300"
                      href={'/user/profile?tab=editprofile'}>
                      Edit
                    </Link>
                  </p>
                  <div className="text-sm">
                    <p>{session?.user?.name || "User"}</p>
                    <p>{session?.user?.email}</p>
                  </div>
                </div>

                <div className="address w-[30%] bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-light-small">
                  <p className="text-base pb-3">Address Book {" "}
                    <Link
                      className="text-xs text-btn-bg dark:text-btn-dark-bg hover:opacity-70 transition duration-300"
                      href={'/user/profile?tab=editprofile'}>
                      Edit
                    </Link>
                  </p>
                  <div className="text-sm">
                    <p>{session?.user?.name || "User"}</p>
                    <p>{session?.user?.email}</p>
                  </div>
                </div>

                <div className="payment w-[30%] bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-light-small">
                  <p className="text-base pb-3">Payment Options {" "}
                    <Link
                      className="text-xs text-btn-bg dark:text-btn-dark-bg hover:opacity-70 transition duration-300"
                      href={'/user/profile?tab=editprofile'}>
                      Edit
                    </Link>
                  </p>
                  <div className="text-sm">
                    <p>{session?.user?.name || "User"}</p>
                    <p>{session?.user?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-xl mb-3">Recent Orders</h2>
              <div className="overflow-x-auto bg-card-light dark:bg-card-dark rounded-lg border border-brd-light dark:border-brd-dark shadow-light-small">
                <table className="min-w-full text-left text-sm  text-txt-sec-light dark:text-txt-sec-dark">
                  <thead className="bg-neutral-light dark:bg-neutral-dark text-txt-light dark:text-txt-dark border-b border-brd-light dark:border-brd-dark">
                    <tr>
                      <th className="px-6 py-3">Order</th>
                      <th className="px-6 py-3">Placed On</th>
                      <th className="px-6 py-3">Items</th>
                      <th className="px-6 py-3">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-brd-light dark:border-brd-dark"
                      >
                        <td className="px-6 py-4">{order?.orderId}</td>
                        <td className="px-6 py-4">{order?.placedOn}</td>
                        <td className="px-6 py-4">
                          <div className="text-center w-full flex items-center justify-start">
                            <Image
                              src={order?.itemImgSrc}
                              width={100}
                              height={100}
                              alt="Item image"
                              className="w-10 h-10 object-cover rounded-lg"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4">Rs. {order?.totalPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col px-8 space-y-10">
      {/* <p>
        Session: {JSON.stringify(session)}
      </p> */}
      {renderContent()}
    </div>
  )
}

export default UserProfile