import {  forwardRef } from "react"
import Livingroom from "./Livingroom"
import Bedroom from "./Bedroom"
import Eccentric from "./Eccentric"
import Balcony from "./Balcony"
import Bathroom from "./Bathroom"

const Design = forwardRef(function desingSec(_:unknown, ref:React.Ref<HTMLDivElement>) {



    return (
      <div className='design' ref={ref} >
        
       <Livingroom />
       
       <Bedroom/>
       <Eccentric/>
       <Balcony/>
       <Bathroom/>
      </div>
    )
  })
  
  export default Design