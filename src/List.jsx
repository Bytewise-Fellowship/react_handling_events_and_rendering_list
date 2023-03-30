import React,{useState} from 'react'

const List = (prop) => {
    let {id,text,rating} = prop.item;

    const [bgBlue,setBg] = useState(false);
    const [textColor,setColor] = useState(false);

    function click(){
        setBg(!bgBlue)
    }
  
  
    function mouseEntered(){
      setBg(true)
    }
  
    function mouseLeave(){
        setColor(!textColor)
        setBg(false)
    }

    

   
  return (
    <div className='w-40 h 40 my-20'>
        <div className= {` w-18 h-18 ${bgBlue? "bg-blue-500 " : ""   }  ${textColor? "text-red-500":""}  `} onMouseEnter={mouseEntered} onMouseLeave={mouseLeave}>
        <h2> id is {id}</h2>
        <p>{text}</p>
        <h3>rating is {rating}</h3>
        
        </div>

        <button onClick={click} >
            Click me
        </button> 
    
    </div>
    
    
  )
}

export default List