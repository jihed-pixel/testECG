import React, { useState, useEffect,useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormInput3 from "../Form/FormInput3";
import tailwind from 'tailwind-rn';
import Steps from "../Form/Steps";
import FormButton from '../Form/FormButton';
import InputRd from '../Form/inputrd';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import '@assenti/rui-components/css/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './addPatient.css';
import './home.css';
import { useTranslation } from "react-i18next";
import "./Tran/i18nextInit";
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

const AddPatient = (props) => {
  const { t } = useTranslation();
  let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9],
        position: "all",
        color: [ "#ff0000"],
        cross: "dead",
        random: 10
      };

  useEffect(() => {
  },[props.loggedUser] [localStorage.getItem("addPatientMessage")])

  const [cin, setCin] = useState()
  const [cinD, setCinD] = useState()
  const [age, setAge] = useState()
  const [sexe, setSexe] = useState()
  const [dateD, setDateD] = useState()
  const [sport, setSport] = useState()
  const [sportp, setSportp] = useState("football")
  const [date, setDate] = useState()
  const [nh, setNh] = useState()
    const [value, setValue] = useState()
    const [ville, setVille] = useState()
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setVille(value.label)
      setValue(value)
    }
  var handleSubmit = (e) => {
    var values = {
      cin: cin,
      cinD: props.loggedUser.username,
      ville:ville,
      age:age,
      sexe: sexe,
      dateD:dateD,
      sport:sport,
      sportp:sportp,
      date:date,
      nh:nh
    }
    console.log({values})
   // if (!Number(cin)) {
    //  alert("Your age must be a number");
    //}
   // else {
      e.preventDefault()
       props.cc(values)
         props.navigation.navigate("Interrogatoire")
     //}
    }
     var handleExit = (e) => {
      localStorage.setItem("addPatientMessage", JSON.stringify(null))
      props.navigation.navigate("SearchPatient1")
    }

    var handleCinChange = (text) => {
      setCin(text);
    
  }



  var handleDateDChange = (text) => {

    setDateD(text.target.value)
  }
  var handleDate1Change = (text) => {

    setDate (text.target.value)
  }

  var handleAgeChange = (text) => {

    setAge(text.target.value)
  }
  
  var handleSportChange = (data) => {
    console.log(data.target.value)
    setSport(data.target.value)
    
  }
  var handleSportpChange = (data) => {
    setSportp(data.target.value)
    
  }

  var handleSexeChange = (data) => {
    console.log(data.target.value)
      setSexe(data.target.value)
  }
 
  var handleNhChange = (text) => {

    setNh(text)
  }

  

  return (
<section className="landing-background">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer   >
    <MDBRow>
      <MDBCol >
        <MDBCard>
    <div >
    <div >
    <View  >
      <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>{t("Dossier Patient")}</Text>
      <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>{t("Informations générales")}</Text>
      <Text style={tailwind('text-red-500 font-bold text-center py-2')} > {(localStorage.getItem("addPatientMessage") !== JSON.stringify(null)) && (props.message)}</Text>
      <Text style={tailwind('text-red-500 font-bold text-center py-2')} > </Text>

      <View style={tailwind(' items-center ')}>
      
        <FormInput3 placeholder="nom et prenom"        
        onChange={handleCinChange} />
       
        <div class="col-sm-6">
       <Select options={options} value={value} onChange={changeHandler} /></div>
        <div>
          <label class="form-label p-3 mx-4">Date De Naissance :</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleAgeChange}/>
          </div>
          <div class="row mx-4">
          <Text style={tailwind('text-gray-700 text-lg py-2')}>Sexe :</Text>
          <InputRd  onChange={handleSexeChange} type="radio" value="Male" name="gender" id="0" name1="Male"/>
          <InputRd  onChange={handleSexeChange} type="radio" value="Female" name="gender" id="1" name1="Female"/>
        </div>
        <div>
          <label class="form-label p-3 mx-4">Date du début d’entrainement:</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleDateDChange}/>
          </div>
       
        
        <View style={styles.row}>
          <div >
            <Text style={tailwind('text-gray-700 text-lg py-2')}>Sport pratiqué :</Text>
            <InputRd  onChange={handleSportChange} type="radio" value="statique" name="gender3" id="2" name1="statique"/> 
            <InputRd  onChange={handleSportChange} type="radio" value="dynamique" name="gender3" id="3" name1="dynamique"/> 
            <InputRd  onChange={handleSportChange} type="radio" value="mixte" name="gender3" id="4" name1="mixte"/> 
          </div>
        </View>
        <div>
        <select onChange={handleSportpChange} className="Sport pratiqué">
          <option value="football">football</option>
          <option value="2">tennis</option>
          <option value="3">équitation</option>
          <option value="1">judo</option>
          <option value="2">basket</option>
          <option value="3">handball</option>
          <option value="1">rugby</option>
          <option value="2">golf</option>
          <option value="3">canoë-kayak</option>
          <option value="1">les sports sous-marins</option>
          <option value="2">pétanque</option>
          <option value="3">voile</option>
          <option value="1">natation</option>
          <option value="2">gymnastique</option>
          <option value="3">athlétisme</option>
          <option value="1">karaté</option>
          <option value="2">randonnée</option>
          <option value="3">le tennis de table</option>
          <option value="1">badminton</option>
          <option value="2">le tir</option>  
        </select>
      </div>
      <div>
          <label class="form-label p-3 mx-4">Date d’inclusion:</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleDate1Change}/>
          </div>
      
        <FormInput3
          mask="999"
          placeholder={t("Nombre d’heure de sport par semaine")}
          onChange={handleNhChange}
        />
        <View style={styles.row}>
          <FormButton title={t("Annuler")} onPress={handleExit} />
          <FormButton title={t("Ajouter")} onPress={handleSubmit} />
        </View>
      </View>
    </View>
</div></div>
</MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  class="col-md-6"/>  
    </div>

    </section>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {
  cc: actions.addPatient
};

export default connect(mapStateToProps, mapActionToProps)(AddPatient);