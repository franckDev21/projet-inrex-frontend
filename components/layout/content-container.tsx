import { cn } from "@/lib/utils";

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 max-w-7xl", className)}>
      {children}
    </div>
  );
}
