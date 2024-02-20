import Image from "next/image";
import { Inter } from "next/font/google";
import LoginBtn from "../components/login-btn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className=""
    >
      <LoginBtn />
    </main>
  );
}
