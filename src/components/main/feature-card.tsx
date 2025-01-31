import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: Readonly<FeatureCardProps>) {
  return (
    <Card className="h-full rounded-3xl shadow-none">
      <CardContent className="pt-6">
        <div className="w-fit rounded-full">
          <div className="flex items-center justify-center rounded-full text-white">{icon}</div>
        </div>
        <h3 className="mb-2 mt-4 text-2xl font-medium">{title}</h3>
        <p className="leading-relaxed text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
