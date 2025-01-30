import { cn } from '@/lib/utils';

interface CTAButton {
  text: string;
  link: string;
  icon: string;
  className: string;
}

interface QuestionsProps {
  title: string;
  subtitle: string;
  ctaButtons: CTAButton[];
}

export default function Questions({ title, subtitle, ctaButtons }: Readonly<QuestionsProps>) {
  return (
    <div className="bg-iii-primary py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h4 className="mb-4 text-4xl font-bold">{title}</h4>
        <h6 className="mb-8 text-xl">{subtitle}</h6>
        <div className="space-x-4">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className={cn(
                'inline-flex items-center rounded-lg px-6 py-3 text-white',
                button.className,
              )}
            >
              {button.text}
              <img src={button.icon || '/placeholder.svg'} alt={button.text} className="ml-2 size-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
