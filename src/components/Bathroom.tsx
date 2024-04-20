
import {  useState } from 'react'
import {BathroomData} from '../data/data.ts'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(useGSAP,ScrollTrigger)


const Bathroom = () => {
  

    const [open, setOpen] = useState(false)
    const handleShow =() => {
        setOpen(!open)
        
      }
      useGSAP(() => {
        
        gsap.from('.living5',{
          scrollTrigger:{
            trigger:'.living5',
            toggleActions:'restart none none none'
          },
          y:150,
          delay:.4,
          ease:'power1.in'
        })
      })
    
  return (
    <div className="photo-wrapper" >
        
    <div className='living5' onClick={handleShow}>
    
  
    <div className="photo-overlay" >
    <div className='showbox z-20'>
          <p className='text'>Click</p>
      </div>
    </div>
      
      
      <span className="box"></span>
        <div className="label">
          <p className="playfair-display-semibold text-lg tracking-wider">Bathroom Designs</p>
        </div>
        
      
      </div>
       <div className='scroll w-full mt-5 mb-5'>

       
          {
            open ? 
            <>
           
             <div className='flex gap-2 mx-2' 
             style={{width:'500px' , transition:'width 3s ease'}}>
              {
                BathroomData.map((each :any,index:number) => (
               
                  <img className='w-full max-h-96 rounded-md'  key={index}
                  src={each.src} alt='living room design number one'
                  />
                 
                  
                ))
              }
            
             </div>
             </>
            
            : 
            <>
            
            <div style={{width:'0'}}></div>
            </>
          }
   
   </div>
  </div>
  )
}

export default Bathroom