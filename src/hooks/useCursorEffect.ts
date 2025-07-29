import { useEffect } from 'react';

export const useCursorEffect = () => {
  useEffect(() => {
    // Create custom cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const handleMouseDown = () => {
      cursor.classList.add('click');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        cursor.classList.add('hover');
      } else {
        cursor.classList.remove('hover');
      }
    };

    // Smooth cursor animation
    const animateCursor = () => {
      const ease = 0.15;
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(animateCursor);
    };

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    // Start animation
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      
      document.body.style.cursor = 'auto';
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);
};