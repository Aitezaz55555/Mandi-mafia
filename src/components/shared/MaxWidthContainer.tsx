import { cn } from "@/lib/utils";

interface MaxWidthContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MaxWidthContainer({
  children,
  className,
  ...props
}: MaxWidthContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto px-space-4 md:px-space-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
