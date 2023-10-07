import Navbar from "../components/layout/Navbar";
import { FaGraduationCap } from "react-icons/fa6";
import ButtonToChat from "../components/layout/ButtonToChat";

export default function Educacion() {

  return (
    <div className="container">
      <Navbar />
      <header className="header-education">
        <h1>
          <FaGraduationCap /> Formación
        </h1>
      </header>
      <main className="box-main">
        <h2>Niveles</h2>
        <ButtonToChat/>
        <ButtonToChat/>
        <ButtonToChat/>
        <ButtonToChat/>
      </main>
    </div>
  );
}
