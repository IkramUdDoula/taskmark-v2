'use client';

import { cn } from '@/lib/utils';

import { Toolbar } from './toolbar';

export function FixedToolbar(props: React.ComponentProps<typeof Toolbar>) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full">
      <Toolbar
        {...props}
        className={cn(
          'sticky top-0 left-0 z-50 scrollbar-hide overflow-x-auto rounded-t-lg p-1',
          props.className
        )}
      />
    </div>
  );
}
