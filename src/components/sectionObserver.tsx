'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSection } from '@/src/stores/navSlice';

interface sectionObserverType {
    id: string,
    children: React.ReactNode,
    classname?: string,
    activeClassName?: string
}

export default function SectionObserver({ id, children, classname = '', activeClassName = '' }: sectionObserverType) {
  const dispatch = useDispatch();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);
    
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setSection(id));
          setIsActive(true);
        } else {
        //   setIsActive(false);
        }
      },
      { 
        rootMargin: '-50% 0px -50% 0px' // Triggers precisely as elements scroll into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [id, dispatch]);
  const combinedClassName = `${classname} ${isActive && activeClassName}`.trim();

  return (
    <section id={id} ref={sectionRef} className={combinedClassName}>
      {children}
    </section>
  );
}