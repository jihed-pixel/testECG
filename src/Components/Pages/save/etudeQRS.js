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
      <section className="landing-background">
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
              <input onChange={handle3Change} type="radio" value="Axe non devié" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Axe non devié</Text>
              <input onChange={handle3Change} type="radio" value="Déviation axiale gauche" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>"Déviation axiale gauche"</Text>
              <input onChange={handle3Change} type="radio" value="Déviation axiale droite" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>"Déviation axiale droite"</Text>
            </div>
            </View>
            
            <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Onde Q</Text>
              <input onChange={handle4Change} type="radio" value="Non" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
              <input onChange={handle4Change} type="radio" value="Oui" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
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
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>HVG :</Text>
              <input onChange={handle8Change} type="radio" value="Non" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
              <input onChange={handle8Change} type="radio" value="Oui" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            </View>
            {surchrge === true &&
                    <View style={styles.row}>
                    <div  >
                      <Text style={tailwind('text-lg p-2 text-Indigo-700')}>si oui :</Text>
                      <input  type="radio" value="systolique" name="gender4"onChange={handle11Change} /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Surchrge systolique</Text>
                      <input  type="radio" value="diastolique" name="gender4"onChange={handle11Change} /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Surchrge diastolique</Text>
                    </div>
                    </View>}
                    <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Bloc de branche :</Text>
            <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>BBG : </Text>
              <input onChange={handle6Change} type="radio" value="Non" name="gender5" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
              <input onChange={handle6Change} type="radio" value="Oui" name="gender5" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            </View>
            {bbg === true &&
                    <View style={styles.row}>
                    <div  >
                      <Text style={tailwind('text-lg p-2 text-Indigo-700')}>si oui :</Text>
                      <input  type="radio" value="incomplet" name="gender6" onChange={handle12Change}/> <Text style={tailwind('text-lg p-2 text-gray-700')}>incomplet</Text>
                      <input  type="radio" value="complet" name="gender6" onChange={handle12Change}/> <Text style={tailwind('text-lg p-2 text-gray-700')}>complet</Text>
                    </div>
                    </View>}
            <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>BBD : </Text>
              <input onChange={handle7Change} type="radio" value="Non" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
              <input onChange={handle7Change} type="radio" value="Oui" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            </View>
            {bbd === true &&
                    <View style={styles.row}>
                    <div  >
                      <Text style={tailwind('text-lg p-2 text-Indigo-700')}>si oui :</Text>
                      <input  type="radio" value="incomplet" name="gender8" onChange={handle13Change}/> <Text style={tailwind('text-lg p-2 text-gray-700')}>incomplet</Text>
                      <input  type="radio" value="complet" name="gender8" onChange={handle13Change}/> <Text style={tailwind('text-lg p-2 text-gray-700')}>complet</Text>
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
