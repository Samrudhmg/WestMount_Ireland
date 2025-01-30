import { ApplyDialogForm } from '@/components/main/apply-dialog-form';
import { CareerCard } from '@/components/main/career-card';
import { SalaryRangeCard } from '@/components/main/salary-range';
import SlideInDiv from '@/components/main/slideIn-div';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const corporateJobs = ['Internal Auditor', 'Cost Accountant', 'Financial Accountant', 'Management Accountant'];

const consultancyJobs = ['Risk Management', 'Business Strategy', 'Financial Consultant', 'Management Consultancy'];
export default function CareerSection() {
  return (
    <section className="mx-auto bg-white">
      <div className="container mx-auto max-w-5xl px-4 py-8 text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Boost Your
          {' '}
          <span className="text-iii-accent">Career</span>
          {' '}
          While Pursuing Your
          {' '}
          <span className="text-iii-accent">Degree!</span>
        </h2>
        <p className="mt-6 font-inter text-lg leading-relaxed text-gray-600 md:text-lg xl:text-xl">
          CMA USA is not just a qualification—it’s your passport to a world of high-paying jobs, leadership roles, and Global recognition. Earn ₹10-20 Lakh annually with expertise in finance and strategy.
        </p>
      </div>
      <div className="mx-auto flex flex-col md:max-w-6xl md:flex-row">
        <div className="md:w-1/2">
          <div className="container mx-auto p-4">
            <div className="grid gap-2 md:grid-cols-2">
              <CareerCard title="Career Opportunities for a Certified Management Accountant" variant="primary" />
              <CareerCard title="Jobs" subtitle="Work in Corporate" jobs={corporateJobs} />
            </div>
            <div className="mt-2">
              <CareerCard title="Consultancy" subtitle="Advice Businesses" jobs={consultancyJobs} className="md:max-w-none" />
            </div>
            <div className="mt-2">
              <SalaryRangeCard
                startingSalary="8 LPA"
                medianSalary="25 LPA"
                peakSalary="75 LPA"
              />
            </div>
            <div className="mt-2 text-center">
              <Link href="https://www.tripleica.com/blog/cma-usa-salary" target="_blank" className="font-medium text-iii-primary underline">Learn more regarding Earning_potential</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-6 p-4 md:w-1/2">
          <ApplyDialogForm>
            <Button className="text-md z-10 rounded-xl bg-iii-accent p-6 text-white hover:bg-iii-primary md:p-8">Grab your CMA USA Certificate</Button>
          </ApplyDialogForm>
          <SlideInDiv>
            <Image src="/images/certificate.png" className="motion-translate-x-in-[0%] motion-translate-y-in-[101%]" alt="CMA USA Certificate" width={1200} height={1200} />
          </SlideInDiv>
        </div>
      </div>

    </section>
  );
}
