"use client"

import { type ReactNode } from "react"
import { PageTransition } from "@/Components/page-transition"

interface PageWrapperProps {
  children: ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {


  return <PageTransition>{children}</PageTransition>
}
