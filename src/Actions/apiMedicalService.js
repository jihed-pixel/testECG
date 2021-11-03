import axios from "axios";
const baseUrl = "http://159.89.6.118:8080/test1/";
export default {
  medicalService(url = baseUrl) {
    return {
      login: (values) => axios.post(url + "login", values),
      logout: () => axios.get(url + "logout"),
      loginAdmin: (values) => axios.post(url + "loginadmin", values),
      addPatient: (values) => axios.post(url + "addPatient", values),
      searchPatient: (cin,cinD) => axios.get(url + "search1/" + cin+"/"+cinD),
      allPatient: (cin) => axios.get(url + "getAllPatients" ),
      infosGenerales: (cin, values) => axios.post(url + "add-infos-generales/" + cin, values),
      examenClinique: (cin, values) => axios.post(url + "examen-clinque/" + cin, values),
      interrogatoire: (cin, values) => axios.post(url + "interrogatoire/" + cin, values),
      etudeECG: (cin, values) => axios.post(url + "etude-ecg/" + cin, values),
      etudeQRS: (cin, values) => axios.post(url + "etude-qrs/" + cin, values),
      etudeOndeT: (cin, values) => axios.post(url + "etude-ondet/" + cin, values),
      segment: (cin, values) => axios.post(url + "segment-st/" + cin, values),
      aspectsegment: (cin, values) => axios.post(url + "aspect-segment/" + cin, values),
      ventricule: (cin, values) => axios.post(url + "ventricule/" + cin, values),
      ventricule2: (cin, values) => axios.post(url + "ventricule2/" + cin, values),
      ficheIRM: (cin, values) => axios.post(url + "ficheIRM/" + cin, values),
      cercle1: (cin, values) => axios.post(url + "cercle1/" + cin, values),
      cercle2: (cin, values) => axios.post(url + "cercle2/" + cin, values),
      cercle3: (cin, values) => axios.post(url + "cercle3/" + cin, values),
      cercle4: (cin, values) => axios.post(url + "cercle4/" + cin, values),
      fiche: (cin, values) => axios.post(url + "ficheEffort/" + cin, values),
      autre: (cin, values) => axios.post(url + "autre/" + cin, values),
    };
  },
};
