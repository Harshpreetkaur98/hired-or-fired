import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <div className="flex bg-gray-900 justify-between p-5 shadow-sm">
      <Image src={'/logo.png'} width={300} height={100}/>
      <Button className="bg-blue-500">Get Started</Button>
    </div>
  )
}

export default Header;