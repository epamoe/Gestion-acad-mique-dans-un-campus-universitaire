import React,{useState} from 'react';
import { ExpertData } from '../../constants/Constant';
import {BsArrowRepeat} from "react-icons/bs";
import {GiCancel} from "react-icons/gi";
import {BsPencil} from "react-icons/bs";

const StudentProfile = () => {
  const [tel,setTel]=useState(ExpertData.numTelephone);
  const [email,setEmail]=useState(ExpertData.email)
  const [newPassword, setNewPassword]=useState("");
  const [confirmPassword, setConfirmPassword]= useState("");
  const [modification,setModification]=useState(false)

  return (
    <section className="mx-3 mt-3 mb-5">
        <div className="my-2">
          <form>
            <div className="profileBlockInfo row">
              <div className="col-12 col-sm-6">
                <div className=" ">
                  <p> Matricule</p>
                  <input className="form-control " type="text" disabled={true} defaultValue={ExpertData.matricule} ></input>
                </div>
              </div>
              <div className="col-12 col-sm-6 ">
                <div className="">
                  <p>Adresse mail</p>
                  <input className="form-control " type="text " name="email" value={email} disabled={modification?false:true} onChange={(e)=>setEmail(e.target.value)} ></input>
                </div>
              </div>    
            </div>
            <div className="profileBlockInfo row">
             <div className="col-12 col-sm-6">
                <div>
                  <p>Nom</p>
                  <input className="form-control " type="text" disabled={true} defaultValue={ExpertData.nom} ></input>
                </div>
             </div>
              <div className='col-12 col-sm-6'>
                <div>
                  <p>Prenom</p>
                  <input className="form-control " type="text" disabled={true} defaultValue={ExpertData.prenom } ></input>
                </div>
              </div>
            </div>
            <div className="profileBlockInfo row">
              <div className="col-12 col-sm-6">
                <div>
                  <p>Sexe</p>
                  <div className="">
                  <input className="form-check-input" type="radio"   checked={ExpertData.sexe==="M"?true:false}   disabled={true}/><span>Homme</span>
                  <input className="form-check-input ms-3" type="radio"   checked={ExpertData.sexe==="F"?true:false}  disabled={true}/><span>Femme</span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div>
                  <p>Numéro de téléphone</p>
                  <input className="form-control txt" type="text " name="tel" value={tel} disabled={modification?false:true} onChange={(e)=>setTel(e.target.value)}></input>
                </div>
              </div>
            </div>
            <div className="profileBlockInfo row">
              <div className='col-12 col-sm-6'>
                <div>
                  <p> Nouveau Mot de passe</p>
                  <input className="form-control " type="password" name="newPassword" value={newPassword} disabled={modification?false:true}  onChange={(e)=>setNewPassword(e.target.value)}  ></input>
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div>
                  <p> Confirmation du mot de passe</p>
                  <input className="form-control " type="password" name="confirmPassword" value={confirmPassword} disabled={modification?false:true} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                </div>
              </div>
            </div>
            <div className="profileModifButton  mt-4">
              <button className="btn btn-secondary " type='button' style={modification===true?{display:'none'}:{}}  onClick={()=>setModification(true)}><BsPencil/>  Modifier informations</button>
                <button className="btn btn-primary updatePassword me-3 " type="submit" style={modification===false?{display:'none'}:{}} > <BsArrowRepeat/>  Mettre à jour</button>
                <button className="btn btn-danger ms-3" type='button' onClick={()=>setModification(false)} style={modification===false?{display:'none'}:{}} ><GiCancel/>  Annuler</button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default StudentProfile