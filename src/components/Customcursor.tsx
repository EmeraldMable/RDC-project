import { useEffect , useState } from "react"

const Customcursor = ({menuHover}:any) => {
    const [isHovered, setIsHovered] = useState(false)
    const [xvalue, setXvalue] = useState(0);
    const [yvalue, setYvalue] = useState(0);
 
  const halfSize:number = 46;

  const moving = (e :any) =>{
    const X = e.clientX -halfSize ;
    const Y = e.clientY -halfSize ;
    setXvalue(X)
    setYvalue(Y)
  } 
    const handleHover = () => {
        setIsHovered(true)
      }
      const handleRemove = () => {
        setIsHovered(false)
      }
      useEffect(() => {
        window.addEventListener('mousemove' , moving)
        menuHover.current?.addEventListener('mouseover' , handleHover)
        menuHover.current?.addEventListener('mouseleave' , handleRemove)
        return () => {
          window.removeEventListener('mousemove' , moving)
          menuHover.current?.removeEventListener('mouseover' , handleHover)
          menuHover.current?.removeEventListener('mouseleave' , handleRemove)
        }
      
      },[])
  return (
    <div>
          {
          isHovered ?
          <div className="click"  style={{opacity:'0'}}>
          <p className="text">Click</p>
        </div>
           :  <div className="click"  style={{top:`${yvalue}px` , left:`${xvalue}px`}}>
          <p className="text">Click</p>
        </div>
        }
    </div>
  )
}

export default Customcursor