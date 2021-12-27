//import dummy from "./db/data.json"
import {Link} from "react-router-dom"
import { useEffect,useState } from "react"
import useFetch from "./hooks/useFetch"

export default function DayList(){
  //const [days, setDays] = useState([])
  const [count,setCount] = useState(0)
  //console.log(dummy)
  //어떠한 상태값이 바뀌었을때 동작하는 함수를 작성할수있다.
  // useEffect(()=>{
  //   //console.log('count change')
  //   fetch('http://localhost:3001/days').then(res=>{
  //     return res.json()
  //   }).then(data=>{
  //     setDays(data)
  //   })
  // },[])//의존성 배열
  const days = useFetch('http://localhost:3001/days')
  if(days.length===0){
    return <span>Loading...</span>
  }
  function onClick(){
    setCount(count+1)
  }

  return(
    <>
      <ul className="list_day">
        {days.map(day =>(
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onClick}>{count}</button>
    </>
  )
}