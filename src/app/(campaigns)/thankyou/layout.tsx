import type { Metadata } from 'next';
import Footer from '@/components/main/footer';
import NavBar from '@/components/main/navbar';

export const metadata: Metadata = {
  title: 'Thank You | Triple ICA',
  description: 'Thank you for your interest in Triple ICA services',
};

interface LayoutProps {
  children: React.ReactNode;
}

const NavItems = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: 'https://www.tripleica.com/' },
];

export default function ThankyouLayout({ children }: Readonly<LayoutProps>) {
  return (
    <>
      <NavBar navItems={NavItems} />
      {children}
      <Footer />
    </>
  );
}
