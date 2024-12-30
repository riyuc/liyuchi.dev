// import Image from "next/image";
// import Navbar from "@/app/components/navbar";

import Hero from "@/app/papergrid/_papergrid_components/hero";
import PaperGrid from "@/app/papergrid/_papergrid_components/paper-grid";


export default function PaperGridPage() {
  return (
    <div className="flex flex-col align-center justify-center min-h-screen max-w-full overflow-hidden p-10">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-grainy-pattern opacity-5"/>
        <div className="absolute bottom-10 left-10 right-10 top-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]"/>
        {/* Container wrapping everything else with 2/3 width and centered */}
          <Hero />
      <div className="min-h-screen"/>

      {/* Paper grid start */}
      <PaperGrid position="top" />
      <PaperGrid position="right" />
      <PaperGrid position="left" />
      <PaperGrid position="bottom" />
      {/* Paper grid end */}
    </div>
  );
}
