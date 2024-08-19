import Image from "next/image";
import Base from "./components/Base";
import About from "./about/page";
import Toast from "./components/Toast";
// import Card from "./components/Card";
import Card from "./books/page";
export default function Home() {
  return (
    <>
    <Base />
    <About />
    </>
  );
}
