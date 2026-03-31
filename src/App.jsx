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
const price=prices();
const toolsDta=tools();
function App() {
const [card,setCard]=useState([]);


  return (
    <>
    <NavBar card={card}></NavBar>
    <Banner></Banner>
    <News></News>
   
      <Main toolsDta={toolsDta} card={card} setCard={setCard}></Main>
   
    <Started></Started>
   
      <PriceIng price={price}></PriceIng>
   
    <Transform></Transform>
    <Footer></Footer>
    <ToastContainer />
    </>
  )
}

export default App
