"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import useDimension from "@/lib/useDimension";

export default function Navbar({custom}: {custom: string;}) {
  const dimension = useDimension();
  const refDropdown = useRef<HTMLDivElement>(null);

  const openDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const dropdown = refDropdown.current;
    if(dropdown?.classList.contains('hidden')) {
      dropdown?.classList.replace('hidden', 'flex');
    } else if (dropdown?.classList.contains('flex')) {
      dropdown?.classList.replace('flex', 'hidden');
    }
  }

  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <nav className={custom}>
      {
        dimension >= 350
        && (
          <>
            <Link href="/">AXORIA</Link>
            <Link href="/categories" className="me-auto">Categories</Link>
            <Link href="/article/create" title={"Add an article"}>
              Add an article
            </Link>
          </>
        )
      }
      
      <button onClick={(e) => openDropdown(e)} className={`inline-block w-[30px] h-[30px] ${dimension < 350 && "ml-auto"}`}>
        <Image 
          src={"/assets/icons/user.svg"}
          alt="account"
          width={30}
          height={30}
        />
      </button>
      <div ref={refDropdown} className="hidden absolute top-[40px] right-4 bg-white border border-zinc-300 flex-col">
        {
          dimension < 350
          && (
            <>
              <Link href="/" className="border-b px-2 text-center">Home</Link>
              <Link href="/categories" className="border-b px-2 text-center">Categories</Link>
              <Link href="/article/create" title={"Add an article"} className="border-b px-2">
                <span>Add an article</span>
              </Link>
            </>
          )
        }
        <Link href="/sign-in" className="border-b inline-block px-2 text-center w-full">Dashboard</Link>
        <button type="button" onClick={(e) => logout(e)} className="px-2 text-center w-full">Sign Out</button>
      </div>
    </nav>
  )
}
