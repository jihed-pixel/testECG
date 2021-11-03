import apiMedicalService from "./apiMedicalService";

export const ACTION_TYPES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOGINADMIN: "LOGINADMIN",
  ALL_PATIENT:"ALL_PATIENT",
  ADD_PATIENT: "ADD_PATIENT",
  SEARCH_PATIENT: "SEARCH_PATIENT",
  INFOS_GENERALES: "INFOS_GENERALES",
  EXAMEN_CLINIQUE:"EXAMEN_CLINIQUE",
  INTERROGATOIRE:"INTERROGATOIRE",
  ETUDE_ECG:"ETUDE_ECG",
  ETUDE_ONDET:"ETUDE_ONDET",
  SEGMENT:"SEGMENT",
  ASPECT_SEGMENT:"ASPECT_SEGMENT",
  VENTRICULE:"VENTRICULE",
  VENTRICULE2:"VENTRICULE2",
  FICHE_IRM:"FICHE_IRM",
  FICHE:"FICHE",
  CERCLE1:"CERCLE1",
  CERCLE2:"CERCLE2",
  CERCLE3:"CERCLE3",
  CERCLE4:"CERCLE4",
  AUTRE:"AUTRE"
};

export const infosGenerales = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .infosGenerales(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.INFOS_GENERALES,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}



export const login = (values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .login(values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: response.data,
      });
      const loggedUser = response.data;
      if (loggedUser == "") {
        localStorage.setItem("loggedUser", JSON.stringify(null))
      } else if (loggedUser == "Username or/and password is/are incorrect") {
        localStorage.setItem("loggedUser", JSON.stringify(null))

      } else {
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser))


      }
    })
    .catch((err) => console.log(err));
};


export const logout = () => (dispatch) => {
  apiMedicalService.medicalService().logout().
    then((response) => {
      localStorage.setItem("loggedUser", JSON.stringify("Try to login"))
      dispatch({
        type: ACTION_TYPES.LOGOUT,
        payload: JSON.stringify(null)
      });

    })
    .catch((err) => console.log(err));
};

export const addPatient = (values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addPatient(values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_PATIENT,
        payload: response.data,
      });
      const addPatientMessage = response.data
      if (addPatientMessage == "Cin or/and matricule already existed")
        localStorage.setItem("addPatientMessage", "Cin or/and matricule already existed")
      else {
        localStorage.setItem("addPatientMessage", JSON.stringify(null))

      };

    })
    .catch((err) => console.log(err));
};
export const searchPatient = (search,search1) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .searchPatient(search,search1)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.SEARCH_PATIENT,
        payload: response.data
      });

    })
    .catch((err) => console.log(err))
}
export const allPatient = () => (dispatch) => {
  apiMedicalService
    .medicalService()
    .allPatient()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ALL_PATIENT,
        payload: response.data
      });

    })
    .catch((err) => console.log(err))
}
export const loginAdmin = (values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .loginAdmin(values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.LOGINADMIN,
        payload: response.data,
      });
      const loggedUserAdmin = response.data;
      if (loggedUserAdmin == "") {
        localStorage.setItem("loggedUserAdmin", JSON.stringify(null))
      } else if (loggedUserAdmin == "Username or/and password is/are incorrect") {
        localStorage.setItem("loggedUserAdmin", JSON.stringify(null))

      } else {
        localStorage.setItem("loggedUserAdmin", JSON.stringify(loggedUserAdmin))


      }
    })
    .catch((err) => console.log(err));
};
export const examenCliniquePatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .examenClinique(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.EXAMEN_CLINIQUE,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const interrogatoirePatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .interrogatoire(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.INTERROGATOIRE,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const etudeECGPatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .etudeECG(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ETUDE_ECG,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const etudeQRSPatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .etudeQRS(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ETUDE_ECG,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const etudeOndeTPatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .etudeOndeT(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ETUDE_ONDET,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const segmentPatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .segment(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.SEGMENT,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const aspectsegmentPatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .aspectsegment(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ASPECT_SEGMENT,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const ventriculePatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .ventricule(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.VENTRICULE,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const ventricule2Patient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .VENTRICULE2(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.VENTRICULE2,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const ficheIRMPatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .ficheIRM(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FICHE_IRM,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const autrePatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .autre(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.AUTRE,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const cercle1Patient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .cercle1(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CERCLE1,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const cercle2Patient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .cercle2(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CERCLE2,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const cercle3Patient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .cercle3(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CERCLE3,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const cercle4Patient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .cercle4(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CERCLE4,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const fichePatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .fiche(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FICHE,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}