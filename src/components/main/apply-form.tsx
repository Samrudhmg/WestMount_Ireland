'use client';

import type { CreateLeadDTO } from '@/lib/enquire.form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createLead } from '@/lib/enquire.form';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const COURSE_OPTIONS = [
  { value: 'ACCA', label: 'ACCA' },
  { value: 'CA', label: 'CA' },
  { value: 'CMA IND', label: 'CMA IND' },
  { value: 'CMA US', label: 'CMA US' },
  { value: 'CS', label: 'CS' },
  { value: 'Commerce Entrance', label: 'Commerce Entrance' },
] as const;

const QUALIFICATION_OPTIONS = [
  { value: 'Plus One', label: 'Plus One' },
  { value: 'Plus Two', label: 'Plus Two' },
  { value: 'UG', label: 'UG' },
  { value: 'PG', label: 'PG' },
  { value: 'Commerce Professional Student', label: 'Commerce Professional Student' },
] as const;

export function ApplyForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const leadSource = searchParams.get('lead');
  const leadSubSource = searchParams.get('leadSubSource');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const [errors, setErrors] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const validateForm = (values: CreateLeadDTO) => {
    const validationErrors = { ...errors };

    if (values.name.length < 3) {
      validationErrors.name = 'Name must be at least 3 characters long';
    }

    // eslint-disable-next-line regexp/no-unused-capturing-group
    const phonePattern = /^(\+91\d{10}|\d{10})$/;
    if (!phonePattern.test(values.phone.replaceAll(/[-\s]/g, ''))) {
      validationErrors.phoneNumber = 'Please enter a valid 10-digit Indian phone number (with or without +91)';
    }

    const emailPattern = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;
    if (!emailPattern.test(values.email)) {
      validationErrors.email = 'Invalid email address';
    }

    return validationErrors;
  };

  // eslint-disable-next-line unicorn/prevent-abbreviations
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    const values: CreateLeadDTO = {
      name: formData.get('name') as string,
      phone: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      interestedCourse: formData.get('interestedCourse') as CreateLeadDTO['interestedCourse'],
      latestQualification: formData.get('latestQualification') as CreateLeadDTO['latestQualification'],
      leadSource: leadSource ? (leadSource as CreateLeadDTO['leadSource']) : 'Google Ad',
      leadSubSource: leadSubSource ? (leadSubSource as CreateLeadDTO['leadSubSource']) : 'Search Ad',
    };

    setErrors({ name: '', phoneNumber: '', email: '' });

    const validationErrors = validateForm(values);

    if (Object.values(validationErrors).some(error => error !== '')) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await createLead(values, pathname);
      router.push('/thankyou');
    } catch (error) {
      console.error('Lead creation failed', error);
      toast.error('Lead creation failed');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="block px-5 py-4 md:px-2">
        <h2 className="mb-5 text-xl font-semibold">Enter your details</h2>
        <form onSubmit={handleSubmit} className="mb-5 space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              className="h-12 shadow-none"
              placeholder="Enter your name"
              required
              aria-label="Name"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <Input
              type="tel"
              name="phoneNumber"
              className="h-12 shadow-none"
              placeholder="Enter your phone number"
              required
              aria-label="Phone Number"
            />
            {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
          </div>
          <div>
            <Input
              type="email"
              name="email"
              className="h-12 shadow-none"
              placeholder="Enter your email"
              required
              aria-label="Email"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <Select name="interestedCourse" required>
              <SelectTrigger className="h-12 shadow-none">
                <SelectValue placeholder="Select your preferred course" />
              </SelectTrigger>
              <SelectContent>
                {COURSE_OPTIONS.map(course => (
                  <SelectItem key={course.value} value={course.value}>
                    {course.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select name="latestQualification" required>
              <SelectTrigger className="h-12 shadow-none">
                <SelectValue placeholder="Select your qualification" />
              </SelectTrigger>
              <SelectContent>
                {QUALIFICATION_OPTIONS.map(qual => (
                  <SelectItem key={qual.value} value={qual.value}>
                    {qual.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-gray-500">
            By Submitting this form, you agree to our
            {' '}
            <Link href="https://www.tripleica.com/terms-and-conditions" target="_blank" className="text-iii-primary hover:underline">
              T&C
            </Link>
            {' '}
            and
            {' '}
            <Link href="https://www.tripleica.com/privacy-policy" target="_blank" className="text-iii-primary hover:underline">
              Privacy Policy
            </Link>
          </div>
          <Button type="submit" className="w-full rounded-xl bg-iii-primary py-5 hover:bg-iii-primary/90" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export function ApplyBottomForm() {
  const searchParams = useSearchParams();
  const leadSource = searchParams.get('lead');
  const leadSubSource = searchParams.get('leadSubSource');
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const pathname = usePathname();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interestedCourse, setInterestedCourse] = useState<CreateLeadDTO['interestedCourse']>('CA');
  //   const [latestQualification, setLatestQualification] = useState<CreateLeadDTO['latestQualification']>('Plus One');

  // eslint-disable-next-line unicorn/prevent-abbreviations
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    const values: CreateLeadDTO = {
      name: formData.get('name') as string,
      phone: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      interestedCourse: formData.get('interestedCourse') as CreateLeadDTO['interestedCourse'],
      latestQualification: formData.get('latestQualification') as CreateLeadDTO['latestQualification'],
      leadSource: leadSource ? (leadSource as CreateLeadDTO['leadSource']) : 'Google Ad',
      leadSubSource: leadSubSource ? (leadSubSource as CreateLeadDTO['leadSubSource']) : 'Search Ad',
    };
    try {
      const isResponse = await createLead(values, pathname);
      if (isResponse) {
        setIsSubmitting(false);
        setName('');
        setPhone('');
        setEmail('');
        setInterestedCourse('CA');
        // setLatestQualification('Plus One');
        toast.success('Thank you! Our Sales Executive will be connecting with you soon :)');
        router.push('/thankyou');
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Lead creation failed', error);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return;
  }
  return (
    <div className="w-full">
      {/* Desktop view shows horizontal compact form */}
      <div className="hidden bg-iii-black py-7 md:block">
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-center gap-2">
          <Input
            type="text"
            placeholder="Enter your Name"
            required
            name="name"
            className="w-[200px] bg-white"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <Input
            type="tel"
            placeholder="Enter your phone"
            required
            name="phoneNumber"
            className="w-[200px] bg-white"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
          <Input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="w-[200px] bg-white"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Select
            name="interestedCourse"
            required
            value={interestedCourse}
            onValueChange={value => setInterestedCourse(value as CreateLeadDTO['interestedCourse'])}
          >
            <SelectTrigger className="w-[200px] bg-white">
              <SelectValue placeholder="Select your course" />
            </SelectTrigger>
            <SelectContent>
              {COURSE_OPTIONS.map(course => (
                <SelectItem key={course.value} value={course.value}>
                  {course.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* <Select
            name="latestQualification"
            required
            value={latestQualification}
            onValueChange={value => setLatestQualification(value as CreateLeadDTO['latestQualification'])}
          >
            <SelectTrigger className="w-[200px] bg-white">
              <SelectValue placeholder="Select your qualification" />
            </SelectTrigger>
            <SelectContent>
              {QUALIFICATION_OPTIONS.map(qual => (
                <SelectItem key={qual.value} value={qual.value}>
                  {qual.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}
          <Button type="submit" className="bg-iii-primary hover:bg-iii-primary/90" disabled={isSubmitting}>
            {isSubmitting ? 'Applying...' : 'Apply Now'}
          </Button>
        </form>
      </div>
    </div>
  );
}
