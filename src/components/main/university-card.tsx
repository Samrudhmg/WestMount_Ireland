import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ApplyDialogForm } from './apply-dialog-form';

interface UniversityCardProps {
  name: string;
  location: string;
  imageUrl: string;
  logoUrl: string;
  worldRanking: string | number;
  totalStudents: string;
}

export default function UniversityCard({
  name,
  location,
  imageUrl,
  logoUrl,
  worldRanking,
  totalStudents,
}: UniversityCardProps) {
  return (
    <div className="flex h-[310px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0px_1px_8px_-1px_rgba(0,0,0,0.22)] md:h-auto">
      {/* Image Section */}
      <div className="relative flex flex-1 flex-col p-4">
        <div className="relative h-40 w-full overflow-hidden rounded-lg md:h-48">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/60" />
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={`${name} campus`}
            fill
            className="object-cover brightness-90"
          />
        </div>

        {/* University Logo & Name */}
        <div className="absolute bottom-6 left-5 z-20 flex items-center gap-3">
          <div className="relative size-10 shrink-0 rounded-full bg-white shadow-md md:size-12">
            <Image
              src={logoUrl || '/placeholder.svg'}
              alt={`${name} logo`}
              fill
              className="rounded-full object-cover p-1"
            />
          </div>
          <div className="text-white">
            <h3 className="text-[15px] leading-tight lg:text-lg">
              {name}
            </h3>
            <p className="text-sm text-white/90">{location}</p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          {/* Ranking & Students Count */}
          <div className="flex items-center space-x-6 md:space-x-3 lg:space-x-6">
            {/* World Ranking */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold">
                {worldRanking}
              </div>
              <div className="text-xs text-gray-600">
                World ranking
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            {/* Total Students */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold">
                {totalStudents}
              </div>
              <div className="text-xs text-gray-600">
                Total students
              </div>
            </div>
          </div>

          {/* Know More Link - Aligned with ranking on larger screens, moves down on mobile */}
          <ApplyDialogForm>
            <Link
              href="/"
              className="mt-4 flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 md:ml-auto md:mt-0"
            >
              Know more
              <ChevronRight className="size-4" />
            </Link>
          </ApplyDialogForm>
          {/* <ApplyDialogForm>
            <Button
              className="h-10 bg-white px-5 text-teal-700 "
            >
              Contact us
            </Button>
          </ApplyDialogForm> */}
        </div>
      </div>
    </div>
  );
}
