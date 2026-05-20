"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

import { cx } from "@/lib";
import Drawer from "@/ui/components/drawer";

interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
}

const navbarItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Users", path: "/users" },
];

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav className={cx("bg-gray-800 p-4 text-sm", className)}>
      <ul className="hidden md:flex space-x-4">
        {navbarItems.map((item) => (
          <li key={item.label}>
            <Link href={item.path} className="text-white hover:text-gray-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Menu className="text-white" onClick={handleToggle} />
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} handleisOpen={handleToggle} />
    </nav>
  );
}

function MobileMenu({
  isOpen,
  handleisOpen,
}: {
  isOpen: boolean;
  handleisOpen: () => void;
}) {
  return (
    <div className="md:hidden">
      <Drawer
        className="w-screen h-screen justify-center"
        isOpen={isOpen}
        onClose={handleisOpen}
        showButtons={false}
      >
        <ul className="flex flex-col gap-8 justify-center items-center uppercase">
          {navbarItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="text-gray-100 hover:text-gray-300 border-b border-transparent hover:border-gray-300"
              onClick={handleisOpen}
            >
              <li>
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </Drawer>
    </div>
  );
}
