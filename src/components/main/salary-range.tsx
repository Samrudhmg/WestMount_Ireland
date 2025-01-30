import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';
import { IndianRupee } from 'lucide-react';
import { ColorProgress } from './salary-bar';

interface SalaryRangeProps {
  startingSalary?: string;
  medianSalary?: string;
  peakSalary?: string;
  className?: string;
}

export function SalaryRangeCard({
  startingSalary,
  medianSalary,
  peakSalary,
  className = '',
}: Readonly<SalaryRangeProps>) {
  return (
    <Card
      className={cn(
        'flex w-full max-w-none flex-col justify-between break-normal rounded-2xl',
        className,
      )}
    >
      <CardHeader className="">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <IndianRupee className="size-5 text-iii-primary md:mx-5" />
          The Potential Salary is Limitless
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <h3 className="font-semibold text-iii-primary">
            High Initial
            {' '}
            <br />
            {' '}
            Average Salary
          </h3>
        </div>

        <div className="relative pt-2">
          <div className="absolute inset-x-0 -top-2 flex justify-between md:mx-5">
            <div className="flex flex-col items-center">
              <span className="text-center text-sm font-semibold md:text-xl">
                ₹
                {startingSalary}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-md font-bold md:text-4xl">
                ₹
                {medianSalary}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold md:text-xl">
                ₹
                {peakSalary}
              </span>
            </div>
          </div>
          <ColorProgress />
        </div>
      </CardContent>
    </Card>
  );
}
