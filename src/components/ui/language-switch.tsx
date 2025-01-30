'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { Languages } from 'lucide-react';
import { setLanguage } from '@/actions/setLanguageCookie';


const languages = [
  { label: 'English', locale: 'en' },
  { label: 'Malayalam', locale: 'ml' },
] as const;

export function LanguageSwitch() {
  const router = useRouter();

  const handleLanguageChange = async (locale: string) => {
    await setLanguage(locale);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(({ label, locale }) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}