'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Suspense, useState } from 'react';
import { ApplyForm } from './apply-form';

// import { ApplyForm } from './apply-form';

interface ApplyDialogFormProps {
  children: React.ReactNode;
}

export function ApplyDialogForm({ children }: Readonly<ApplyDialogFormProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Suspense fallback={<p>Loading form...</p>}>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="py-0 sm:max-w-[480px]">
            <DialogHeader>
              <DialogTitle className="sr-only">Apply</DialogTitle>
            </DialogHeader>
            <ApplyForm />
          </DialogContent>
        </Dialog>
      </Suspense>
    );
  }

  return (
    <Suspense>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="sr-only text-left">
            <DrawerTitle></DrawerTitle>
            <DrawerDescription>title</DrawerDescription>
          </DrawerHeader>
          <ApplyForm />
        </DrawerContent>
      </Drawer>
    </Suspense>
  );
}
