import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Info() {
  return (
    <div className="flex flex-col justify-center min-h-screen sm:w-3/5 w-screen p-8 mx-auto">
      <h1 className="text-4xl 
                    font-bold
                    flex">
        Contact Me!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </h1>
      <div className="mt-6 ">
        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
        <div className="flex w-full flex-col gap-2 mt-6 justify-between">
          <Button variant="outline"
                  className="flex justify-start sm:w-auto"
                  onClick={() => window.open("https://github.com/MiguelMasc", "_blank")}>
            <FaGithub className="m-2" />
            MiguelMasc 
          </Button>
          <Button variant="outline"
                  className="flex justify-start sm:w-auto"
                  onClick={() => window.open("https://www.linkedin.com/in/miguel-mascareno/", "_blank")}>
            <FaLinkedin className="m-2"/>
            Miguel Mascareno
          </Button>
        </div>
      </div>
    </div>
  );
}
