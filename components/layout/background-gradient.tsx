import type { ReactNode } from 'react';

type BackgroundGradientProps = {
  children: ReactNode;
};

export default function BackgroundGradient({ children }: BackgroundGradientProps) {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(125% 125% at 50% 10%, #ffffff 35%, #6594B1 100%)',
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

