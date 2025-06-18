import Image from "next/image";
import bg from "../../public/background/home-background7.jpg";
import RenderModel from "../components/RenderModel";
import Jester from "../components/models/Jester";
import Navigation from "../components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background" fill className="-z-50 w-full h-full object-cover fill object-center opacity-50" />
  <div className="absolute top-0 left-0 w-full h-screen">
    <Navigation/>
    <RenderModel>
      <Jester />
    </RenderModel>
  </div>
    </main>
  );
}
