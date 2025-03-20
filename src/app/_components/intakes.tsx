import { ApplyDialogForm } from '@/components/main/apply-dialog-form';

import { Button } from '@/components/ui/button';

export default function IntakesPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-semibold">
          Intakes to
          {' '}
          <span className="text-[#006B5E]">Ireland</span>
        </h1>
        <p className="text-gray-600">
          The journey of Westmount&apos;s study abroad
        </p>
      </div>

      <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 bg-[#00332D] p-6 text-white">
          <div className="border-r border-[#004D45] font-medium">
            Intake
          </div>
          <div className="font-medium">Deadline</div>
        </div>

        <div className="divide-y divide-gray-200">
          <div className="grid grid-cols-2 text-left">
            <div className="border-r border-gray-200 p-6">
              <div className="font-semibold">Semester 1</div>
              <div className="text-gray-600">
                (September Intake)
              </div>
            </div>
            <div className="self-center p-6">February - July</div>
          </div>

          <div className="grid grid-cols-2 text-left">
            <div className="border-r border-gray-200 p-6">
              <div className="font-semibold">Semester 2</div>
              <div className="text-gray-600">
                (January Intake)
              </div>
            </div>
            <div className="self-center p-6">
              September - October
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          className="h-12 bg-white px-5 text-teal-700 "
        >
          Contact us
        </Button>
        <ApplyDialogForm>
          <Button
            className="flex h-12 items-center"
            variant="default"
          >
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
  );
}
