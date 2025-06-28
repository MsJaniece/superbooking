import React from 'react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="p-8">{children}</main>
    </div>
  )
}
