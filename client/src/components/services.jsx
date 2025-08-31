import ServicesItems from "./services_items";

export default function Services(){

    return <div className="mt-10 mb-3 p-4 sm:bg-gradient-to-b from-orange to-blueAccent bg-orange items-center">
        <h2 className="text-white mb-4 sm:mt-12 font-bold text-lg sm:text-3xl">Our Services</h2>
    <div>
        <div className="flex justify-center ">
            <h2 className="font-bold text-white sm:text-xl mb-4">Social Media Markating</h2>
        </div>
        <div className=" flex w-full sm:justify-around overflow-x-auto space-x-4">
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
    </div>
        </div>

   <div className='my-4 h-1 bg-white'/>
       <div>
        <div className="flex justify-center ">
            <h2 className="font-bold text-white sm:text-xl mb-4">Social Media Markating</h2>
        </div>
        <div className=" flex w-full sm:justify-around overflow-x-auto space-x-4">
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
    </div>
        </div>

    <div className='my-4 h-1 bg-white'/>
       <div>
        <div className="flex justify-center ">
            <h2 className="font-bold text-white sm:text-xl mb-4">Social Media Markating</h2>
        </div>
        <div className=" flex w-full sm:justify-around overflow-x-auto space-x-4">
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
    </div>
        </div>

    </div>
}