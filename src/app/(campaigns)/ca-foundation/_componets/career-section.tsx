import { ApplyDialogForm } from '@/components/main/apply-dialog-form';
import { CareerCard } from '@/components/main/career-card';
import { SalaryRangeCard } from '@/components/main/salary-range';
import SlideInDiv from '@/components/main/slideIn-div';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const corporateJobs = ['Finance Director', 'Finance Manager', 'Treasury Manager', 'Chief Finance Officer'];

const consultancyJobs = ['Tax Consultant', 'Risk Management', 'Business Strategy', 'Finance Consultant'];
const practice = ['Tax Audit', 'GST Audit', 'Internal Audit', 'Company Audit'];
export default function CareerSectionCaFoundation() {
  return (
    <section className="mx-auto bg-white">
      <div className="container mx-auto max-w-5xl px-4 py-8 text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Take The
          {' '}
          <span className="text-iii-accent">First Step</span>
          {' '}
          Towards Your
          {' '}
          <span className="text-iii-accent">Highly Paid!</span>
          {' '}
          Job
        </h2>
        <p className="mt-6 font-inter text-lg leading-relaxed text-gray-600 md:text-lg xl:text-xl">
          The earning potential of a Chartered Accountant (CA) is quite substantial, given the prestige and demand for this profession in fields such as finance, auditing, taxation, and consulting. Freshly qualified CAs typically earn between ₹6 to ₹12 lakh per annum, depending on their experience, skills, and the sector they work in.
        </p>
      </div>
      <div className="mx-auto flex flex-col md:max-w-6xl md:flex-row">
        <div className="md:w-1/2">
          <div className="container mx-auto p-4">
            <div className="grid gap-2 md:grid-cols-2">
              <CareerCard title="Career Opportunities for a Certified Management Accountant" variant="primary" />
              <CareerCard title="Jobs" jobs={corporateJobs} />
            </div>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <CareerCard title="Consultancy" jobs={consultancyJobs} className="md:max-w-none" />
              <CareerCard title="Practice" jobs={practice} className="md:max-w-none" variant="primary" />
            </div>
            <div className="mt-2">
              <SalaryRangeCard
                startingSalary="8 LPA"
                medianSalary="25 LPA"
                peakSalary="75 LPA"
              />
            </div>
            <div className="mt-2 text-center">
              <Link href="https://www.tripleica.com/chartered-accountancy" target="_blank" className="font-medium text-iii-primary underline">Learn more regarding Earning_potential</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-6 p-4 md:w-1/2">
          <ApplyDialogForm>
            <Button className="text-md z-10 rounded-xl bg-iii-accent p-6 text-white hover:bg-iii-primary md:p-8">Grab your CA Certificate</Button>
          </ApplyDialogForm>
          <SlideInDiv>
            <Image src="/images/certificate2.png" className="motion-translate-x-in-[0%] motion-translate-y-in-[101%]" title="CA Foundation Certificate" alt="CA Foundation Certificate" width={1200} height={1200} />
          </SlideInDiv>
        </div>
      </div>

    </section>
  );
}
