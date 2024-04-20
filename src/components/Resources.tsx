
import { forwardRef } from 'react'
import {resources} from '../data/data.ts'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(useGSAP,ScrollTrigger)


const Resources = forwardRef (function resource (_:unknown,resourceref:React.Ref<HTMLDivElement>) {

 

 useGSAP(() => {
  gsap.from('.stagger' , {
    scrollTrigger:{
      trigger:'.stagger',
      toggleActions:'restart none none none'
    } ,
    y:250,
    stagger:{
      each:0.1,
      ease:'power1.in'
    }
  })
})

  return (
  
    <div className="stagger w-full mt-16 mb-20" ref={resourceref} >
      <h1 className="playfair-display-regular text-3xl text-center" >Resources </h1>
      <h2 className="text-xl text-center mt-5">(for your dream room)</h2>


      <div className= ' flex flex-col w-full lg:items-center mt-5  gap-2 mx-4 md:mx-20' >
        {resources.map((resource,index) => (
          <div className="stagger w-1/2 cursor-pointer mt-8 " key={index} >
          <h3 className="playfair-display-regular text-xl whitespace-nowrap">
            {resource.title}</h3>
        
         <ol>
        {resource.channels.map((channel, index) => (
           <li className="list playfair-display-regular text-lg mt-5 e"
           key={index}>
            <Link to={`${channel.link}`} className='hover:underline'
          >{channel.id}.
           {channel.name}
           </Link>
            <img src={`${channel.photo}`} className='photo -right-20 lg:right-0'/>
           </li>
          
        ))}
         </ol>
        </div>
        ))}
      </div>
    </div>
  
  )
})

export default Resources