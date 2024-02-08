import Link from "next/link";
import NavbarLink from "./NavbarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return(
    <nav className="z-10">
      <div className="flex flex-row justify-between bg-white px-8 py-4 shadow-2xl">
        <div>
        <Link href="/" className="text-3xl font-semibold font-mono select-none">
          <span className="text-blue-400"><FontAwesomeIcon icon={['fas', 'comments']} /></span>
          PChat
        </Link>
        </div>
        <div className="flex flex-row gap-x-8 text-xl font-medium select-none">
          <NavbarLink href="/" name="Home" />
          <NavbarLink href="/chat" name="Chat" />
        </div>
      </div>
    </nav>
  )
}