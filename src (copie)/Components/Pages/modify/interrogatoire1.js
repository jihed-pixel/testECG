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
import { useTranslation } from "react-i18next";
import "../Tran/i18nextInit";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import NumericInput from 'react-numeric-input';
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

const Interrogatoire = (props) => {
  const { t } = useTranslation();
    useEffect(() => {
    })
    const [moreSub, setMortSub] = useState(false)
    const [condFam, setCondFam] = useState(false)
    const [autreCond, setAutreCond] = useState()
    const [condio, setCondio] = useState(false)
    const [autreCondio, setAutreCondio] = useState()
    const [trouble, setTrouble] = useState(false)
    const [autreTrouble, setAutreTrouble] = useState()
    const [diabete, setDiabete] = useState(false)
    const [hta, setHta] = useState(false)
    const [tabac, setTabac] = useState(false)
    const [autreTabac, setAutreTabac] = useState()
    const [chicha, setChicha] = useState(false)
    const [autreChicha, setAutreChicha] = useState()
    const [alcole, setAlcole] = useState(false)
    const [autreAlcole, setAutreAlcole] = useState()
    const [douleureTho, setDouleureTho] = useState(false)
    const [synope, setSynope] = useState(false)
    const [dyspnee, setDyspnee] = useState(false)
    const [palpitations, setPalpitations] = useState(false)
    const [antecedentCov, setAntecedentCov] = useState(false)
    const [produit, setProduit] = useState(false)
    const [drogue, setDrogue] = useState(false)
    const handle11Change = (text) => {
      setAutreCond(text)
    }
    const handle13Change = (text) => {
      setAutreCondio(text)
    }
    const handle15Change = (text) => {
      setAutreTrouble(text)
    }
    const handle16Change = (text) => {
      setAutreTabac(text)
    }
    const handle18Change = (text) => {
      setAutreChicha(text)
    }
    const handle20Change = (text) => {
      setAutreAlcole(text)
    }
    var handle21Change = (data) => {
      if (data.target.value==="Oui")
      setProduit(true)
      if (data.target.value==="Non")
      setProduit(false)
    }
    var handle22Change = (data) => {
      if (data.target.value==="Oui")
      setDrogue(true)
      if (data.target.value==="Non")
      setDrogue(false)
    }
    var handle19Change = (data) => {
      if (data.target.value==="Oui")
      setAlcole(true)
      if (data.target.value==="Non")
      setAlcole(false)
    }
    var handle17Change = (data) => {
      if (data.target.value==="Oui")
      setChicha(true)
      if (data.target.value==="Non")
      setChicha(false)
    }
    var handle14Change = (data) => {
      if (data.target.value==="Oui")
      setTrouble(true)
      if (data.target.value==="Non")
      setTrouble(false)
    }
    var handle12Change = (data) => {
      if (data.target.value==="Oui")
      setCondio(true)
      if (data.target.value==="Non")
      setCondio(false)
    }
    var handle1Change = (data) => {
        if (data.target.value==="Oui")
        setMortSub(true)
        if (data.target.value==="Non")
        setMortSub(false)
      }
      var handle10Change = (data) => {
        if (data.target.value==="Oui")
        setCondFam(true)
        if (data.target.value==="Non")
        setCondFam(false)
      }
      var handle2Change = (data) => {
        if (data.target.value==="Oui")
          setDiabete(true)
        if (data.target.value==="Non")
          setDiabete(false)
      }
      var handle3Change = (data) => {
        if (data.target.value==="Oui")
          setHta(true)
        if (data.target.value==="Non")
          setHta(false)
      }
      var handle4Change = (data) => {
        if (data.target.value==="Oui")
          setTabac(true)
        if (data.target.value==="Non")
          setTabac(false)
      }
      var handle5Change = (data) => {
        if (data.target.value==="Oui")
          setDouleureTho(true)
        if (data.target.value==="Non")
        setDouleureTho(false)
      }
      var handle6Change = (data) => {
        if (data.target.value==="Oui")
          setSynope(true)
        if (data.target.value==="Non")
        setSynope(false)
      }
      var handle7Change = (data) => {
        if (data.target.value==="Oui")
          setDyspnee(true)
        if (data.target.value==="Non")
        setDyspnee(false)
      }
      var handle8Change = (data) => {
        if (data.target.value==="Oui")
          setPalpitations(true)
        if (data.target.value==="Non")
        setPalpitations(false)
      }
      var handle9Change = (data) => {
        if (data.target.value==="Oui")
          setAntecedentCov(true)
        if (data.target.value==="Non")
        setAntecedentCov(false)
      }

    var handleSubmit = (e) => {
        var values = {
            moreSub: moreSub,
            condFam:condFam,
            autreCond:autreCond,
            condio:condio,
            autreCondio:autreCondio,
            trouble:trouble,
            autreTrouble:autreTrouble,
            diabete: diabete,
            hta: hta,
            tabac: tabac,
            autreTabac:autreTabac,
            chicha:chicha,
            autreChicha:autreChicha,
            alcole:alcole,
            autreAlcole:autreAlcole,
            douleureTho: douleureTho,
            synope: synope,
            dyspnee: dyspnee,
            palpitations:palpitations,
            antecedentCov:antecedentCov,
            produit:produit,
            drogue:drogue,
        }
        console.log(values)
        e.preventDefault();
        props.interrogatoirePatient(props.patientList["cin"], values)
        props.navigation.navigate("PatientDetails")
    }

    return (
      <section className="landing-background">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer   >
      <MDBRow>
        <MDBCol >
          <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('text-blue-700 font-bold text-3xl text-center')}>{t("L’interrogatoire")}</Text>
            <Text style={tailwind(' p-2 text-indigo-700 text-2xl')}>{t("")}Antécédents familiaux :</Text>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Mort subite :</Text>
                        <input onChange={handle1Change} type="radio" value="Non" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle1Change} type="radio" value="Oui" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>{t("")}Cardiopathie familiale:</Text>
                        <input onChange={handle10Change} type="radio" value="Non" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle10Change} type="radio" value="Oui" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    {condFam === true &&
                    <FormInput
                    placeholder="Precise"
                    onChangeText={handle11Change}
                  />}
                    <Text style={tailwind('text-lg p-2 text-indigo-700 text-2xl ')}>Antécédents personnels :</Text>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Cardiopathie :</Text>
                        <input onChange={handle12Change} type="radio" value="Non" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle12Change} type="radio" value="Oui" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    {condio === true &&
                    <FormInput
                    placeholder="Precise"
                    onChangeText={handle13Change}
                  />}
                  <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Trouble de rythme :</Text>
                        <input onChange={handle14Change} type="radio" value="Non" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle14Change} type="radio" value="Oui" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    {trouble === true &&
                    <FormInput
                    placeholder="Precise"
                    onChangeText={handle15Change}
                  />}
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-gray-700 text-lg')}>{t("")}Diabète :</Text>
                        <input onChange={handle2Change} type="radio" value="Non" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle2Change} type="radio" value="Oui" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-gray-700 text-lg')}>HTA :</Text>
                        <input onChange={handle3Change} type="radio" value="Non" name="gender5" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle3Change} type="radio" value="Oui" name="gender5" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-gray-700')}>Antécédent COVID ?</Text>
                        <input onChange={handle9Change} type="radio" value="Non" name="gender88" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle9Change} type="radio" value="Oui" name="gender88" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    <Text style={tailwind('text-lg p-2 text-indigo-700 text-2xl ')}>Habitude de vie :</Text>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Tabac :</Text>
                        <input onChange={handle4Change} type="radio" value="Non" name="gender6" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle4Change} type="radio" value="Oui" name="gender6" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    {tabac === true &&
                    <FormInput
                    placeholder="nombre(/PA)"
                    onChangeText={handle16Change}
                  />}
                  <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Chicha :</Text>
                        <input onChange={handle17Change} type="radio" value="Non" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle17Change} type="radio" value="Oui" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    {chicha === true &&
                    <FormInput
                    placeholder="nombre(c/j)"
                    onChangeText={handle18Change}
                  />}
                  <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Alcool :</Text>
                        <input onChange={handle19Change} type="radio" value="Non" name="gender8" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle19Change} type="radio" value="Oui" name="gender8" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    {alcole === true &&
                    <FormInput
                    placeholder="nombre(g/j)"
                    onChangeText={handle20Change}
                  />}
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>produit dopant :</Text>
                        <input onChange={handle21Change} type="radio" value="Non" name="gender28" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle21Change} type="radio" value="Oui" name="gender28" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    {produit === true &&
                    <FormInput
                    placeholder="nombre(g/j)"
                  />}
                  <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>drogue :</Text>
                        <input onChange={handle21Change} type="radio" value="Non" name="gender38" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle21Change} type="radio" value="Oui" name="gender38" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    {drogue === true &&
                    <FormInput
                    placeholder="nombre(g/j)"
                  />}
                    <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>{t("")}La présence d’une symptomatologie cardiaque à type de : </Text>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Douleur thoracique :</Text>
                        <input onChange={handle5Change} type="radio" value="Non" name="gender9" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle5Change} type="radio" value="Oui" name="gender9" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Syncope ou lipothymies :</Text>
                        <input onChange={handle6Change} type="radio" value="Non" name="gender10" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle6Change} type="radio" value="Oui" name="gender10" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Dyspnée d’effort :</Text>
                        <input onChange={handle7Change} type="radio" value="Non" name="gender11" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle7Change} type="radio" value="Oui" name="gender11" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Palpitations d’effort :</Text>
                        <input onChange={handle8Change} type="radio" value="Non" name="gender12" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle8Change} type="radio" value="Oui" name="gender12" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    
                    
                    <FormInput
                    placeholder="Autre Signe fonctionnel"
                  />

<FormButton title={t("Annuler")} onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
            </View>
            </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  current={1} class="col-md-6"/>   
    </div>

    </section>    );
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
    interrogatoirePatient: actions.interrogatoirePatient
};

export default connect(mapStateToProps, mapActionToProps)(Interrogatoire);
