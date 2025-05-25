"use client"

import { type ReactNode, useState, useEffect } from "react"
import { PageTransition } from "@/Components/page-transition"

interface PageWrapperProps {
  children: ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {

  useEffect(() => {
    // Simulate loading time
    return () => clearTimeout(timer)
  }, [])


  return <PageTransition>{children}</PageTransition>
}
