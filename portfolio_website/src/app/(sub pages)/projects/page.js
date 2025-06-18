import Image from "next/image";
import bg from "../../../../public/background/about-background3.jpg";
import ProjectsList from "../../../components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Magic from "@/components/models/Magic";



export default function Home() {
  return (
    <>
    <Image src={bg} alt="background" className="-z-50 fixed top-0 left-0 w-full h-full object-cover fill object-center opacity-50" />
    <div>
      <ProjectsList projects= {projectsData}/>
    </div>

        
    <div className="flex items-center justify-center fixed top-16 lg:top-20
    -translate-x-1/2 lg:translate-x-1/2 -z-10 left-1/2 lg:-left-24 h-screen"> 
      <RenderModel>
          <group position={[0, 0, 0]}>
            <Magic />
          </group>
      </RenderModel>
    </div>

    </>
  );
}
