import { Suspense, useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import News from './components/News'
import Main from './components/Main'
import Started from './components/Started'
import PriceIng from './components/PriceIng'
import Transform from './components/Transform'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

const prices=async ()=>{
try{
  const res= await fetch("/priceing.json")
  return res.json();
}catch(e){
  console.log(e)
}
}





const tools=async ()=>{
try{
  const res= await fetch("/tools.json")
  return res.json();
}catch(e){
  console.log(e)
}
}

function App() {
const [card,setCard]=useState([]);

const price=prices();
const toolsDta=tools();
  return (
    <>
    <NavBar card={card}></NavBar>
    <Banner></Banner>
    <News></News>
    <Suspense fallback={<div className='flex justify-center items-center py-20'><span className="loading loading-spinner text-success"></span></div>}>
      <Main toolsDta={toolsDta} card={card} setCard={setCard}></Main>
    </Suspense>
    
    </>
  )
}

export default App
