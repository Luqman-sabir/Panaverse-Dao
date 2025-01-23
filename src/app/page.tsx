import Image from "next/image";
import Hero from "./components/sections/Hero";
import Coretracks from "./components/sections/Coretracks";
import Spicialized from "./components/sections/Spicialized";
import Programs from "./components/sections/Programs";

export default function Home() {
  return (
 <div>
  <Hero/>
  <Coretracks/>
  <Spicialized/>
  <Programs/>
 </div>
  );
}
