import logo from '../assets/images/logo.png';

export function NavBar (){

    return <div className="sm:h-56 lg:h-96 bg-gradient-to-r from-orange to-blueAccent flex items-center px-4 text-white">
  
  <img src={logo} alt="logo" className="h-36 sm:h-36 md:h-56 lg:h-96 w-auto" />

  <div className="flex flex-col items-center justify-center  px-4 py-2">
    <p className="text-sm mb-2 font-bold md:text-lg lg:text-4xl lg:mb-12 text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </p>
    <button className="lg:h-12 lg:w-52 lg:text-lg bg-white text-blueAccent px-3 py-1.5 rounded-xl text-sm font-bold hover:bg-white transition">
      Get Started
    </button>
  </div>

</div>

}