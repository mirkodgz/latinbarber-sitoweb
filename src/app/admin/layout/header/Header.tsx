'use client'

import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import Profile from './Profile'
import Link from 'next/link'
import SidebarLayout from '../sidebar/Sidebar'
import FullLogo from '../shared/logo/FullLogo'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-2 ${
          isSticky ? 'bg-background shadow-md fixed w-full' : 'bg-transparent'
        }`}>
        <nav
          className={`rounded-none py-4 sm:ps-6 max-w-full! sm:pe-10 dark:bg-dark flex justify-between items-center px-6`}>
          
          {/* Mobile Toggle Icon */}
          <div
            onClick={() => setIsOpen(true)}
            className='px-3.5 hover:text-primary dark:hover:text-primary text-link dark:text-darklink relative xl:hidden flex justify-center items-center cursor-pointer'>
            <Icon icon='tabler:menu-2' height={20} width={20} />
          </div>

          <div className='block xl:hidden'>
            <FullLogo />
          </div>

          {/* Simple Profile Only on Mobile Right */}
          <div className='flex xl:hidden items-center'>
            <Profile />
          </div>

          {/* Desktop Layout */}
          <div className='hidden xl:flex items-center justify-end w-full'>
            <div className='flex items-center gap-4'>
              <Profile />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side='left' className='w-64 p-0'>
          <VisuallyHidden>
            <SheetTitle>sidebar</SheetTitle>
          </VisuallyHidden>
          <SidebarLayout onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Header
