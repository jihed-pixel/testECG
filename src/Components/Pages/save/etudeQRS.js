import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import FormInput from '../../Form/FormInput';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
import FormInput3 from "../../Form/FormInput3";
import { useTranslation } from "react-i18next";
import "../Tran/i18nextInit";
import InputRd from '../../Form/inputrd';
import FormCheckBox from "../../Form/CheckBox";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

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

const EtudeQRS = (props) => {
  const { t } = useTranslation();
    useEffect(() => {
    })
    const [duree, setDuree] = useState(0)
    const [axeNormale, setAxeNormale] = useState(false)
    const [deviation, setDeviation] = useState(0)
    const [ondeQ, setOndeQ] = useState(false)
    const [siOui, setSiOui ] = useState()
    const [scolow, setScolow] = useState(0)
    const [bbg, setBbg] = useState(false)
    const [bbd, setBbd] = useState(false)
    const [surchrge , setSurchrge ] = useState(false)
    const [sioui, setSioui ] = useState()
    const [sioui2, setSioui2 ] = useState()
    const [sioui3, setSioui3 ] = useState()    
    var handle10Change = (newValue, text) => {
      if (newValue == true) setSiOui (siOui + " " + text)
      else setSiOui (siOui.replace(text + " ", ""))
      
  }
    var handle11Change = (text) => {
      setSioui(text.target.value)
    }
    var handle12Change = (text) => {
      setSioui2(text.target.value)
    }
    var handle13Change = (text) => {
      setSioui3(text.target.value)
    }
    var handle1Change = (text) => {
      setDuree(text)
    }
    var handle2Change = (data) => {
      if (data.target.value==="Oui")
      setAxeNormale(true)
      if (data.target.value==="Non")
      setAxeNormale(false)
    }
    var handle3Change = (text) => {

      setDeviation(text.target.value)
    }
    var handle4Change = (data) => {
      if (data.target.value==="Oui")
      setOndeQ(true)
      if (data.target.value==="Non")
      setOndeQ(false)
    }
    var handle5Change = (text) => {

      setScolow(text)
    }
    var handle6Change = (data) => {
      if (data.target.value==="Oui")
      setBbg(true)
      if (data.target.value==="Non")
      setBbg(false)
    }

    var handle7Change = (data) => {
        if (data.target.value==="Oui")
        setBbd(true)
        if (data.target.value==="Non")
        setBbd(false)
      }
      var handle8Change = (data) => {
        if (data.target.value==="Oui")
        setSurchrge (true)
        if (data.target.value==="Non")
        setSurchrge (false)
      }

    var handleSubmit = (e) => {
        var values = {
          duree: duree,
          axeNormale:axeNormale,
          deviation:deviation,
          ondeQ:ondeQ,
          siOui:siOui,
          scolow:scolow,
          surchrge :surchrge ,
          bbg:bbg,
          bbd:bbd,
          sioui:sioui,
          sioui2:sioui2,
          sioui3:sioui3,
        }
        console.log(values)
        e.preventDefault();
        props.etudeQRSPatient(props.patientList["cin"], values)
        props.navigation.navigate("SegmentSt")
    }

    return (
      <section className="landing-background203">
      <div>
      
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer   >
      <MDBRow>
        <MDBCol >
          <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Etude du complexe QRS</Text>
            <FormInput
            type="number"
            placeholder="Durée de QRS(ms)"
            onChangeText={handle1Change}
            />
            <FormInput
            type="number"
            placeholder="Axe de QRS en degré:"
            onChangeText={handle2Change}
            />
            
            
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}>orientation de l'axe:</Text>
            <View style={styles.row}>
            <div >
              <InputRd id="1" name1="Axe non devié" onChange={handle3Change} type="radio" value="Axe non devié" name="gender1" /> 
              <InputRd id="2" name1="Déviation axiale gauche" onChange={handle3Change} type="radio" value="Déviation axiale gauche" name="gender1" /> 
              <InputRd id="3" name1="Déviation axiale droite" onChange={handle3Change} type="radio" value="Déviation axiale droite" name="gender1" /> 
            </div>
            </View>
            
            <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Onde Q</Text>
              <InputRd id="4" name1="Non" onChange={handle4Change} type="radio" value="Non" name="gender2" /> 
              <InputRd id="5" name1="Oui" onChange={handle4Change} type="radio" value="Oui" name="gender2" /> 
            </div>
            </View>
            {ondeQ === true &&
            <div>
            <FormCheckBox text='D1' value={false} onPress={handle10Change} />
            <FormCheckBox text='D2' value={false} onPress={handle10Change} />
            <FormCheckBox text='D3' value={false} onPress={handle10Change} />
            <FormCheckBox text="AVR" value={false} onPress={handle10Change} />
            <FormCheckBox text="AVL" value={false}  onPress={handle10Change} />
            <FormCheckBox text=" AVF" value={false}  onPress={handle10Change} />
            <FormCheckBox text=" V1" value={false}  onPress={handle10Change} />
            <FormCheckBox text=" V2" value={false}  onPress={handle10Change} />
            <FormCheckBox text=" V3" value={false}  onPress={handle10Change} />
            <FormCheckBox text=" V4" value={false}  onPress={handle10Change} />
            <FormCheckBox text=" V5" value={false}  onPress={handle10Change} />
            <FormCheckBox text=" V6" value={false}  onPress={handle10Change} />
        </div>
                   }
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Indice de Sokolow:</Text>
            <FormInput
            type="number"
            placeholder="Indice de sokolow en mm"
            onChangeText={handle5Change}
            />
            <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>HVG :</Text>
              <InputRd id="6" name1="Non"  onChange={handle8Change} type="radio" value="Non" name="gender3" /> 
              <InputRd id="7" name1="Oui"  onChange={handle8Change} type="radio" value="Oui" name="gender3" /> 
            </div>
            </View>
            {surchrge === true &&
                    <View style={styles.row}>
                    <div class="row mx-4">
                      <Text style={tailwind('text-lg p-2 text-Indigo-700')}>si oui :</Text>
                      <InputRd id="8" name1="Surchrge systolique" type="radio" value="systolique" name="gender4"onChange={handle11Change} /> 
                      <InputRd id="9" name1="Surchrge diastolique" type="radio" value="diastolique" name="gender4"onChange={handle11Change} /> 
                    </div>
                    </View>}
                    <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Bloc de branche :</Text>
            <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>BBG : </Text>
              <InputRd id="9" name1="Non"  onChange={handle6Change} type="radio" value="Non" name="gender5" /> 
              <InputRd id="10" name1="Oui" onChange={handle6Change} type="radio" value="Oui" name="gender5" /> 
            </div>
            </View>
            {bbg === true &&
                    <View style={styles.row}>
                    <div class="row mx-4">
                      <Text style={tailwind('text-lg p-2 text-Indigo-700')}>si oui :</Text>
                      <InputRd id="11" name1="incomplet"  type="radio" value="incomplet" name="gender6" onChange={handle12Change}/> 
                      <InputRd id="12" name1="complet" type="radio" value="complet" name="gender6" onChange={handle12Change}/> 
                    </div>
                    </View>}
            <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>BBD : </Text>
              <InputRd id="13" name1="Non" onChange={handle7Change} type="radio" value="Non" name="gender7" /> 
              <InputRd id="14" name1="Oui" onChange={handle7Change} type="radio" value="Oui" name="gender7" /> 
            </div>
            </View>
            {bbd === true &&
                    <View style={styles.row}>
                    <div class="row mx-4">
                      <Text style={tailwind('text-lg p-2 text-Indigo-700')}>si oui :</Text>
                      <InputRd id="15" name1="incomplet" type="radio" value="incomplet" name="gender8" onChange={handle13Change}/> 
                      <InputRd id="16" name1="complet" type="radio" value="complet" name="gender8" onChange={handle13Change}/> 
                    </div>
                    </View>}
                <View style={styles.row}>
                    <FormButton title={t("Précédent")} onPress={() => { props.navigation.navigate("EtudeECG") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
                </View>
                <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("SegmentSt") }} />
            </View>
            </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  current={3} class="col-md-4"/>  
    </div>
<div/>
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
    patientList: state.medicalService.patientList
});
const mapActionToProps = {
    etudeQRSPatient: actions.etudeQRSPatient

};

export default connect(mapStateToProps, mapActionToProps)(EtudeQRS);
