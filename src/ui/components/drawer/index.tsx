import { cx } from "@/lib";
import Button from "../button";
import { Container } from "@/features/shared";

interface DrawerProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  isOpen?: boolean;
  showButtons?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export default function Drawer({
  children,
  title,
  className,
  isOpen,
  onClose,
  showButtons = true,
}: DrawerProps) {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose?.();
  };

  return (
    <Container className={cx("absolute right-0 w-1/3 flex flex-col justify-between p-8 top-0 bg-neutral-600", className)}>
      {title && <h2 className="text-white text-2xl font-semibold">{title}</h2>}
      {children}

      {(onClose && showButtons) && (
        <div className="flex justify-end mt-4">
          <Button onClick={handleClose}>Cancelar</Button>
        </div>
      )}
    </Container>
  );
}
