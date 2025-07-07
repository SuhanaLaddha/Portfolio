import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: {
      HALO: (options: any) => any;
    };
  }
}

export const useVantaEffect = () => {
  const vantaRef = useRef<any>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaRef.current && elementRef.current && window.VANTA) {
      vantaRef.current = window.VANTA.HALO({
        el: elementRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        backgroundColor: 0x131a43,
        baseColor: 0x1a59ff,
        size: 1.0,
        amplitudeFactor: 1.0,
        xOffset: 0.0,
        yOffset: 0.0
      });
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return elementRef;
};