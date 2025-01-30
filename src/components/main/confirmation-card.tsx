import { Card, CardContent } from '@/components/ui/card';

import Image from 'next/image';

export default function ConfirmationCard() {
  return (
    <Card className="w-full max-w-none rounded-3xl border-none bg-white shadow-none">
      <CardContent className="flex flex-col items-center justify-center px-6 pb-12 pt-10 text-center">
        <div className="mb-6 flex size-16 items-center justify-center rounded-full">
          <Image src="/icons/tick.svg" alt="tick" width={300} height={300} unoptimized />
        </div>
        <h2 className="mb-2 text-2xl font-semibold">Thank you!</h2>
        <p className="text-gray-700">Our Sales Executive will be connecting with you soon :)</p>
      </CardContent>
    </Card>
  );
}
