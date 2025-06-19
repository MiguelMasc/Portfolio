
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col justify-center min-h-screen w-3/5 mx-auto">
      <h1 className="text-4xl 
                    font-bold
                    flex">
        Contact Me!
      </h1>
      <div className=" mt-6">
        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        <div className="flex flex-col gap-2 mt-6">
          <Button variant="outline"
                  className="flex items-center justify-center">
            <FaGithub className="mr-2" />
            MiguelMasc 
          </Button>
          <Button variant="outline"
                  className="flex items-center justify-center">
            <FaLinkedin className="mr-2" size="xlarge"/>
            Miguel Mascareno
          </Button>
        </div>
      </div>
    </div>
  );
}