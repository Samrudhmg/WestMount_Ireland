import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface ScheduleDate {
  start: string;
  end: string;
}

export interface ScheduleCardProps {
  part: number;
  dates: ScheduleDate[];
  className?: string;
}

export function ExamMonthCards({ part, dates, className }: Readonly<ScheduleCardProps>) {
  return (
    <Card className={cn('shadow-sm rounded-2xl', className)}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-[#FF4B26] text-lg font-bold text-white">
            {part}
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              Part
              {part}
            </h3>
            <div className="space-y-2 font-medium text-gray-600">
              {dates.map((date, index) => (
                <p key={index} className="text-lg">
                  {date.start}
                  {' '}
                  -
                  {date.end}
                </p>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
