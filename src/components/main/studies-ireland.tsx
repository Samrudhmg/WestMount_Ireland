import { Button } from '@/components/ui/button';
import { ApplyDialogForm } from './apply-dialog-form';
import Counter from './counter';

export default function StudyIrelandSection() {
  const stats = [
    { count: 32, label: 'Countries' },
    { count: 800, label: 'Universities' },
    { count: 99.9, label: 'Visa Success Rate' },
  ];

  return (
    <div className="mx-auto px-4  py-6 lg:max-w-full lg:px-0">
      <div className=" lg:px-24">
        <h2 className="mb-6 text-3xl font-bold">
          Why study in
          {' '}
          <span className="text-teal-600">Ireland?</span>
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <ul className="mb-6 space-y-3 lg:space-y-2">
              {[
                'High-Quality Education',
                'Research Opportunities',
                'Robust Economy',
                'Cultural and Historical Richness',
                'Support for International Students',
                'Strategic Location',
                'English-Speaking Country',
                'World class education system',
                'Post-study work opportunities',
              ].map(item => (
                <li
                  key={item}
                  className="flex items-center gap-2"
                >
                  <img
                    src="icons/checkbox-tick.svg"
                    alt=""
                    className="size-6"
                  />
                  <span className="text-iii-black font-inter text-[18px] font-semibold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 space-y-6 lg:order-2">
            <p className="text-iii-secondary text-left text-[15.5px] font-medium leading-relaxed">
              Consistently excelling on global scales, Ireland is
              ranked second on the 2024 Global Peace Index,
              showcasing its commitment to peace and security.
              With a Human Development Index score of 0.950,
              Ireland stands out as one of the top countries for
              quality of life, education, and economic stability.
              This makes Ireland an increasingly popular choice
              among Indian students looking for a blend of
              academic excellence and a vibrant culture that
              nurtures entrepreneurial spirit and professional
              growth. Beyond the classroom, the lessons learned
              here are enhanced by Ireland's rich cultural
              tapestry and welcoming community, making your
              educational investment truly invaluable
            </p>
            <div className="lg:hidden">
              <Counter stats={stats} />
            </div>
            <div className="mt-6 hidden flex-wrap gap-4 lg:flex">
              <Button
                variant="outline"
                className="h-10 bg-white px-5 text-teal-700 "
              >
                Contact us
              </Button>
              <ApplyDialogForm>
                <Button className="flex h-10 items-center bg-teal-700 px-5 hover:bg-teal-800">
                  Download Brochure
                  <img
                    src="/icons/plane-icon.svg"
                    alt=""
                    className=" size-5"
                  />
                </Button>
              </ApplyDialogForm>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 lg:hidden">
          <Button
            variant="outline"
            className="bg-white text-teal-700"
          >
            Contact us
          </Button>
          <ApplyDialogForm>
            <Button className="flex h-12 items-center bg-teal-700 px-6 hover:bg-teal-800">
              Download Brochure
              <img
                src="/icons/plane-icon.svg"
                alt=""
                className="ml-2 size-4"
              />
            </Button>
          </ApplyDialogForm>
        </div>
      </div>
      <div className="mx-auto mt-12 hidden lg:block">
        <Counter stats={stats} />
      </div>
    </div>
  );
}
