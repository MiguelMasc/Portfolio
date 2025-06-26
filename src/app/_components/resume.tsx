"use client";

import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button className="primary"
            onClick={() => window.open("/resume.pdf", "_blank")}>
        Download My Resume!
      </Button>

    </div>
  );
}