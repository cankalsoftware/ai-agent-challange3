"use client";




import Link from 'next/link';
import React from 'react'
import AgentPulse from './AgentPulse';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import { Button } from './ui/button';

function Header() {
  return (
    <header className='sticky top-0 z-50 left-0 right-0 px-4 md:px-6 lg:px-8 bg-white/90 backdrop-blur-sm border-b border-gray-200'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between h-16'>
          {/* Left */}
            <div className='flex items-center justify-between h-16'>
              <Link href="/" className='flex items-center gap-4' >
                <AgentPulse size="small" color="blue" />
                <h1 className='text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text'>
                  AgentTube
                </h1>
              </Link>
            </div>
          
            {/* Right */}
            <div className='flex items-center gap-4'>
              <SignedIn>
                <Link href="/manage-plan" className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors'>
                <Button variant="outline"
                className='mr-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text'
                >Manage Plan</Button>
                </Link>
                <div className='p-2 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 border border-blue-200'>
                    <UserButton />
              </div>
              </SignedIn>

              {/* Signed Out */}
              <SignedOut>
                  <SignInButton mode="modal">
                  <Button variant="ghost" className='mr-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text'>
                    Sign In
                  </Button>
                  </SignInButton>
                
              </SignedOut>

            </div>
          </div>
        </div>
    </header>
  )
}

export default Header