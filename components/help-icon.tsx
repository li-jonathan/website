import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VALID_COMMANDS } from "@/lib/commands";
import { Info } from "lucide-react";

export const HelpIcon = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Info className="h-5 w-5 stroke-slate-50 hover:cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Commands</DialogTitle>
          <DialogDescription className="flex flex-wrap gap-2">
            {VALID_COMMANDS.map((command) => (
              <div key={command} className="font-mono text-gray-600 font-bold py-1 px-2 bg-slate-200 rounded-md">
                {command}
              </div>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
