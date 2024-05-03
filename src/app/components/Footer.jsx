import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-amber-500 to-yellow-300 p-3 text-black font-poetsenOne">
        <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-around ">
          <div className="">
            <p className=" sm:text-md md:text-xl lg:text-3xl" >La vaca dice Muu&copy;Copiright2024</p>
          </div>
          <div className="sm:flex sm:flex: row items-center">
            <p className="flex justify-center m-2 md:text-xl lg:text-3xl">Síguenos</p>
            <Link href="#" className="m-3">
              <InstagramIcon />
            </Link>
            <Link href="#" className="m-3">
              <FacebookIcon />
            </Link>
            <Link href="#" className="m-3">
              <XIcon />
            </Link>
            <Link href="#" className="m-3">
              <YouTubeIcon />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
