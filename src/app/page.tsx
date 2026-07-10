import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Achievements />
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800/50 mt-12 text-sm font-sans">
        <p>© {new Date().getFullYear()} Fahri Azzam Mandriva. All rights reserved.</p>
        <p className="mt-2 text-slate-600">Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}
