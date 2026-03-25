'use client'

import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className='flex w-full min-h-screen'>
        <div className='page-wrapper flex w-full'>
          {/* Header/sidebar */}
          <div className='xl:block hidden'>
            <Sidebar />
          </div>

          <div className='body-wrapper w-full'>
            {/* Top Header  */}
            <Header />
            {/* Body Content  */}
            <div className="bg-lightgray dark:bg-dark sm:mr-3 sm:rounded-3xl min-h-[90vh]">
              <div className={`container mx-auto px-4 py-8 sm:px-6 sm:py-30`}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
