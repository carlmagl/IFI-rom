import { useRouter } from "next/router";
import { navLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";

export const Nav = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  console.log(currentPath);
  return (
    <nav
      className={`flex justify-between w-full h-[64px] bg-white text-blue-default px-2 sm:px-10 border-b-2 border-gray-200 items-center`}
    >
      <Link href={"/"} className="flex items-center">
        <h2 className="text-xl font-semibold hover:text-red">IFI-Rom</h2>
      </Link>
      <div className="flex items-center gap-2 sm:gap-5">
        {navLinks.map((navLink) => (
          <a
            href={navLink.href}
            className={`text-sm font-medium hover:text-red hover:underline underline-offset-2 ${
              currentPath === `/${navLink.label.toLocaleLowerCase()}`
                ? "text-red underline"
                : ""
            }`}
            key={navLink.href}
          >
            {navLink.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
