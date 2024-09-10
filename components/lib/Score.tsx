import { cn } from "@/lib/utils";

export default function Score({ score, className }: { score?: number, className: string }) {
  if (!score) { return null; }

  return (
    <div className={cn('flex', className)}>
      {score}
    </div>
  );
};
