import type { Metadata } from 'next';
import Footer from '@/components/main/footer';
import NavBar from '@/components/main/navbar';

export const metadata: Metadata = {
  title: 'Thank You | West-Mount',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function ThankyouLayout({ children }: Readonly<LayoutProps>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
