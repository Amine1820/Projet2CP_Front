import  styles from  './forgot.module.css'
import img from '../../Front_assets/LOGO.png'
import { useFormik }  from 'formik'
import axios from 'axios'
import { useState , useRef } from 'react'
import { useNavigate } from 'react-router-dom'



function Forgot () {
 

  let navigate = useNavigate();
  const [error,setError] = useState("")
  
  const formik = useFormik({
    initialValues : {
          email : "" ,
    },
    
    onSubmit : async ( values ) => {
      setError("")
      

      
      try {
        const response = await axios.post(
          "http://localhost:4000/resetPass",
          values
        );
        navigate("/login");
       
       }
       
        catch (err) {
      
          if (err.response.status === 404) {
            console.log("RERERE");
            alert("L'adresse e-mail entrée n'existe pas !");
          }
        
      }
    }
  });
   
  

return (
<>

<a href='#' className='Img' > <img src={img}  /> </a>
      <div className={styles.Long_Line2} ></div>
      <div className={styles.container} >

      <span className={styles.Big_Title} >vous avez oublié votre mot de passe?</span>
      <p className={styles.p1} >Ne vous inquitez pas!</p>
      <br/>
       <p className={styles.p2} >
            Nous vous enverrons un Mail pour reinitialiser votre
       </p>
       <br/>
       <p className={styles.p3} >mot de passe.</p>
       <form  onSubmit={formik.handleSubmit}  >
       <input className={styles.input_Email} 
        id = "email" value={formik.values.email} onChange={formik.handleChange}
        required  />
        
        <label className={styles.Email} >Email</label>
        <div className={styles.CNXbutton}>
            <div className={styles.Reini}>
            <button  type='submit' value='Send' > Réinitialiser Le Mot De Passe </button>
            </div>
        </div>
        </form>
      </div>
</>
)
}
export default Forgot