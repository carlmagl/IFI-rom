import { useRouter } from "next/router";
import { navLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";
import OJD from "./ojd.svg";

export const Nav = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav
      className={`flex justify-between w-full h-[64px] bg-blue-dark text-white px-10`}
    >
      <Link href={"/"} className="flex items-center">
        <Image
          src={OJD}
          alt="Image of ole johan dahls hus"
          height={20}
          width={20}
        />
      </Link>
      <div className="flex items-center gap-2">
        {navLinks.map((navLink) => (
          <a
            href={navLink.href}
            className={`text-sm font-medium hover:text-gray-900 hover:underline underline-offset-2 ${
              currentPath === navLink.label.toLocaleLowerCase()
                ? "underline"
                : ""
            }}`}
            key={navLink.href}
          >
            {navLink.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
