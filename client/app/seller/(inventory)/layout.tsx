'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname()

  useEffect(() => {
    document.title = 'Seller Center | Electryx Store'
  }, [])


  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="w-full relative mx-auto flex flex-row bg-neutral-light dark:bg-neutral-dark">
      <div className="options space-y-4 w-[200px] ps-5 pe-10 py-5 border-r border-brd-light dark:border-brd-dark fixed top-[64px] h-screen">
        <Link
          href={'/seller/dashboard'}
          className="text-xl font-semibold"
        >
          Seller Center
        </Link>

        <div className="flex flex-col text-sm space-y-1">
          <div className="w-full">
            <div
              className="text-txt-light dark:text-txt-dark flex items-center justify-between text-base cursor-pointer"
              onClick={() => toggleDropdown("Products")}
            >
              <h4 className="">
                Products
              </h4>
              <RiArrowDropDownLine
                className={`size-6 transition-transform duration-300 ${openDropdown === "Products" ? "rotate-180" : ""
                  }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === "Products" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="pl-4 py-2 space-y-2 flex flex-col">
                <Link
                  href={'/seller/manage-products'}
                  className={`${pathname.includes('/manage-products') ? 'text-btn-bg dark:text-btn-dark-bg' : 'text-txt-sec-light dark:text-txt-sec-dark'} hover:text-btn-bg dark:hover:text-btn-dark-bg transition duration-300`}
                >
                  Manage Products
                </Link>
                <Link
                  href={'/seller/add-products'}
                  className={`${pathname.includes('/add-products') ? 'text-btn-bg dark:text-btn-dark-bg' : 'text-txt-sec-light dark:text-txt-sec-dark'} hover:text-btn-bg dark:hover:text-btn-dark-bg transition duration-300`}
                >
                  Add Products
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div
              className="text-txt-light dark:text-txt-dark flex items-center justify-between text-base cursor-pointer"
              onClick={() => toggleDropdown("Orders")}
            >
              <h4 className="">
                Orders
              </h4>
              <RiArrowDropDownLine
                className={`size-6 transition-transform duration-300 ${openDropdown === "Orders" ? "rotate-180" : ""
                  }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === "Orders" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="pl-4 py-2 space-y-2 flex flex-col">
                <Link
                  href={'/seller/orders'}
                  className={`${pathname.includes('/orders') ? 'text-btn-bg dark:text-btn-dark-bg' : 'text-txt-sec-light dark:text-txt-sec-dark'} hover:text-btn-bg dark:hover:text-btn-dark-bg transition duration-300`}
                >
                  Manage Orders
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div
              className="text-txt-light dark:text-txt-dark flex items-center justify-between text-base cursor-pointer"
              onClick={() => toggleDropdown("SellerTools")}
            >
              <h4 className="">
                Seller Tools
              </h4>
              <RiArrowDropDownLine
                className={`size-6 transition-transform duration-300 ${openDropdown === "SellerTools" ? "rotate-180" : ""
                  }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === "SellerTools" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="pl-4 py-2 space-y-2 flex flex-col">
                <Link
                  href={'#'}
                  className={`${pathname.includes('/dddddd') ? 'text-btn-bg dark:text-btn-dark-bg' : 'text-txt-sec-light dark:text-txt-sec-dark'} hover:text-btn-bg dark:hover:text-btn-dark-bg transition duration-300`}
                >
                  Seller tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 ml-[200px] overflow-y-auto">
        {children}
      </div>
    </div>
  )
}