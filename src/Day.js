//import dummy from './db/data.json'
//import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Word from './Word'
import useFetch from './hooks/useFetch'

export default function Day(){
  //dummy.words
  //const day = 1
  //const [words, setWords] = useState([])
  const {day} = useParams()
  //const wordList = dummy.words.filter(word =>word.day === Number(day))
  const words = useFetch(`http://localhost:3001/words?day=${day}`)
  //console.log(wordList)
  return(
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && (<span>Loading...</span>)}
      <table>
        <tbody>
          {words.map(word =>(
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  )

}