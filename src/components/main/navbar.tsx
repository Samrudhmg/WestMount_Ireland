import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '../ui/button';
import { ApplyDialogForm } from './apply-dialog-form';

interface NavBarProps {
  navItems?: {
    name: string;
    href: string;
  }[];
}

export default function NavBar({ navItems }: Readonly<NavBarProps>) {
  return (
    <nav className="bg-white">
      <div className="mx-auto flex items-center justify-between p-4 md:container lg:w-8/12 lg:justify-evenly lg:px-8">
        <div className="flex lg:flex-1">
          <Link className="flex items-center text-xl font-semibold" href="/">
            <Image alt="triple i logo" title="Triple i Commerce Academy" width={100} height={100} src="/icons/triple-i-logo.svg" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems?.map(item => (
            <Link className="font-medium leading-6" href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <ApplyDialogForm>
            <Button className="text-md rounder bg-iii-contrast p-5 hover:bg-iii-primary">Signup</Button>
          </ApplyDialogForm>
        </div>
      </div>
    </nav>
  );
}
