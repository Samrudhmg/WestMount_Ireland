'use client';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:justify-around">
        {/* Logo */}
        <button
          onClick={() => handleScroll('hero')}
          className="flex items-center space-x-2"
        >
          <img
            src="/images/West-Mount-Logo.png"
            alt="West Mount Logo"
            className="h-14 object-contain lg:h-12"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          <button
            onClick={() => handleScroll('hero')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll('about')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
        </nav>

        {/* Get Started Button (Desktop) */}
        <div className="hidden md:block">
          <button className="rounded-md bg-[#006D77] px-4 py-2 text-white hover:bg-[#006D77]/90">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden"
        >
          <Menu className="size-7" />
          <span className="sr-only">Toggle Menu</span>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="animate-slide-in absolute inset-x-0 top-16 border-b bg-white md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => handleScroll('hero')}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Home
              </button>
              <button
                onClick={() => handleScroll('about')}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </button>
              <button className="w-full rounded-md bg-[#006D77] px-4 py-2 text-white hover:bg-[#006D77]/90">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
