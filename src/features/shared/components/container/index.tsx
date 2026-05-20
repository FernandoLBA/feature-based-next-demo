import { cx } from "@/lib";

interface Containerprops {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: Containerprops) {
  return (
    <div className={cx('mx-auto h-svh border border-green-500 px-6 md:px-8', className)}>
      {children}
    </div>
  );
}