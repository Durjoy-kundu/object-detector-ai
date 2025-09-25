import Image from "next/image";
import ObjectDetection from "./components/objectDetection";

export default function Home() {
  
  // const canvasRef = useRef(null);

  return (
   <main className="felx min-h-screen flex-col items-center p-8">
    <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
      Thief Detection
    </h1>
    <ObjectDetection/>
   </main>
  );
}
