'use client'

import React from 'react'
import { UserButton } from '@clerk/nextjs'

const NavBar = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default NavBar
