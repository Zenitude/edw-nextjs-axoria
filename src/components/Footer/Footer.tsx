import Link from "next/link";


export default function Footer() {
  return (
    <footer className="min-h-[70px] w-full bg-white border-t border-t-zinc-300">
      <p className="w-full min-h-[70px] flex justify-center items-center">
        <Link href="#">Axoria - All rights reserved</Link>
      </p>
    </footer>
  )
}
