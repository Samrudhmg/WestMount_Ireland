import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CASyllabus() {
  const syllabusData = [
    {
      title: 'CA Foundation',
      description:
        'The entry-level exam for Chartered Accountancy, covering basic subjects like Accounting, Law, and Economics.',
      icon: '/icons/foundation.svg',
    },
    {
      title: 'CA Intermediate',
      description:
        'The second level of the CA course, with advanced subjects like Financial Management, Taxation, and Auditing.',
      icon: '/icons/intermediate.svg',
    },
    {
      title: 'Articleship',
      description:
        'Practical training under a CA mentor, typically lasting 3 years, where students gain hands-on experience in accounting, auditing, and taxation.',
      icon: '/icons/articleship.svg',
    },
    {
      title: 'CA Final',
      description:
        'The last stage of the CA course, focusing on advanced topics in auditing, taxation, financial reporting, and business laws.',
      icon: '/icons/final.svg',
    },
  ];

  return (
    <div className="bg-white py-5 md:py-14">
      <div className="mx-auto max-w-6xl p-6">
        <div className="mb-8">
          <h2 className="mb-2 text-4xl font-bold">
            <span className="text-iii-primary">CA</span>
            {' '}
            Syllabus
          </h2>
          <span className="text-lg text-gray-600">Syllabus in glance</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {syllabusData.map((item, index) => (
            <Card key={index} className="rounded-2xl border border-gray-200">
              <CardHeader className="space-y-1 pb-2">
                <div className="flex size-10 items-center justify-center rounded-full bg-iii-accent">
                  <img
                    src={item.icon || '/placeholder.svg'}
                    alt={`${item.title} icon`}
                    className="w-6 text-[#E84B1C]"
                  />
                </div>
                <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-md text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
