'use client'
import { useSearchParams } from "next/navigation"
import Link from "next/link"

const AuthError = () => {

  const searchParams = useSearchParams()
  const errorMessage = searchParams.get('error')

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="border bg-back-light dark:bg-back-dark border-brd-light dark:border-brd-dark max-w-xs p-3 py-5 rounded-xl flex items-center justify-center shadow-light-card animate-in zoom-in-0 transition-all duration-300 text-sm">
        <div
          className="w-full p-3"
        >

          <div className="options w-full mb-6">
            <div className="text-center font-allertaStencil">
              Oops! Looks like something went wrong.
            </div>
          </div>
          <div className="w-full space-y-4">

            {errorMessage &&
              <div className={`text-xs text-center py-0 my-0 text-error`}>
                {errorMessage}
              </div>
            }

            <div className="w-full text-center">
              <Link
                href={'/user/sign-in'}
                className="hover:text-btn-bg hover:dark:text-btn-dark-bg transition duration-300">
                Back to Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthError
