import React from 'react';

export default function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 h-screen w-screen opacity-[0.04]"
      style={{
        backgroundImage: `url('/assets/textures/noise-overlay.png')`,
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
