import React from "react";
import './mii_style.css';


const MostImpInfo=()=>{
    return(
        <>
            <div className="most-imp-info">
                <div  className="info">
                    <marquee behavior="" direction="ltr"><a href="#"><b>Admission open for 2023-24</b></a></marquee>
                    {/* <Maquree title="Sololearn" text="Learn to code for FREE!" />  */}
                </div>
            </div>
        </>
    )
}
export default MostImpInfo;







// const Maquree = ({title, text}) => {
//     const width = innerWidth;
//     const [pos,setPos] = useState(0);   
//     const [run, setRun] = useState(true);
//     const scrollEff = () => {
//         if(run) setPos(p=>p<width? p+1: -width);        
//     }
    
//     useEffect(() => {
//         const tm = setTimeout(scrollEff, 10);
//         return () => clearTimeout(tm);
//     },[pos]);
    
//     const onMouseEnter = (e) => {
//         // console.log("mouse enter");
//         setRun(false);
//     }
    
//     const onMouseLeave = (e) => {
//         // console.log("mouse leave");
//         setRun(true);
//         setPos(pos+1); // to trigger useEffect 
//     }
    
//     const styles = {
//         position: "relative", 
//         fontSize: "1em",
//         left: pos + "px"
//     };
    
//     return (
//         <h1 style={styles} 
//             onMouseEnter={onMouseEnter} 
//             onMouseLeave={onMouseLeave} 
//         ><mark>{title}</mark> {text}</h1>
//     )
// }
