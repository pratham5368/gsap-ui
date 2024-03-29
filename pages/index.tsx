import Image from "next/image";
import { Inter, Lancelot } from "next/font/google";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col h-screen justify-between ${inter.className} `}
    >
      <Header />
      <Landing />
      <main className="flex-grow z-10">
       
        
        
      </main>
      <Sidebar />
      
      <Footer />
      
      
    </main>
  );
}
