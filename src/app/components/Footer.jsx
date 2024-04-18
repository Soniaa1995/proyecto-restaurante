import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-800 p-5">
        <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-around ">
          <div className="">
            <p className="">La vaca dice Mu &copy;Copiright2024</p>
          </div>
          <div className="sm:flex sm:flex: row items-center">
            <p className="flex justify-center m-2">Síguenos</p>
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
