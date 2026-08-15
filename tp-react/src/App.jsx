import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const nombreSitio = "Catarina Tejidos";
  const links = ["Blog", "Guías y Patrones", "Contacto"];
  const tituloMain = "Cursos, Guías y Patrones";
  const productos = [
    { nombre: "Curso para aprender desde cero", precio: "$15000" },
    { nombre: "Curso Cárdigan Romántico", precio: "$18000" },
    { nombre: "Curso Diseño y Construcción Chal Mañanitas", precio: "$12000" },
  ];
  const textoFooter = "Todos los derechos reservados";
  const anio = "2026";

  return (
    <>
      <Navbar
       titulo={nombreSitio}
       links={links}
      />
      <Main
       titulo="Cursos Online"
       descripcion="El proceso creativo del crochet - De la idea al diseño."
       productos={productos}
      />
      <Footer
       nombreSitio={nombreSitio}
       texto={textoFooter}
       anio={anio}
      />
    </>
  );
}

export default App;
