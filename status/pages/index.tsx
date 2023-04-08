import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "./components/Login";
import Signup from "./components/Register";
import AuthContainer from "./containers/authContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <Login /> */}
      {/* <Signup /> */}
      <AuthContainer />
    </main>
  );
}
