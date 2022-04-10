import React from "react";
import './profile.css';

function Adress(){
    return(
        <React.Fragment>
            <p>Je suis KONAN Kouakou Abel étudaint en master 2 en Electronique Etectrotechnique <br/>
            Automatique Informatique. Je vis à Abidjan precisement à la cité Mermoz. 
            </p>
            
            <hr/>

            <div className="adress">
                <div><span><strong>Contact:</strong> +225 0758213506</span></div>
                <div><span><strong>Mail:</strong> k.kouakouabel96@gmail.com</span></div>
                <div><span><strong>Adress:</strong> Cote d'Ivoire, Cocody, Cité Mermoz</span></div>
            </div>

        </React.Fragment>
    );

    
}
export default Adress;