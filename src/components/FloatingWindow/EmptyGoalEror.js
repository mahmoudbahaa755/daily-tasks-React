import React ,{useState} from "react";
import style from './EmptyGoal.module.css';


function EmptyGoal(props){
    console.log(props.errorOrNot)
    const [showError, setErrorOrNot] = useState(props.errorOrNot);
    const closeErrorMessage = () =>{
        if(showError){
            setErrorOrNot(false);
        }
        else{

            setErrorOrNot(true)
        }
    }


    return(
        <div>
    <div className={`${style['black-background']} ${showError != true ? style['hide-error']: ''}`} onClick={closeErrorMessage}>

    </div>
        <div className={`${style['floating-window']} ${showError != true ? style['hide-error']: ''}`}>
        <header>

            <h3 className={style.h3}>An Error Occurred</h3>
        </header>
        <section>
            
            <p>Please,don't enter empty String</p>
        </section>
            <footer>

            <button type="button" className={style.button} onClick={closeErrorMessage}>close</button>
            </footer>

        </div>
        </div>
    )
}

export default EmptyGoal;