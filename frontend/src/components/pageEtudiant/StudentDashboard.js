import React from "react";
import { useWindowSize } from "react-use";
import { EtudiantData } from "../../constants/EtudiantData";
import { BsFolder, BsPerson, BsArrowRepeat } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setClicked } from "../../redux/DashboardDisplaySlice";
import { ImCross } from "react-icons/im";
import { reset, logout } from "../../redux/authentification/authSlice";
import { toast } from "react-toastify";

const StudentDashboard = (props) => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.dashboardDisplay);
  const { width } = useWindowSize();

  const nagivate = useNavigate();
  const handleLougout = () => {
    toast.success("Deconnexion Reussie");
    alert("Deconnexion Reussie");

<<<<<<< HEAD:frontend/src/components/page etudiant/StudentDashboard.js
    dispatch(logout());
    Navigate("/");
  };
=======
const StudentDashboard = (props) => {
  const dispatch=useDispatch();
  const files=useSelector(state=>state.dashboardDisplay);
  const {width}=useWindowSize();
>>>>>>> 1e79a003f5a837947882188aa7c91a00982e99c2:frontend/src/components/pageEtudiant/StudentDashboard.js
  return (
    <section
      className="studentDashboard px-2"
      style={files.clicked === false && width < 1015 ? { display: "none" } : {}}
    >
      <p className="py-1 fs-5" style={{ color: "white", textAlign: "center" }}>
        DASHBOARD ETUDIANT
      </p>
      <ImCross
        className="dashboardCross"
        onClick={() => {
          dispatch(setClicked());
        }}
        style={
          files.clicked === true && width < 1015 ? {} : { display: "none" }
        }
      />
      <div className="">
        <div className="d-flex justify-content-center">
          <img
            className="studentPicture"
            src={EtudiantData[0].urlPhotoProfil}
            alt=""
          />
        </div>
<<<<<<< HEAD:frontend/src/components/page etudiant/StudentDashboard.js
        <div className="studentInfo" style={{ lineHeight: "1.4" }}>
          <p className="fs-6" style={{}}>
            {EtudiantData[0].nom}
          </p>
          <p className="fs-6" style={{}}>
            {EtudiantData[0].prenom}
          </p>
          <p>Niveau: {EtudiantData[0].niveau}</p>
          <p className="fw-light" style={{}}>
            Unité: {EtudiantData[0].uniteRecherche.code}
          </p>
        </div>
      </div>
      <div className="dashboardLinks mt-4">
        <Link to="/account/depot">
          <p>
            <BsFolder /> Depot dossier
          </p>
        </Link>
        <Link to="/account/dossier">
          <p>
            <BsArrowRepeat /> Changement de sujet
          </p>
        </Link>
        <Link to="/account/dossier">
          <p>
            <BsArrowRepeat /> Changement d'encadreur
          </p>
        </Link>

        <Link
          to="/account/profil"
          style={
            props.url === "/account/profil"
              ? { color: "#ff5821", borderColor: "#ff5821" }
              : {}
          }
        >
          <p>
            <BsPerson /> Editer Profil
          </p>
        </Link>
        <Link to="/account/evolution">
          <p>
            <BiRocket /> Evolution du dossier
          </p>
        </Link>
        <Link to="/">
          <p onClick={handleLougout}>
            <FiLogOut /> Deconnexion
          </p>
        </Link>
      </div>
=======
       <div className="dashboardLinks mt-4">
                
                        <Link to="/account/depot" ><p><BsFolder/>   Depot dossier</p></Link>
                       <Link to="/account/dossier"><p><BsArrowRepeat/>  Changement de sujet</p></Link>
                       <Link to="/account/dossier" ><p><BsArrowRepeat/>   Changement d'encadreur</p></Link>
              
                        <Link to="/account/profil" style={props.url==="/account/profil"?{color:"var(--primaryColor)",borderColor:"var(--primaryColor)"}:{}}><p><BsPerson/>  Editer Profil</p></Link>
                       <Link to="/account/evolution"><p><BiRocket/> Evolution du dossier</p></Link>
                       <Link to="/*"><p><FiLogOut/> Deconnexion</p></Link>
                   
            </div>
>>>>>>> 1e79a003f5a837947882188aa7c91a00982e99c2:frontend/src/components/pageEtudiant/StudentDashboard.js
    </section>
  );
};

export default StudentDashboard;
