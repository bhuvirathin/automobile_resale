
import {useEffect, useState} from 'react'
import { useAppSelector, useAppDispatch } from '../store'
import { addData,formData } from '../reducer/formReducer'

export  default function Search() {
      const [resdata,setResdata] = useState<formData[]>([]);
      const [searchtext,setSearchtext] = useState<string>('');
      const searchresult = useAppSelector(state => state.form)
      const dispatch = useAppDispatch()
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
    let matches:formData[]=[];
  if (searchtext.length > 0){
    resdata.forEach((value:formData) =>{
      let isMatchFound = false
      Object.values(value).forEach(v => {
        if(v?.toString().includes(searchtext)){
          isMatchFound=true
        }
      })
      if( isMatchFound) matches.push(value)
  } )
  }
  dispatch(addData(matches))
  }

  return (
    <div>
      <input type='text' value={searchtext} onChange={(e) =>handleChange(e.target.value)}/>
      <button onClick={(e)=>getMatch()}>search</button><br/>
      <strong>Filtered Results</strong><br/>
      {searchresult.formData.map((a:formData) => {return <p>{JSON.stringify(a)}</p>})}<hr/>
      <div>List All Data
       {resdata.map((a:formData) => {return <p>{JSON.stringify(a)}</p>})}
      </div>

    </div>
  )
}