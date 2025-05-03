'use client';

import PartnerLogos from '@/app/_components/hiring-partners';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';
import CustomCarousel from '../ui/extended/carousel-custom';
import { ApplyDialogForm } from './apply-dialog-form';

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-[45%_55%] lg:gap-0">
          {/* Image Carousel - Now at the top for mobile, and on the right for desktop */}
          <div className="relative order-1 h-[400px]  w-full overflow-hidden sm:h-[400px] lg:order-2 lg:h-[500px]">
            <div className="absolute flex w-full items-center justify-center">
              <CustomCarousel />
            </div>
          </div>

          {/* Content Column - Below the slider on mobile, on the left for desktop */}
          <div className="lg: order-2 space-y-6 sm:space-y-10 lg:order-1">
            <div className="space-y-4">
              {/* Responsive Flag*/}
              <div className="flex flex-row-reverse items-center justify-center gap-5 lg:flex-col  lg:items-start lg:justify-normal">
                <div className=" size-10 rounded-full sm:size-16 lg:size-14">
                  <img
                    src="/images/flag.png"
                    alt="Irish Flag"
                    className="size-full object-cover"
                  />
                </div>
                <h1 className="text-center text-3xl font-bold sm:text-4xl lg:text-left">
                  Gateway to
                  {' '}
                  <span className="text-West-accent">
                    Ireland
                  </span>
                </h1>
              </div>

              <p className="truncate text-center text-lg text-gray-600 sm:text-xl lg:text-left">
                The journey of Westmount's study abroad
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start lg:gap-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <Avatar className="size-8 sm:size-10">
                    <AvatarImage
                      src="/images/Assignees-1.png"
                      alt="Student"
                    />
                  </Avatar>
                  <Avatar className="size-8 sm:size-10 ">
                    <AvatarImage
                      src="/images/Assignees-2.png"
                      alt="Student"
                    />
                  </Avatar>
                  <Avatar className="size-8 sm:size-10">
                    <AvatarImage
                      src="/images/Assignees-3.png"
                      alt="Student"
                    />
                  </Avatar>
                </div>
                <span className="ml-2 whitespace-nowrap text-sm text-gray-600 sm:ml-4 sm:text-base">
                  1M+ students
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/images/Google-1.png"
                  alt="Google"
                  width={38}
                  height={20}
                />
                <div>
                  <span className="whitespace-nowrap text-sm">
                    Google Rating
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">5.0</span>
                    <div className="flex">
                      <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
                      <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
                      <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
                      <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
                      <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <ApplyDialogForm>
                <Button
                  className="h-12 w-full px-6 sm:w-auto"
                  variant="outline"
                >
                  Contact us
                </Button>
              </ApplyDialogForm>
              <ApplyDialogForm>
                <Button className="flex h-12 items-center px-6 ">
                  Download Brochure
                  <img
                    src="/icons/plane-icon.svg"
                    alt=""
                    className="size-5"
                  />
                </Button>
              </ApplyDialogForm>
            </div>
          </div>
        </div>
        <PartnerLogos />
      </main>
    </div>
  );
}
