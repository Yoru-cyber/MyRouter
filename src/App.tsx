import MyRouter from "./components/MyRouter/My-Router";
import Link from "./components/Link/Link";
const About = () => {
  return (
  <p style={{color: "white"}}>Hi, i am a about!</p>);
}
const Home = () => {
  return (
  <p style={{color: "white"}}>Hi, i am a home!</p>);
}
const Contact = () => {
  return (
  <p style={{color: "white"}}>Hi, i am a contact!</p>);
}
function App() {
  return (
    <>
      <MyRouter>
        <p>Hi, i am a children!</p>
        <Link path="home" component={Home}>Home</Link>
        <Link path="contact" component={Contact}>Contact</Link>
        <Link path="about" component={About}>About</Link>
      </MyRouter>
    </>
  );
}

export default App;
