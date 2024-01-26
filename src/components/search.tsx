// import React from 'react'
// import type { RootState } from '../store'
import { useSelector } from 'react-redux'
import {useEffect} from 'react'

import {useState} from 'react'
export  default function Search() {
   // const data = useSelector((state: RootState) => state)
      const [resdata,setResdata] = useState<any[]>([]);
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
              const data = [...resdata,myJson]
              setResdata(data)
            });
        }
        fetchData()
    }, []);
  return (
    <div>
      <div>List All Data
       {resdata.map((a:any) => {return <p>{JSON.stringify(a)}</p>})}
      </div>
    </div>
  )
}