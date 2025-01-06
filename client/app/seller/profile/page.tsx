"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const date = new Date();
const dateToday = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

const SellerProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const recentOrders = [
    {
      orderId: "someid",
      placedOn: dateToday,
      itemImgSrc: "/images/signInImage.jpg",
      totalPrice: 345,
    },
    {
      orderId: "someid",
      placedOn: dateToday,
      itemImgSrc: "/images/signInImage.jpg",
      totalPrice: 345,
    },
    {
      orderId: "someid",
      placedOn: dateToday,
      itemImgSrc: "/images/signInImage.jpg",
      totalPrice: 345,
    },
    {
      orderId: "someid",
      placedOn: dateToday,
      itemImgSrc: "/images/signInImage.jpg",
      totalPrice: 345,
    },
  ];

  const renderContent = () => {
    switch (tab) {
      case "editprofile":
        return <>Edit Profile</>;
      case "payouts":
        return <p>This feature is currently under development.</p>;
      case "inventory":
        return <>Manage Inventory</>;
      case "addproduct":
        return <>Add New Product</>;
      case "orders":
        return <>View Orders</>;
      case "returns":
        return <p>This feature is currently under development.</p>;
      default:
        return (
          <>
            <div className="w-full">
              <h2 className="text-xl mb-3">Manage My Seller Account</h2>
              <div className="cards flex flex-row gap-[5%] justify-around items-center">
                <div className="profile w-[30%] bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-light-small">
                  <p className="text-base pb-3">
                    Seller Profile {" "}
                    <Link
                      className="text-xs text-btn-bg dark:text-btn-dark-bg hover:opacity-70 transition duration-300"
                      href={"/seller/profile?tab=editprofile"}
                    >
                      Edit
                    </Link>
                  </p>
                  <div className="text-sm">
                    <p>{session?.user?.name || "Seller"}</p>
                    <p>{session?.user?.email}</p>
                  </div>
                </div>

                <div className="payouts w-[30%] bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-light-small">
                  <p className="text-base pb-3">
                    Payout Details {" "}
                    <Link
                      className="text-xs text-btn-bg dark:text-btn-dark-bg hover:opacity-70 transition duration-300"
                      href={"/seller/profile?tab=payouts"}
                    >
                      Edit
                    </Link>
                  </p>
                  <div className="text-sm">
                    <p>Bank Details</p>
                    <p>Account Information</p>
                  </div>
                </div>

                <div className="inventory w-[30%] bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-light-small">
                  <p className="text-base pb-3">
                    Manage Inventory {" "}
                    <Link
                      className="text-xs text-btn-bg dark:text-btn-dark-bg hover:opacity-70 transition duration-300"
                      href={"/seller/profile?tab=inventory"}
                    >
                      Edit
                    </Link>
                  </p>
                  <div className="text-sm">
                    <p>View and Update Products</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-xl mb-3">Recent Orders</h2>
              <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-light-small">
                <div className="w-full title flex flex-row justify-between items-start text-txt-sec-light dark:text-txt-sec-dark py-3 px-3 rounded-t-lg border border-brd-light dark:border-brd-dark">
                  <p className="text-center w-full">Order</p>
                  <p className="text-center w-full">Placed On</p>
                  <p className="text-center w-full">Items</p>
                  <p className="text-center w-full">Total Price</p>
                </div>
                <div className="w-full flex items-center justify-center flex-col divide-y divide-brd-light dark:divide-brd-dark">
                  {recentOrders.map((order, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-row justify-between items-center py-4"
                    >
                      <div className="text-center w-full">{order?.orderId}</div>
                      <div className="text-center w-full">{order?.placedOn}</div>
                      <div className="text-center w-full flex items-center justify-center">
                        <Image
                          src={order?.itemImgSrc}
                          width={100}
                          height={100}
                          alt="Item image"
                          className="w-10 h-10 object-cover rounded-lg"
                        />
                      </div>
                      <div className="text-center w-full">Rs. {order?.totalPrice}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col px-8 space-y-10">
      {renderContent()}
    </div>
  );
};

export default SellerProfilePage;
