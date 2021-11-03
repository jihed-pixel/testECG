import { ACTION_TYPES } from "../Actions/medicalService";
const initialState = {
  loggedUser: null,
  loggedUserAdmin: null,
  message: "" ,
  patientList:[]
};

export const medicalService = (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        loggedUser: action.payload,
        //message:action.payload
      };
      case ACTION_TYPES.ALL_PATIENT:
        return {
          ...state,
          patientList1:action.payload
        }
      case ACTION_TYPES.LOGINADMIN:
      return {
        ...state,
        loggedUserAdmin: action.payload,
        //message:action.payload
      };
      case ACTION_TYPES.LOGOUT:
        return{
          ...state,
          loggedUser:null
      }
      case ACTION_TYPES.ADD_PATIENT:
        return {
          ...state,
          patientList:action.payload
        }
      case ACTION_TYPES.SEARCH_PATIENT:
        return {
          ...state,
          patientList:action.payload
        }


      case ACTION_TYPES.INFOS_GENERALES:
        return{
          ...state,
          patientList:action.payload
        }
        case ACTION_TYPES.EXAMEN_CLINIQUE_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.INTERROGATOIRE_PATIENT:
        return{
          ...state,
          patientList:action.payload
        }
        case ACTION_TYPES.ETUDE_ECG_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.ETUDE_QRS_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.ETUDE_ONDET_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.SEGMENT_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.Aspect_SEGMENT_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.VENTRICULE_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.VENTRICULE2_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.FICHE_IRM_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.FICHE_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.CERCLE1_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.CERCLE2_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.CERCLE3_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.CERCLE4_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }
          case ACTION_TYPES.AUTRE_PATIENT:
          return{
            ...state,
            patientList:action.payload
          }

    default:
      return state;
  }
};
