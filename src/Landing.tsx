import './App.css';
import landing from '/landingpage.jpg';
import landing2 from '/landingpage1.jpg'
import bathroom6 from '/bathroom6.jpg';
import cozy from '/cozyliving1.jpg';
import cozy2 from '/cozyliving3.jpg'
import bathroom3 from '/bathroom3.jpg'
import modern from '/modernformen8.jpg'
import modern2 from '/modernformen4.jpg'
import cozy3 from '/cozyliving4.jpg'
import cozy4 from '/cozyliving5.jpg'
import eccentric from '/eccentric2.png'
import eccentric2 from '/eccentric3.jpg'
import children from '/children1.jpg'
import children2 from '/children3.jpg'
import smallbedroom from '/smallbedroom2.jpg'
import { useEffect, useRef, useState } from 'react';
import Design from './components/Design'
import Resources from './components/Resources';
import Aboutus from './components/Aboutus';
import { Toaster } from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";
import Customcursor from './components/Customcursor';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
  

gsap.registerPlugin(useGSAP, ScrollTrigger)


function Landing() {
  const menuHover = useRef<HTMLDivElement>(null)
  const designRef = useRef<HTMLDivElement>(null)
  const resourceRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  const [menu, setMenu] = useState(false)
  const [xvalue, setXvalue] = useState(0);
  

  const moving = (e :any) =>{
    const X = e.clientX ;
    setXvalue(X)
  
  }

  const homeBtn = () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
  } 
  const DesignBtn = () => {
   
    designRef.current?.scrollIntoView({
      behavior:"smooth"
    })
    
  }
  const resourceBtn = () => {
    resourceRef.current?.scrollIntoView({
      behavior:'smooth'
    })
    
  }
  const aboutBtn = () => {
    aboutRef.current?.scrollIntoView({
      behavior:"smooth"
    })
  }
 
 

  useEffect(() => {
    window.addEventListener('mousemove' , moving)
    return () => window.removeEventListener('mousemove' , moving)
  },[])


  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main'
      }
    })
    tl.from('#landing', {
      opacity:.2,
      duration:2.3,
      stagger:{
        each:0.1,
        ease:'power2-in'
      }
    })
    tl.from('.overlay' , {
      x:-550,
      duration:.5
    })
    
  },[])
 


  return (
    
    <>
   
    <Toaster/>
    <div className='w-full mx-5 md:mx-10 lg:mx-12 mt-5 lg:mt-12 mb-12 lg:pb-28' >
    <div className="main fixed right-10 top-4 flex items-center gap-2 z-50" ref={menuHover}
    onClick={() => setMenu(!menu)}>
    
    
      {menu  ?
      <div className="nav relative flex justify-center items-center">
        <span className="circle">
        <RxCross2 className="cross"/>
        </span>
        <div className="link ">
          <button className="li-1"
          onClick={homeBtn}>Home</button>
          <button className="li-2"
          onClick={DesignBtn}>Designs</button>
          <button className="li-3" 
          onClick={resourceBtn}>Resources</button>
          <button className="li-4 w-24"
          onClick={aboutBtn}>About us</button>
        </div>
      </div>
     : 
      <>
     <div className="backgroundbox w-24 text-center p-1 rounded-md">
     <p className="dialogue tracking-wider">click me!</p>
     </div>

        <div className="relative flex justify-center items-center">
          <nav className="menu">
            <span></span>
            <span></span>
        </nav>
        
      </div>
      </>}
   </div>
  
    
     <div className=' flex flex-col lg:flex-row gap-2'  >
       <div className=' z-50' id='landing'>
            <div className='title  flex-1 mt-5 lg:mt-10 md:flex lg:block'>
            <h1 className='text-5xl lg:text-6xl'><span className='playfair-display-semibold text-8xl lg:text-9xl'>R</span>oom</h1>
            <h1 className='text-5xl lg:text-6xl ml-12 lg:relative lg:left-32 -mt-3 lg:-mt-4 md:mt-0 md:ml-5'><span className='playfair-display-semibold text-8xl lg:text-9xl'>D</span>esign</h1>
            <h1 className='text-5xl lg:text-6xl -mt-3 lg:-mt-10 md:mt-0 md:ml-5'><span className='playfair-display-semibold text-8xl lg:text-9xl'>C</span>ollection</h1>
            </div>
            <h2 className='tracking-wide mt-4 mb-5 text-xl'>Innovation or New room? </h2>
            
        </div>
 
      <div className='display overflow-hidden lg:mt-10 relative' id='landing'>
        <div className='overlay hidden lg:block bg-black z-40'></div>
        <div className='photo-row1 flex place-items-center gap-3'>
        <img className=' w-56 rounded-lg' src={landing} alt="living room designs" />
        <img className=' w-56 rounded-lg' src={landing2} alt="living room designs" />
        <img className=' w-52 rounded-lg' src={modern} alt="living room designs" />
        <img className=' w-56 rounded-lg' src={bathroom3} alt="living room designs" />
        <img className=' w-52 rounded-lg' src={modern2} alt="living room designs" />
        <div className='row1 hidden lg:block -z-10' style={{
          transform:`translateX(${xvalue - 150}px)`
        }}></div>
        </div>

        <div className='photo-row2 flex place-items-center gap-3 mt-1'>
        <img className=' w-48 rounded-lg' src={cozy4} alt="living room designs" />
        <img className=' w-40 rounded-lg' src={cozy3} alt="living room designs" />
        <img className=' w-40 rounded-lg' src={bathroom6} alt="living room designs" />
        <img className=' w-48 rounded-lg' src={cozy} alt="living room designs" />
        <img className=' w-32 rounded-lg' src={cozy2} alt="living room designs" />
        <img className=' w-40 rounded-lg' src={smallbedroom} alt="living room designs" />
        <div className='row2 hidden lg:block -z-10' style={{
          transform:`translateX(-${xvalue }px)`
        }}></div>
        </div>

        <div className='photo-row3 flex place-items-center gap-3 mt-1'>
        <img className=' w-32 rounded-lg' src={landing} alt="living room designs" />
        <img className=' w-32 rounded-lg' src={modern} alt="living room designs" />
        <img className=' w-32 rounded-lg' src={bathroom3} alt="living room designs" />
        <img className=' w-32 rounded-lg' src={eccentric} alt="living room designs" />
        <img className=' w-32 rounded-lg' src={eccentric2} alt="living room designs" />
        <img className=' w-32 rounded-lg' src={children} alt="living room designs" />
        <img className=' w-32 rounded-lg' src={children2} alt="living room designs" />
        </div>

      </div>
     </div>
    </div>
   <Customcursor menuHover = {menuHover}/>
    <Design ref={designRef} />
    <Resources ref={resourceRef} />
    <Aboutus ref = {aboutRef}/>
    </>
  
  )
}

export default Landing
