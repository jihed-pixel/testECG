import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import FormInput from "../Form/FormInput";
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import FormButton from '../Form/FormButton';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';

const InfosGenerales = (props) => {
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
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [age, setAge] = useState("")
    const [sexe, setSexe] = useState("Male")
    const [dateD, setDateD] = useState(0)
    const [sport, setSport] = useState("")
    const [date, setDate] = useState("")
    const [nh, setNh] = useState(0)
    var handleSubmit = (e) => {
      var values = {
        nom: nom,
        prenom: prenom,
        age:age,
        sexe: sexe,
        dateD:dateD,
        sport:sport,
        date:date,
        nh:nh
      }

      var handleCinChange = (text) => {
        setCin(text)
      }
      
      var handleNomChange = (text) => {
        setNom(text)
      }
    
      var handlePrenomChange = (text) => {
    
        setPrenom(text)
      }
      var handlePrenomChange = (text) => {
    
        setPrenom(text)
      }
    
      var handleDateDChange = (text) => {
    
        setDateD(text)
      }
    
      var handleAgeChange = (text) => {
    
        setAge(text)
      }
      var handleSportChange = (data) => {
        console.log(data.target.value)
        setSport(data.target.value)
        
      }
    
      var handleSexeChange = (data) => {
        console.log(data.target.value)
          setSexe(data.target.value)
      }
     
      var handleNhChange = (text) => {
    
        setNh(text)
      }

  var handleSubmit = (e) => {
    var values = {

      cin: cin,
      nom: nom,
      prenom: prenom,
      age:age,
      sexe: sexe,
      dateD:dateD,
      sport:sport,
      date:date,
      nh:nh

    }
    console.log(values)
    e.preventDefault()
    props.infosGenerales(props.patientList["cin"], values)
    props.navigation.navigate("PatientDetails")

  }
  return (
<View>
<div class="big">
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
<Text style={tailwind('text-gray-700 font-bold py-2 text-3xl text-center')}>Informations génerales:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
<div >
    <div >
    <View  >
      <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>Dossier Patient</Text>
      <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>Informations générales</Text>
      <Text style={tailwind('text-red-500 font-bold text-center py-2')} > {(localStorage.getItem("addPatientMessage") !== JSON.stringify(null)) && (props.message)}</Text>
      <View style={tailwind(' items-center ')}>
        <FormInput3
          mask="999999999"
          placeholder="Identifiant"
          type="number-pad"
          onChange={handleCinChange}
        />
        <FormInput3
        mask="aaaaaaaaaaa"
          placeholder="Nom"
          onChange={handleNomChange}
        />
        <FormInput3
        mask="aaaaaaaaaaa"
          placeholder="Prenom"
          onChange={handlePrenomChange}
        />
        
        <FormInput3
          mask="999"
          placeholder="Nombre d’heure de sport par semaine"
          onChange={handleNhChange}
        />
       <Text style={tailwind('text-gray-700 py-2')}>Age :</Text>
        <DatePicker
        color="primary"
        placeholder="YYYY-MM-DD"
        value={date}
        clearable
        minDate="1920-05-01"
        maxDate={new Date()}
        onDate={(date) => {
          setAge(date)
        }}
        onClear={() => setAge('')}
        width={250}
        onChange={(value) => setAge(value)}/>
        <View style={styles.row}>
          <div >
            <Text style={tailwind('text-gray-700 text-lg py-2')}>Sexe :</Text>
            <input  onChange={handleSexeChange} type="radio" value="Male" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Male</Text>
            <input  onChange={handleSexeChange} type="radio" value="Female" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Female</Text>
          </div>
        </View>
        <FormInput3
        mask="9999"
          placeholder="Date du début d’entrainement"
          onChange={handleDateDChange}
        />
        <View style={styles.row}>
          <div >
            <Text style={tailwind('text-gray-700 text-lg py-2')}>Sport pratiqué :</Text>
            <input  onChange={handleSportChange} type="radio" value="statique" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>statique</Text>
            <input  onChange={handleSportChange} type="radio" value="dynamique" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>dynamique</Text>
            <input  onChange={handleSportChange} type="radio" value="mixte" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>mixte</Text>
          </div>
        </View>
        <Text style={tailwind('text-gray-700 py-2')}>Date d’inclusion :</Text>
        <DatePicker
        color="primary"
        placeholder="YYYY-MM-DD"
        value={date}
        clearable
        minDate="1920-05-01"
        maxDate={new Date()}
        onDate={(date) => {
          setDate(date)
        }}
        onClear={() => setDate('')}
        width={250}
        onChange={(value) => setDate(value)}/>
        <FormInput3
          mask="999"
          placeholder="Nombre d’heure de sport par semaine"
          onChange={handleNhChange}
        />
        <View style={styles.row}>
          <FormButton title="Enregister" onPress={handleSubmit} />
          <FormButton title="Annuler" onPress={() => { props.navigation.navigate("PatientDetails") }} />
        </View>
      </View>
    </View>
</div></div>
      </Container>
</div>
<ParticlesBg type="cobweb" config={config} bg={true} />
</View>
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
  patientList: state.medicalService.patientList

});
const mapActionToProps = {
  infosGenerales: actions.infosGenerales
};

export default connect(mapStateToProps, mapActionToProps)(InfosGenerales);
