import { ApplyDialogForm } from '@/components/main/apply-dialog-form';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface CourseBenefit {
  text: string;
}

interface CoursePromoProps {
  batchName: string;
  benefits: CourseBenefit[];
  originalPrice: number;
  discountedPrice: number;
}

interface PriceProps {
  originalPrice: number;
  discountedPrice: number;
}

function Price({ originalPrice, discountedPrice }: Readonly<PriceProps>) {
  return (
    <div className="py-5 text-center">
      {/* <p className="text-sm uppercase tracking-wider">ADMISSION FEE</p> */}
      <div className="mt-2 flex flex-col items-center justify-center gap-2 font-inter text-5xl font-bold md:flex-row">
        <span>
          only ₹
          {discountedPrice.toLocaleString()}
          /
        </span>
        <div className="relative">
          <span className="text-3xl text-[#ed9c81] opacity-60">
            ₹
            {originalPrice.toLocaleString()}
            /
          </span>
          <img
            src="/icons/line.svg"
            alt="line"
            className="absolute left-0 top-[55%] w-full opacity-70"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export function CoursePromoCAFoundation({ batchName, benefits, originalPrice, discountedPrice }: Readonly<CoursePromoProps>) {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center bg-iii-primary px-4 py-16 font-inter text-white">
      <div className="w-full space-y-8 md:max-w-2xl">
        <div className="text-center">
          <h3 className="mb-2 text-5xl font-bold">Time Is Running Out!</h3>
          <p className="text-lg">
            {batchName}
            {' '}
            Batch Starting soon.
          </p>
        </div>

        <p className="text-center text-2xl font-extralight uppercase tracking-wider">ADMISSION FEE</p>
        <div className="relative mx-auto max-w-5xl font-sans">

          <div className="absolute inset-0 translate-x-[3px] translate-y-[2px] rounded-3xl bg-[#a33f1e]"></div>
          <div className="absolute inset-0 translate-x-[5px] translate-y-[4px] rounded-3xl  bg-[#ba3104]"></div>
          <div className="absolute inset-0 translate-x-[7px] translate-y-[6px] rounded-3xl bg-[#c4380a]/50"></div>
          <div className="absolute inset-0 translate-x-[9px] translate-y-[8px] rounded-3xl bg-[#c4380a]/40 shadow-sm"></div>

          {/* <div className="relative z-10 h-full rounded-lg border-2 border-gray-100 bg-white p-6 shadow-sm"> */}

          <Card className="relative z-10 mx-auto max-w-5xl rounded-3xl border-none bg-zinc-900 p-7 py-14 text-white">
            <h3 className="mb-6 font-inter text-4xl font-bold">Course Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#DC4216]">
                    <img src="/icons/star.svg" className="w-6" alt="star" />
                  </span>
                  <p className="flex-1 font-inter font-medium text-gray-100">{benefit.text}</p>
                </div>
              ))}
            </div>
            <Price originalPrice={originalPrice} discountedPrice={discountedPrice} />

            <ApplyDialogForm>
              <div className="mt-6 flex cursor-pointer items-center justify-center rounded-md bg-[#7f0000] p-3 py-4 text-xl font-semibold text-white">
                <Clock className="mr-2 size-6" />
                <span>Get offer Now</span>
              </div>
            </ApplyDialogForm>
          </Card>
        </div>
      </div>
    </div>
  );
}
