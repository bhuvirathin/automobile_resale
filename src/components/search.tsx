// import React from 'react'
// import type { RootState } from '../store'
import { useSelector } from 'react-redux'
import {useEffect} from 'react'

import {useState} from 'react'
export  default function Search() {
   // const data = useSelector((state: RootState) => state)
      const [resdata,setResdata] = useState<any[]>([]);
      const [searchtext,setSearchtext] = useState<string>('');
      const [searchresult,setSearchresult] = useState<string[]>([]);
      useEffect(() => {
        const fetchData = () => {
          fetch('data.json'
          ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
          )
            .then(function(response){
              return response.json();
            })
            .then(function(myJson) {
              setResdata(myJson)
            });
        }
        fetchData()
    }, []);
    function handleChange(e:string){ setSearchtext(e);}
  function  getMatch(){
    let matches:string[]=[];
  if (searchtext.length > 0){
    resdata.forEach((value:any) =>{
   for (const  obj in value){
   if (value[obj]?.toString().includes(searchtext)){
   matches.push(value[obj])
   }
   }
  } )
  }
  setSearchresult(matches)
  }

  return (
    <div>
      <input type='text' value={searchtext} onChange={(e) =>handleChange(e.target.value)}/>
      <button onClick={(e)=>getMatch()}>search</button><br/>
      <strong>Filtered Results</strong><br/>
      {searchresult.map((a:any) => {return <p>{JSON.stringify(a)}</p>})}<hr/>
      <div>List All Data
       {resdata.map((a:any) => {return <p>{JSON.stringify(a)}</p>})}
      </div>

    </div>
  )
}