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

// const StudentDashboard = (props) => {
//   const dispatch = useDispatch();
//   const files = useSelector((state) => state.dashboardDisplay);
//   const { width } = useWindowSize();

//   const nagivate = useNavigate();
//   const handleLougout = () => {
//     toast.success("Deconnexion Reussie");
//     alert("Deconnexion Reussie");

const StudentDashboard = (props) => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.dashboardDisplay);
  const { width } = useWindowSize();
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
                ? {
                    color: "var(--primaryColor)",
                    borderColor: "var(--primaryColor)",
                  }
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
          <Link to="/*">
            <p>
              <FiLogOut /> Deconnexion
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboard;
