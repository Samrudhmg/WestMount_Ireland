import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import ReactMarkdown from 'react-markdown';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export function Faq({ faqs }: Readonly<FAQProps>) {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="mx-auto max-w-5xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-xl">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <ReactMarkdown className="prose max-w-none">{faq.answer}</ReactMarkdown>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
