import Link from "next/link"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full flex flex-row my-10 py-5 bg-neutral-light dark:bg-neutral-dark">
      <div className="options w-1/5 space-y-5 px-10">
        <div className="profile">
          <h3 className="text-base font-semibold mb-2">
            Manage my account
          </h3>
          <div className="flex flex-col text-sm px-5 space-y-1">
            <Link
              href={'/user/profile'}
              className="text-txt-sec-light dark:text-txt-sec-dark hover:text-txt-light dark:hover:text-txt-dark transition duration-300"
            >
              My Profile
            </Link>
            <Link
              href={'/user/profile?tab=editprofile'}
              className="text-txt-sec-light dark:text-txt-sec-dark hover:text-txt-light dark:hover:text-txt-dark transition duration-300"
            >
              Edit Profile
            </Link>
            <Link
              href={'/user/profile?tab=address'}
              className="text-txt-sec-light dark:text-txt-sec-dark hover:text-txt-light dark:hover:text-txt-dark transition duration-300"
            >
              Address
            </Link>
            <Link
              href={'/user/profile?tab=payment'}
              className="text-txt-sec-light dark:text-txt-sec-dark hover:text-txt-light dark:hover:text-txt-dark transition duration-300"
            >
              Payment Options
            </Link>
          </div>
        </div>

        <div className="orders">
          <h3 className="text-base font-semibold mb-2">
            My orders
          </h3>
          <div className="flex flex-col text-sm px-5 space-y-1">
            <Link
              href={'/user/profile?tab=orders'}
              className="text-txt-sec-light dark:text-txt-sec-dark hover:text-txt-light dark:hover:text-txt-dark transition duration-300"
            >
              My Orders
            </Link>
            <Link
              href={'/user/profile?tab=returns'}
              className="text-txt-sec-light dark:text-txt-sec-dark hover:text-txt-light dark:hover:text-txt-dark transition duration-300"
            >
              My Returns
            </Link>
            <Link
              href={'/user/profile?tab=cancellations'}
              className="text-txt-sec-light dark:text-txt-sec-dark hover:text-txt-light dark:hover:text-txt-dark transition duration-300"
            >
              My Cancellations
            </Link>
          </div>
        </div>
      </div>

      <div className="w-4/5">
        {children}
      </div>
    </div>
  )
}