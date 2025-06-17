'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;