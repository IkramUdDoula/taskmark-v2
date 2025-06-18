import { Toaster } from 'sonner';
import { PlusIcon, SearchIcon, TrashIcon, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { PlateEditor } from '@/components/editor/plate-editor';

export default function Page() {
  return (
    <div className="h-screen w-full">
      <PlateEditor />

      <Toaster />

      {/* Bottom Menu Bar */}
      <div className="fixed left-0 right-0 bottom-0 z-50 flex justify-center pointer-events-none">
        <div className="inline-flex items-center justify-between m-4 border border-border rounded-md shadow-sm p-1 bg-background w-auto pointer-events-auto min-w-[320px]">
          <div className="font-bold text-lg px-2 select-none">&lt;taskmark&gt;</div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" aria-label="Add new note">
              <PlusIcon className="size-5" />
            </Button>
            <Button size="icon" variant="ghost" aria-label="Search notes">
              <SearchIcon className="size-5" />
            </Button>
            <Button size="icon" variant="ghost" aria-label="Recycle bin">
              <TrashIcon className="size-5" />
            </Button>
            <Button size="icon" variant="ghost" aria-label="Settings">
              <Settings className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
