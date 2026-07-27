import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const CODE_LINES = [
  "const juan:Developer = {",
  "  cokeZeroIntake: 'Dangerously high',",
  "  debugStrategy: 'console.log everything',",
  "  favoriteBug: 'Off-by-one, of course',",
  "  quoteOfTheDay: 'For Example, Nothing',",
  "};",
];

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [typed, setTyped] = useState<string[]>([]);

  // Vanta network background
  useEffect(() => {
    let isMounted = true;

    const loadVanta = async () => {
      (window as any).THREE = THREE;
      const module = await import("vanta/dist/vanta.net.min.js");
      const NET = (module as any).default?.default ?? (module as any).default;

      if (typeof NET !== "function") {
        console.error("Vanta NET failed to load as a function:", module);
        return;
      }
      const isMobile = window.innerWidth < 768;
      if (isMounted && vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: 0xd4af37, // signal gold — lines match the accent
          backgroundColor: 0x0a0e17, // ink
          points: isMobile ? 4 : 8,
          maxDistance: isMobile ? 15 : 23,
          spacing: isMobile ? 25 : 18,
        });
      }
    };

    loadVanta();

    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  // Typewriter effect for the terminal card
  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLines: string[] = [];
    let cancelled = false;

    const tick = () => {
      if (cancelled || lineIndex >= CODE_LINES.length) return;
      const line = CODE_LINES[lineIndex];
      charIndex++;
      currentLines = [
        ...currentLines.slice(0, lineIndex),
        line.slice(0, charIndex),
      ];
      setTyped(currentLines);

      if (charIndex >= line.length) {
        lineIndex++;
        charIndex = 0;
        setTimeout(tick, 220);
      } else {
        setTimeout(tick, 18);
      }
    };

    const start = setTimeout(tick, 600);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,14,23,0.92) 0%, rgba(10,14,23,0.75) 35%, rgba(10,14,23,0.15) 65%, transparent 100%)",
        }}
      />
      <div className="container relative z-10 mx-auto my-10 grid min-h-screen max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        {/* Left: identity */}
        <div className="flex flex-col items-start justify-center gap-5 py-24 lg:py-0 ">
          <span className="font-mono text-sm tracking-wide text-[#5B6472]">
            <span className="text-[#4ADE80]">●</span> $ whoami
          </span>

          <h1 className="text-5xl font-bold leading-[1.05] text-[#EDEAE2] sm:text-6xl lg:text-7xl">
            Juan Baldarrago
          </h1>

          <h2 className="text-xl text-[#D4AF37] sm:text-2xl">
            Aspiring Developer
          </h2>

          <p className="max-w-md text-base leading-relaxed text-white sm:text-lg">
            I build things for the web — currently learning in public and
            looking for my first team to grow with.
          </p>

          <div className=" flex flex-wrap gap-4">
            <a
              href='/Resume6:26.pdf'
              className="rounded-md bg-[#D4AF37] px-6 py-3 font-medium text-[#0A0E17] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7FFF]"
            >
              View my resume
            </a>
            <a
              href="#contact"
              className="rounded-md border border-[#D4AF37] px-6 py-3 font-medium text-[#EDEAE2] transition-colors hover:border-[#EDEAE2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EDEAE2]"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: signature terminal card */}
        <div className="flex items-center justify-center ">
          <div className="lg:w-full sm:w-fit max-w-md rounded-lg border border-[#5B6472]/30 bg-[#0A0E17]/70 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-[#5B6472]/30 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
              <span className="h-3 w-3 rounded-full bg-[#eab308]" />
              <span className="h-3 w-3 rounded-full bg-[#4ADE80]" />
              <span className="ml-2 font-mono text-xs text-[#5B6472]">
                juan.ts
              </span>
            </div>
            <pre className="min-h-[140px] px-5 py-5 font-mono lg:text-sm text-xs leading-relaxed text-[#EDEAE2]">
              {typed.map((line, i) => (
                <div key={i}>
                  {line}
                  {i === typed.length - 1 && (
                    <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-[#d4af37] align-middle" />
                  )}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
