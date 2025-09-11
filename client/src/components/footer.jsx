import logo from '../assets/images/logo.png'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaTiktok } from 'react-icons/fa';

export function Footer(){


    return <div>
   <div className="h-88 lg:h-60 sm:h-90 bg-darkBlue text-white p-2 pl-4 mb-0">
      <div className='w-1/2 '>
        <img src={logo} alt="logo"  className='h-16 '/>
       <p className='text-sm md:text-lg font-bold mb-4 md:mb-8'>Built by passion, Driven by your success</p>
        </div> 
        <div className="flex justify-center sm:justify-start">
            <h2 className="text-sm md:text-md font-bold">Contact</h2>
        </div>

        <div className='pl-24 sm:pl-2 lg:flex flex-row md:flex flex-row md:jsustify-center  '>
               <div className='m-2  flex items-center justify-center lg:justify-between mr-4 mt-4 '>
            <div className='flex w-40 md:w-auto mr-2 items-center'>   
                <PhoneIcon />
                <div>
                    <p className='ml-2 text-sm sm:text-md'>+251952705655</p>
                    <p className='ml-2 text-sm sm:text-md'>+251710375837</p>
                </div>
               
            </div>
            <a href='http://www.linkedin.com/in/kibrewossen-yohannes-70154b2b3' target='_blank' rel="noreferrer">
               <div className='w-40 md:w-auto  flex '>
                <LinkedInIcon/>
                <p className='ml-2 text-sm sm:text-md'>Linkedin</p>
            </div>  
            </a>
           
       </div>  
        <div className='m-2  flex items-center justify-center lg:justify-between mr-4 mt-4 '>
            <a href='https://web.facebook.com/record.communication' target='_blank' rel="noreferrer">
                 <div className='w-40 md:w-auto mr-2 flex '>
                <FacebookIcon/>
                <p className='ml-2 text-sm sm:text-md'>Facebook</p>
            </div> 
            </a>
           <a href='https://t.me/Recordcommunicationn' target='_blank' rel="noreferrer">
             <div className='flex w-40 md:w-auto '>
                <TelegramIcon/>
                <p className='ml-2 text-sm sm:text-md'>Telegram</p>
            </div>
          </a>
           
       </div>  
       <div className='m-2  flex items-center justify-center lg:justify-between mr-4 mt-4'>
            <a href='https://www.instagram.com/record.communication/' target='_blank' rel="noreferrer">
                <div className='flex w-40 md:w-auto mr-2'>
                <InstagramIcon/>
                <p className='ml-2 text-sm sm:text-md'>Instagram</p>
            </div>
            </a>
            <a href='https://www.tiktok.com/@recordcommunication?is_from_webapp=1&sender_device=pc' target='_blank' rel="noreferrer">
                <div className='flex w-40 md:w-auto items-center'>
               <FaTiktok/>
                <p className='ml-2 text-sm sm:text-md'>Tiktok</p>
            </div>
            </a>
            
       </div>
        </div>
       
       <div className='mt-4 h-1 bg-orange'/>
       
    </div>
    <div className='bg-white h-4'></div>
</div>
}