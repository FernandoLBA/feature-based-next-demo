import { cx } from "@/lib";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cx("max-w-6xl mx-auto p-8", className)}>{children}</div>
  );
}
