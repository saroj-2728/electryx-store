'use client'
// import Image from "next/image"
import { SignIn } from "@/components/Auth/Signin"

const SellerSignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center gap-10 w-full mx-auto shadow-lg overflow-hidden bg-accent-light dark:bg-accent-dark py-20">

        <div className="hidden md:flex flex-col justify-center items-center w-1/2 text-white p-10">
          <h1 className="text-5xl font-bold mb-4 animate-in fade-in duration-700 font-allertaStencil">
            Become a Seller Today
          </h1>
          <h3 className="text-xl font-medium animate-in fade-in duration-1000">
            Create a Seller account now and reach millions of customers!
          </h3>
          {/* <div className="pt-14 w-72 h-72 transform -rotate-12 animate-in duration-500">
            <Image
              src="/images/signInImage.jpg"
              height={500}
              width={500}
              alt="Illustration"
              className="object-contain rounded-lg"
            />
          </div> */}
        </div>

        <div className="w-[30%]">
          <SignIn isSellerComp={true} />
        </div>
      </div>
    </div>
  )
}

export default SellerSignIn
