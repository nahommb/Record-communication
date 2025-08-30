import About from "./components/about";
import BlogContainer from "./components/blog_container";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";
import Services from "./components/services";


export default function App() {
  return (
    <div>
      <NavBar />
      <BlogContainer />
      <About />
      <Services />
      <Footer/>
    </div>
  )
}

