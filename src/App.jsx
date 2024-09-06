import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber]=useState(false);
  const[character,setCharacter]=useState(false);
  const[password,setPassword]=useState("");


  
  const passwordGenerator=useCallback(()=>{
    
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+="0123456789";
    if(character) str+="!@#$%^&*><?";

    for(let i=0;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)

    }
    setPassword(pass)



  },[length,number,character,setPassword])
  //userefff
  const passwordreff=useRef(null)
  const copytopassclipboard=useCallback(()=>{
    passwordreff.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto rounded-lg shadow-md px-4 my-8 text-orange-500 bg-gray-700 '>
      <h1 className='text-white text-center'>
        Password Generator
      </h1>
     <div className='rounded-lg flex shadow overflow-hidden mb-4 '>
      <input 
      placeholder='password'
       type="text" 
       value={password}
       className='outline-none w-full py-1 px-3'
       ref={passwordreff}
       readOnly
      />
      <button onClick={copytopassclipboard} className='outline-none bg-blue-500 text-white shrink-0 py-0.5 px-3'>copy</button>
     

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1' >
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
        
        className='cursor-pointer'
       
        onChange={(e)=>{setLength(e.target.value)}}
         />
         <label >Length:{length}</label>
      
       

      </div>
      <div className='flex items-center gap-x-1' >
        <input 
        type="checkbox"
        className='cursor-pointer'
     
        defaultChecked={number}
       
        onChange={()=>{
          setNumber((prev)=>!prev)
        }}
         />
         <label >Number</label>
      
       

      </div>
      <div className='flex items-center gap-x-1' >
        <input 
        type="checkbox"
        className='cursor-pointer'
     
        defaultChecked={character}
       
        onChange={()=>{
          setCharacter((prev)=>!prev)
        }}
         />
         <label >Character</label>
      
       

      </div>


    </div>

    </div>

   
  )
}

export default App
