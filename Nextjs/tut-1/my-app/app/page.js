'use client';

import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();

  return (
    <div>
      Home route
      <button onClick={() => router.push("/Dashboard")}>Users</button>
    </div>
  )
}

export default Page;