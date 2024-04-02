"use client";

import { Progress } from "~/components/Progress";


export default function Home() {
  return (
    <div>
     <div className="py-8 pl-8">
     <Progress value={30}  radius="full" striped animated={true} color="rose" className="max-w-[400px]" size="md"/>
     </div>
   
    </div>
  );
}
