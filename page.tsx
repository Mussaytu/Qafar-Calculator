import { Calculator } from '@/components/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-200">
      <h1 className="text-3xl font-bold mb-8">Qafar Calculator</h1>
      <Calculator />
    </main>
  );
} 