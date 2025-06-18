'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children, displayState }: { children: ReactNode }) => {
  const pathname = usePathname();
  
  return (
    <div key={pathname} className={"page-transition" + }>
      {children}
    </div>
  );
};

export default PageTransition;