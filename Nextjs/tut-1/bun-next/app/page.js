import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Dashboard from './home/dashboard/page'

export default function Home() {
  return (
    <div
      style={{
        display : "flex",
        justifyContent : 'center',
        width : "100%"
      }}
    >
      <h3>Main Page</h3>
      <nav 
        style={{
          width : "50%",
        }}
      >
        <ul
          style={{
            display : "flex",
            justifyContent : "space-evenly"
          }}
        >
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/user">User</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={null}>
        <Dashboard />
      </Suspense>
    </div>
  )
}
