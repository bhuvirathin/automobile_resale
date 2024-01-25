import {Link } from "react-router-dom";
import '../styles/dashboard.scss';
export default function Dashboard(){
    return(
    <>
    <nav>
        <ul>
            <li>
              <Link to={'#'}>Logo</Link> 
            </li>
        </ul>
        <ul>
            <li>
              <a href={'#'}>Home</a> 
            </li>
        </ul>
        <ul>
            <li>
              <a href={'#'}>Services</a>  
            </li>
        </ul>
        <ul>
            <li>
                <a href={'#'}>Gallery</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href={'#'}>Contact Us</a>
            </li>
        </ul>
    </nav>
   
    </>)
}