import Card from "./components/Card";
import profileFoto from "./assets/profile.jpeg";

export default function App() {
  return (
    <div className="app">
      <Card
        avatar={profileFoto}
        name="Pedro Falcão Costa"
        bio="Sou um desenvolvedor Full-Stack em busca da minha primeira oportunidade profissional "
        email="pedrofalcao21@gmail.com"
        phone="+55 (81) 99478-7707"
        githubUrl="https://github.com/pedrofal"
        linkedinUrl="https://www.linkedin.com/in/pedro-falcao-costa/"
      />
    </div>
  );
}
