import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="max-w-2xl mx-auto grow space-y-8"></main>

      <footer className="bg-slate-800 p-8">
        La vaca dise Muu es muy malvada
      </footer>
    </div>
  );
}
