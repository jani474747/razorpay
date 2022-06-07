
import './App.css';
import {useEffect} from "react"
import {CourseCard} from "./components/courses"
function Append() {

  const loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script = document.createElement("script")
      script.src =src
      script.onload=()=>{
        resolve(true)
      }
      script.onerror=()=>{
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  useEffect(()=>{
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
  })
  return (
    <section className='card-list'>
   <CourseCard/>
    </section>
  );
}

export default Append;
