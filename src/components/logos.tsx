import { useState } from "react";
import AddForm from './addForm';
const images = require.context('../images' ,false, /\.(png|jpe?g|svg)$/);

interface imageData{
    src:string,
    alt:string
}
const imageList:imageData[] = images.keys().map((image) => {
    const src = images(image);
    const alt = image.substring(2, image.length-4);
    const imageData : imageData= {src,alt}
    return imageData;
});

export default function Logos() {
    const [showForm,setShowForm] = useState(false)
    const [model,setModel] = useState('')
    function displayForm(e : any){
        setShowForm(true);
        setModel(e.alt)
    }
  return (
    <div>
    <div className="logos">
      {imageList.map((image :imageData , index: number) => (
        <img 
        key={index} 
        src={image?.src} 
        onClick={(e :  React.MouseEvent<HTMLElement>)=>displayForm(e.target as any)} 
        alt={ image?.alt} />
      ))}
     
    </div>
    {showForm && <AddForm modelName={model}/>}
    <a className='viewall' href='/search' >View All</a>
    </div>
  );
}