
import {  useState } from 'react'
import {eccentricData} from '../data/data.ts'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(useGSAP,ScrollTrigger)

const Eccentric = () => {


    const [open, setOpen] = useState(false)
    const handleShow =() => {
        setOpen(!open)
        
      }

      useGSAP(() => {
        
        gsap.from('.living3',{
          scrollTrigger:{
            trigger:'.living3',
            toggleActions:'restart none none none'
          },
          y:250,
          delay:.2,
          ease:'power1.in'
        })
      })
    
  return (
    <div className="photo-wrapper">
        
    <div className='living3' onClick={handleShow}>
    
  
    <div className="photo-overlay" >
    <div className='showbox z-20'>
          <p className='text'>Click</p>
      </div>
    </div>
      
      
      <span className="box"></span>
        <div className="label">
          <p className="playfair-display-semibold text-lg tracking-wider">My room, My Way</p>
        </div>
        
      
      </div>
       <div className='scroll w-full mt-5 mb-5'>

       
          {
            open ? 
            <>
           
             <div className='flex gap-2 mx-2' 
             style={{width:'500px' , transition:'width 3s ease'}}>
              {
                eccentricData.map((each :any,index:number) => (
               
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

export default Eccentric