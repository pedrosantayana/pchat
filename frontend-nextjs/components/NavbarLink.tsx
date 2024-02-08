import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  name: string;
}

export default function NavbarLink({href, name}: NavbarLinkProps) {
  return(
    <div className="text-black dark:text-white hover:text-blue-400">
      <Link href={href}>
        {name}
      </Link>
    </div>
  )
}
