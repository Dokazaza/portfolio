import Image from "next/image";
import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNavBar";
import {FaHome} from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import {navItems} from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex overflow-clip justify-center items-center flex-col mx-auto sm:px-10 px-5">
     <div className="max-w-7xl w-full">
         <FloatingNav navItems={navItems}
             />
        <Hero />
        <Grid />
         <RecentProjects />
         <Clients />
         {/*<Experience />*/}
         <PricingCards />
         <Approach />
         <Footer />
     </div>
   </main>
  );
}
