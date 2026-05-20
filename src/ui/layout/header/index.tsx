'use client';

import Navbar from "./components/navbar";

export default function Header() {
  return (
    <header className="fixed inset-x-0 w-full flex justify-between items-center bg-gray-800 text-white py-2 px-8 z-10">
      <h1 className="flex-none md:text-xl font-bold">Next.js demo</h1>
      <Navbar />
    </header>
  );
}
