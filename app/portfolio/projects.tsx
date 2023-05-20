import Image from "next/image";
import natureImg from "./nature.jpg"
import nature2Img from "./nature2.jpg"
import { createClient } from 'contentful';
import { useEffect } from "react";
import { ContentfulProjectType } from "./types";
import { Button } from "@/components/ui/button"


const projects = [1,2,34,5,5,6,7]

export default async function Projects(){
    const client = createClient({
        space: 'leyg1a07yqd3',
        accessToken: 'hTAT7-3Keto-7f11Mc6gm9Qk4VnWZ8pDIHCXKty61jQ',
      });
      let projectsData : {items:ContentfulProjectType[]} | null=  null;
        try{
        projectsData  = await client.getEntries({content_type:"project"});
        console.log(projectsData?.items);
        console.log(projectsData?.items[0].fields.image)
        }
        catch(e){
            console.log("Failed to fetch projects from contentful")
            console.log(e)
        }    
    return (
        <section className="text-gray-600 body-font" id="projects">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800">My Projects</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">Embark on an inspiring journey through a collection of projects that showcase innovation, creativity, and expertise.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        
        
       
       
        
            {projectsData &&
                projectsData.items.map((project , index)=>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
                <Image quality={100} width={100} height={100} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={"https:"+project.fields.image.fields.file.url} />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-black bg-opacity-50 w-full h-full"></div>
                </div>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{project.fields.name}</h2>
              {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1> */}
              <p className="leading-relaxed">{project.fields.shortDescription}</p>
              <Button variant="destructive"><a href={project.fields.hostedUrl || project.fields.githubUrl}>
                <i className='bx bx-link-external'>Link</i>
                </a>
                </Button>

            </div>
          </div>
        </div>
                    )
            }
        
      </div>
    </div>
  </section>
  );
}