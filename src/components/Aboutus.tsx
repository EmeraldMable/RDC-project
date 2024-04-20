import { forwardRef,  useState } from "react"
import toast from "react-hot-toast"
import { FaRegSmile } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger)


const Aboutus = forwardRef(function about (_:unknown,ref:React.Ref<HTMLDivElement>) {
  const [disabled , setDisabled] = useState(false)
  const [email, setEmail] = useState('')
  const [err, setErr] = useState(false)
  const successSend = () => {
    setDisabled(false)
    toast.success('Thank you. We will keep in touch.' , {
      iconTheme:{
        primary: '#fff',
        secondary:'#000' 
      },
      icon:<FaRegSmile/>
      
    })
  }
  const handleSend=(e:React.SyntheticEvent) => {
    e.preventDefault()
    const checkEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

    if(email !== '' ){
     if(!checkEmail.test(email)){
      setErr(true)
     }else{
      setDisabled(true)
      setTimeout( successSend , 1000)
      setErr(false)
      setEmail('')
     }
    }else{
      setErr(true)
    }
   
  }

  useGSAP(() => {
    gsap.from('.about' ,{
      scrollTrigger:{
        trigger:'.about',
        toggleActions:'restart none none none'
      },
      scale:0.5
    })
  })

 
  return (
    <div className="about w-full pt-20 pb-10" ref={ref}>
        <div className="flex flex-col mb-10 md:flex-row lg:flex-row items-center gap-10 mx-4 md:mx-20 lg:mx-42">
            
           <div className="about-heading">
           <span >if you wonder</span>
            <p className="text-3xl md:text-6xl lg:text-9xl">What</p>
            <p className="text-3xl md:text-6xl lg:text-9xl -mt-2 md:-mt-4 lg:-mt-6">is</p>
            <p className="text-3xl md:text-6xl lg:text-9xl ml-8 -mt-6 md:ml-12 md:-mt-10 lg:ml-28 lg:-mt-20">RDC?</p>
           </div>
           <div className="text-left leading-8 md:text-2xl lg:text-3xl">
          <p className="paragraph"> It is a free website which collects a variety of room designs. </p>
          <p className="paragraph"> Its purpose is to provide inspiration and resources to anyone.</p> 
          <p className="paragraph"> Inspiration to vision, vision to our homes.</p>
           </div>
        </div>
        <form className=" float-start mx-4 md:float-end md:mr-10 lg:float-end mt-10 mb-10 lg:mr-20"
        onSubmit={handleSend}>
          
          
            <p className=" border-t-2 pt-5 md:border-t-0 lg:border-t-0 mb-2" >Want to look at room designs everyweek?</p>
            <p>We got your back. Newsletter will be sent to your email.</p>
            
            <div className="flex items-center gap-2 mt-5">
            <label htmlFor="email" className="mr-0 md:mr-2 ">Email</label>
            <div>
          
            <input type="email" id="email"
            value={email} className="rounded-md mr-2 md:mr-4 h-8 lg:mr-4"
            onChange={(e) => setEmail(e.target.value)}  />
            
            </div>
          
            <button type="submit" className={disabled ? 'disabledbtn' : 'sendbtn'} onClick={handleSend}>Send</button>
            </div>
            <p className="mt-4">{
              err ? '* Type your email correctly(abc@gmail.com) or email cannot be empty.' : ''}</p>
       
    
        </form>
    </div>
  )
})

export default Aboutus