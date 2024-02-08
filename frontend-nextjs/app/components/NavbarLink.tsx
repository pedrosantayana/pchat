import Link from "next/link";

export default function NavbarLink({to, children} : {to: string, children: string} ) {
  return(
    <div className="text-black dark:text-white hover:text-blue-400">
      <Link href={to}>
        {children}
      </Link>
    </div>
  )
}
