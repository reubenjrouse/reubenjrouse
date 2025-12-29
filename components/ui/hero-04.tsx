/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownRight } from "lucide-react"; 
import { Button } from "@/components/ui/button";
  
export function HeroSection04() {
  return (
    <section id="about" className="min-h-screen pt-16 overflow-hidden relative py-20">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        <div className="relative ">
          <h1
            className={`z-20 text-primary relative font-bold text-center tracking-[-6px] text-6xl md:text-8xl xl:tracking-[-1rem] md:tracking-[-12px] xl:text-[8.5rem]`}
          >
            REUBEN
            <br />
            ROUSE
          </h1>
          <p className="text-4xl hidden xl:block absolute -bottom-12 right-5 font-light tracking-[0.25em] z-30">
            ML Engineer
          </p>
          <p className="text-4xl absolute xl:hidden -bottom-12 left-32 font-light tracking-[0.25em] z-30 whitespace-nowrap">
            ML Engineer
          </p>
        </div>

        <div className="grid relative">
          <div className="space-y-8 pt-20 flex gap-6 justify-center">
            <div className="flex gap-6 bg-secondary w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-semibold md:text-2xl lg:text-3xl">
              <div className="font-semibold text-xl font-mono">
                <div>/ MACHINE LEARNING</div>
                <div>/ COMPUTER VISION</div>
                <div>/ AGENTIC AI</div>
              </div>
              <div className="absolute hidden  md:flex left-1/2 -top-10 w-fit overflow-hidden bg-secondary">
                <img
                  src="/images/pfp.jpg"
                  alt="Portrait"
                  className="h-100 w-full object-contain"
                />
                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-[0.2em]">
                  BASED IN MUMBAI
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-secondary">
            <img
              src="/images/pfp.jpg"
              alt="Portrait"
              className="h-100 w-full object-contain"
            />
            <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-[0.2em]">
              BASED IN MUMBAI
            </div>
          </div>
        </div>

        <div className="mt-32">
          <p className="mx-auto max-w-2xl font-mono text-center text-sm md:text-base text-muted-foreground">
            Experience with LLM fine tuning, agentic AI and computer vision projects.
            <br />
            Actively exploring ML research and looking to contribute to meaningful projects.
          </p>
        </div>
        
      </div>
      <div
        className="absolute block dark:hidden inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div
        className="absolute hidden dark:block inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </section>
  );
}