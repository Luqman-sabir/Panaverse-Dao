import Image from "next/image";
import Hero from "./components/sections/Hero";
import Coretracks from "./components/sections/Coretracks";
import Spicializedtrack from "./components/sections/Spicializedtrack";
import Programsoutcome from "./components/sections/Programsoutcome";

export default function Home() {
  return (
 <div>
  <Hero/>
  <Coretracks/>
  <Spicializedtrack/>
  <Programsoutcome/>
 </div>
  );
}
