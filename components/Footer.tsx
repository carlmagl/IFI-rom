import Image from "next/image";
import { GITHUB_IFI_ROM } from "../constants";

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between sm:items-center w-full p-8 h-[500px] sm:h-[364px] bg-blue-light text-blue-dark">
      <div className="">
        <dl className="list-none">
          <li>Gaustadalleen 23 B</li>
          <li>0373 Oslo</li>
        </dl>
        <p className="flex gap-2 items-center">
          Har du forslag, funnet feil, ris eller ros:
          <a href={GITHUB_IFI_ROM} target="_blank">
            <Image
              src="/github.svg"
              alt="Github logo"
              className="color-blue-dark"
              width={20}
              height={20}
              priority
            />
          </a>
        </p>
      </div>
      <div className="">
        <Image
          src="/ojd.svg"
          alt="SVG of ole johan dahls hus"
          className=""
          width={400}
          height={200}
          priority
        />
      </div>
    </footer>
  );
};
