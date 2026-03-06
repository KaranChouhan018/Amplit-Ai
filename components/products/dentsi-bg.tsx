"use client";

import Image from "next/image";

export function DentsiBg() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative mt-12">

        {/* Container */}
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-background/60 backdrop-blur-xl p-2 shadow-2xl shadow-black/10">

          {/* Image Wrapper */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl">

            <Image
              src="/Dashboard-bg.png"
              alt="Dentsi dashboard preview"
              fill
              priority
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 90vw,
                     1200px"
              className="object-cover"
            />

            {/* Bottom Gradient Fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background via-background/70 to-transparent" />

          </div>
        </div>


      </div>
    </div>
  );
}

export default DentsiBg;
