"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"
import { useState, useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [currentTime, setCurrentTime] = useState(Date.now())

  useEffect(() => {
    setCurrentTime(Date.now())
  }, [])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Client-side code here
    }
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 