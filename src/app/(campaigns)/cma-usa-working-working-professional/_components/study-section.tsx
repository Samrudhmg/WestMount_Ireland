import { ApplyDialogForm } from '@/components/main/apply-dialog-form';
import { ComparisonTable } from '@/components/main/comparison-table';
import { Button } from '@/components/ui/button';

const courseComparison = [
  {
    criteria: 'Learning Style',
    offline: 'Structured classroom setup with in person interactions',
    online: 'Flexible learning from home with recorded or live sessions.',
  },
  {
    criteria: 'Interaction Level',
    offline: 'Face-to-face discussions with faculty and peers for immediate doubt-solving',
    online: 'Doubt-clearing through chat, emails, or live Q&A sessions; interaction may feel less personal.',
  },
  {
    criteria: 'Accessibility',
    offline: 'Limited to students near the coaching center or willing to travel.',
    online: 'Accessible anytime, anywhere, eliminating geographical constraints.',
  },
];
export default function StudySection() {
  return (
    <section className="mx-auto bg-white py-10">
      <div className="container mx-auto max-w-5xl px-4 py-8 text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Study
          {' '}
          <span className="text-iii-accent">Offline </span>
          {' '}
          Or
          {' '}
          <span className="text-iii-accent">Online</span>
          {' '}
          Classes
        </h2>
        <p className="mt-6 font-inter text-lg leading-relaxed text-gray-600 md:text-lg xl:text-xl">
          Take the next step in your career with CMA USA online coaching, designed for degree students to balance academics and professional studies effortlessly while gaining expert guidance from anywhere.
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center gap-3 px-2 md:max-w-5xl">
        <ComparisonTable rows={courseComparison} />
        <ApplyDialogForm>
          <Button className="text-md w-full rounded-xl bg-iii-accent p-5 font-semibold text-white hover:bg-iii-primary md:w-64 md:p-6">Know more</Button>
        </ApplyDialogForm>
      </div>

    </section>
  );
}
