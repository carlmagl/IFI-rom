import * as OJD from "./ojd.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full p-8 h-[364px] bg-blue-light text-blue-dark">
      <dl className="list-none">
        <li>Gaustadalleen 23 B</li>
        <li>0373 Oslo</li>
      </dl>
      <div className="">
        <Image src={OJD} alt="" height={200} width={200} />
      </div>
    </footer>
  );
};
