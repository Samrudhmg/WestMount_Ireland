import { Button } from '@/components/ui/button';
import { ApplyDialogForm } from './apply-dialog-form';
import UniversityCard from './university-card';

const universitiesList = [
  {
    name: 'Trinity College Dublin',
    location: 'Dublin, Ireland',
    imageUrl: '/images/trinity.png',
    logoUrl: '/images/Ellipse-1.jpg',
    worldRanking: '87',
    totalStudents: '1,000+',
  },
  {
    name: 'University College Dublin',
    location: 'Dublin, Ireland',
    imageUrl: '/images/Dublin.png',
    logoUrl: '/images/Ellipse-2.jpg',
    worldRanking: '126',
    totalStudents: '1,000+',
  },
  {
    name: 'University College Cork',
    location: 'Cork, Ireland',
    imageUrl: '/images/Cork.png',
    logoUrl: '/images/Ellipse-3.jpg',
    worldRanking: '273',
    totalStudents: '1,000+',
  },
  {
    name: 'University of Galway',
    location: 'Galway, Ireland',
    imageUrl: '/images/Galway.png',
    logoUrl: '/images/Ellipse-4.jpg',
    worldRanking: '273',
    totalStudents: '1,000+',
  },
  {
    name: 'Dublin City University',
    location: 'Dublin, Ireland',
    imageUrl: '/images/Dublin-city-uni.png',
    logoUrl: '/images/Ellipse-5.jpg',
    worldRanking: '421',
    totalStudents: '1,000+',
  },
  {
    name: 'University of Limerick',
    location: 'Limerick, Ireland',
    imageUrl: '/images/Limerick.png',
    logoUrl: '/images/Ellipse-6.jpg',
    worldRanking: '421',
    totalStudents: '1,000+',
  },
  {
    name: 'Maynooth University',
    location: 'Cork, Ireland',
    imageUrl: '/images/Maynoth.png',
    logoUrl: '/images/Ellipse-7.jpg',
    worldRanking: '801-850',
    totalStudents: '1,000+',
  },
  {
    name: 'Technological University Dublin',
    location: 'Dublin, Ireland',
    imageUrl: '/images/Tech-uni-Dublin.png',
    logoUrl: '/images/Ellipse-8.jpg',
    worldRanking: '273',
    totalStudents: '1,000+',
  },
];

export default function Universities() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-left text-4xl font-bold md:text-center">
          Top universities in
          {' '}
          <span className="text-teal-600 ">Ireland</span>
        </h1>
        <p className="text-left text-gray-600 md:text-center">
          The journey of Westmount&apos;s study abroad
        </p>
      </div>

      {/* University Cards - Laptop & Medium Screen Responsive */}
      <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3  ">
        {universitiesList.slice(0, 6).map((university, index) => (
          <div key={university.name || index} className="w-full">
            <UniversityCard key={university.name} {...university} />
          </div>
        ))}

        {/* Centering last two cards */}
        <div className="col-span-2 flex justify-center gap-8 lg:col-span-3">
          {universitiesList.slice(6).map((university, index) => (
            <div
              key={university.name || index}
              className="w-full max-w-[380px]"
            >
              <UniversityCard
                key={university.name}
                {...university}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scrollable View */}
      <div className="flex gap-4 overflow-x-auto pb-4 md:hidden lg:hidden">
        {universitiesList.map(university => (
          <div
            key={university.name}
            className="min-w-[80%] sm:min-w-[60%]"
          >
            <UniversityCard {...university} />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-12 flex justify-center gap-4">
        <Button
          variant="outline"
          className="h-12 bg-white px-5 text-teal-700 "
        >
          Contact Us
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
