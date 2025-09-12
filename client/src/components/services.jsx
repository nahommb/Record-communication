import { Children } from "react";
import ServicesItems from "./services_items";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CampaignIcon from "@mui/icons-material/Campaign";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CreateIcon from "@mui/icons-material/Create";
import ArticleIcon from "@mui/icons-material/Article";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchemaIcon from "@mui/icons-material/Schema";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function Services(){

    return <div className="mt-10 mb-3 p-4 px-0 sm:bg-gradient-to-b from-orange to-blueAccent bg-orange items-center shadow-lg shadow-gray-400 m-4 rounded-lg">
        <h2 className="text-white mb-4 ml-4 sm:mt-12 font-bold text-lg sm:text-3xl">Our Services</h2>
    <div className="">
        <div className="flex justify-center ">
            <h2 className="font-bold text-white sm:text-xl mb-4">Social Media Markating</h2>   
        </div>
         <div className="flex justify-center "> 
            <p className="text-white">Helping your business grow and get noticed online.</p>
        </div>
       
        <div className=" flex w-full sm:justify-around overflow-x-auto space-x-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <ServicesItems title={'Social Media Management'} content={' We take care of your accounts from posting to engaging, keeping your pages active and professional every day.'}> 
            <PhoneIphoneIcon style={{fontSize:40,color:'blue'}} />
        </ServicesItems>
        <ServicesItems title={'Ads Management'} content={'We create smart paid ads that reach the right people turning clicks into real customers.'}>
         <CampaignIcon style={{ fontSize: 40, color: "blue" }} />
        </ServicesItems>
        <ServicesItems title={'Analytics & Reporting'} content={'We track your results and show you what works, so you know exactly how your marketing is performing.'}>
         <AnalyticsIcon style={{ fontSize: 40, color: "blue" }} />
        </ServicesItems>
    </div>
        </div>

   <div className='my-4 h-1 bg-white'/>
       <div>
        <div className="flex justify-center ">
            <h2 className="font-bold text-white sm:text-xl mb-4">Content Marketing</h2>
            
        </div>
             <div className="flex justify-center "> 
            <p className="text-white">Creating content that speaks to people and makes them remember your brand.</p>
        </div>
        <div className=" flex w-full sm:justify-around overflow-x-auto space-x-4 " style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <ServicesItems title={'Content Creation'} content={'From eye-catching designs to videos, we craft content that grabs attention and reflects your brand’s identity.'}>
            <CreateIcon style={{ fontSize: 40, color: "blue" }} />
        </ServicesItems>
        <ServicesItems title={'Copywriting'} content={' Words that connect. We write captions, ads, and stories that inspire people to take action.'}>
            <ArticleIcon style={{ fontSize: 40, color: "blue" }} />
        </ServicesItems>
        <ServicesItems title={'Content Strategy'} content={' No more random posting we plan the right content, at the right time, for the right audience.'} >
            <DashboardIcon style={{ fontSize: 40, color: "blue" }} />
        </ServicesItems>
    </div>
        </div>

    <div className='my-4 h-1 bg-white'/>
       <div>
        <div className="flex justify-center ">
            <h2 className="font-bold text-white sm:text-xl mb-4">Full Digital Support</h2>
        </div>
        <div className="flex justify-center "> 
            <p className="text-white">All-in-one solutions for businesses that want it done right, from start to finish.</p>
        </div>
        <div className=" flex w-full sm:justify-around overflow-x-auto space-x-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <ServicesItems title={'Complete Social Media Marketing Service'} content={'We handle everything strategy, content, ads, and management so you can focus on running your business.'}>
            <SchemaIcon style={{ fontSize: 40, color: "blue" }} />
        </ServicesItems>
        <ServicesItems title={'Consultation & Guidance'} content={'Not sure where to start? We’ll guide you with expert advice tailored to your business goals.'}>
            <SupportAgentIcon style={{ fontSize: 40, color: "blue" }} />
        </ServicesItems>
        <ServicesItems title={'Ongoing Support'} content={'We don’t disappear after the first post. We grow with you, keeping your brand strong in the long run.'}>
            <AutorenewIcon style={{ fontSize: 40, color: "blue" }} />
        </ServicesItems>
    </div>
        </div>

    </div>
}