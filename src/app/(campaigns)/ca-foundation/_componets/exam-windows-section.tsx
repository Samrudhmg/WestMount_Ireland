import { ExamMonthCards, type ScheduleDate } from '@/components/main/exam-month-card';

const scheduleDates: ScheduleDate[] = [
  { start: 'January', end: 'February' },
  { start: 'May', end: 'June' },
  { start: 'September', end: 'October' },
];

const examParts = [1, 2];

export default function ExamWindowSectionCaFoundation() {
  return (
    <section className="mx-auto bg-white">
      <div className="container mx-auto max-w-5xl px-4 py-8 text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          <span className="text-iii-accent">CMA USA</span>
          {' '}
          Exam Windows
        </h2>
        <p className="mt-6 font-inter text-lg leading-relaxed text-gray-600 md:text-lg xl:text-xl">
          CMA USA exam windows are available during specific periods throughout the year.
        </p>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-2">
        {examParts.map(part => (
          <ExamMonthCards
            key={`exam-part-${part}`}
            part={part}
            dates={scheduleDates}
          />
        ))}
      </div>

    </section>
  );
}
