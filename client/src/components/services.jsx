import ServicesItems from "./services_items";

export default function Services(){

    return <div className="mt-10 mb-3 p-4 bg-gradient-to-b from-orange to-blueAccent items-center">
        <h2 className="text-white mb-4 sm:mt-12 font-bold text-lg">Our Services</h2>
    <div className="bg-pink-500 flex w-full sm:justify-center overflow-x-auto space-x-4">
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
    </div>
   <div className='my-4 h-1 bg-white'/>
         <div className="bg-pink-500 flex w-full sm:justify-center overflow-x-auto space-x-4">
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
    </div>
    <div className='my-4 h-1 bg-white'/>
     <div className="bg-pink-500 flex w-full sm:justify-center overflow-x-auto space-x-4">
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
    </div>

    </div>
}