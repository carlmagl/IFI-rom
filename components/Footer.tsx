import Image from "next/image";
import { GITHUB_IFI_ROM } from "../constants";
import GithubLogo from "./SVGComponents/github";
import Ojd from "./SVGComponents/ojd";
import Ojd2 from "./SVGComponents/ojdCM";

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between sm:items-center w-full p-8 h-[500px] sm:h-[500px] bg-gray-200">
      <div className="sm:w-[50%]">
        <address>
          <p>Ole-Johan Dahls hus</p>
          <p>Gaustadalléen 23 B</p>
          <p>0373 Oslo</p>
        </address>
        <p className="flex gap-2 items-center py-10">
          Har du forslag til forbedringer, funnet feil, ris eller ros:
          <a href={GITHUB_IFI_ROM} target="_blank">
            <GithubLogo className="hover:fill-purple" />
          </a>
        </p>
      </div>
      <div className="sm:w-[50%] h-full relative">
        <Image src="/ojd.svg" alt="SVG of ole johan dahls hus" fill priority />
        {/* <Ojd2 className="fill-blue" /> */}
        {/* <Ojd className="fill-blue" /> */}
      </div>
    </footer>
  );
};
