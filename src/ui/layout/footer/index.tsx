'use-client';

import { cx } from "@/lib";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cx(
        "fixed inset-x-0 bottom-0 z-10 w-full h-16 flex items-center justify-center bg-gray-600 text-white",
        className,
      )}
    >
      <p className="text-sm">
        &copy; 2026 Fernando Barrios. All rights reserved.
      </p>
    </footer>
  );
}
