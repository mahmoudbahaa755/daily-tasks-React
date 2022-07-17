import React ,{useState} from "react";
import style from './EmptyGoal.module.css';


function EmptyGoal(props){
    const [errorOrNot, setErrorOrNot] = useState(props.errorOrNot);
    const closeErrorMessage = () =>{
        setErrorOrNot(true)
    }


    return(
        <div className={`${style['floating-window']} ${!errorOrNot ? style['hide-error'] :''}`}>
            <h3>Please,don't enter empty String</h3>
            <button type="button" onClick={closeErrorMessage}>close</button>

        </div>
    )
}

export default EmptyGoal;