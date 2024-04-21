
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

//
