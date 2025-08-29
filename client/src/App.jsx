import BlogContainer from "./components/blog_container";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";


export default function App() {
  return (
    <div>
      <NavBar />
      <BlogContainer />
      <div className="h-96">

      </div>
      <Footer/>
    </div>
  )
}

