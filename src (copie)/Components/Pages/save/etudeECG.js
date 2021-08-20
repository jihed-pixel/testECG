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

const EtudeECG = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })
    const [d2, setd2] = useState("")
    const [avr, setavr] = useState("")
    const [rythme, setRythme] = useState(false)
    const [fc, setFc] = useState(0)
    const [duree, setDuree] = useState(0)
    const [amplitude, setAmplitude] = useState(0)
    const [D1, setD1] = useState("")
    const [D2, setD2] = useState("")
    const [D3, setD3] = useState("")
    const [AVR, setAVR] = useState("")
    const [AVL, setAVL] = useState("")
    const [AVF, setAVF] = useState("")
    const [V1, setV1] = useState("")
    const [V2, setV2] = useState("")
    const [V3, setV3] = useState("")
    const [V4, setV4] = useState("")
    const [V5, setV5] = useState("")
    const [V6, setV6] = useState("")
    const [intervallPR, setIntervallPR] = useState(0)
    var handleChange = (text) => {

        setRythme(text.target.value)
    }
    var handle1Change = (text) => {

        setd2(text.target.value)
    }
    var handle2Change = (text) => {

        setavr(text.target.value)
    }
     
      var handle5Change = (text) => {

        setFc(text)
      }
      var handle6Change = (text) => {

        setDuree(text)
      }
      var handle7Change = (text) => {

        setAmplitude(text)
      }
      var handle8Change = (data) => {
        setD1(data.target.value)
      }
      var handle9Change = (data) => {
        setD2(data.target.value)
    }
    var handle10Change = (data) => {
        setD3(data.target.value)
    }
    var handle11Change = (data) => {
        setAVR(data.target.value)
    }
    var handle12Change = (data) => {
        setAVL(data.target.value)
    }
    var handle13Change = (data) => {
        setAVF(data.target.value)
    }
    var handle14Change = (data) => {
        setV1(data.target.value)
    }
    var handle15Change = (data) => {
        setV2(data.target.value)
    }

    var handle17Change = (data) => {
        setV3(data.target.value)
    }
    var handle18Change = (data) => {
        setV4(data.target.value)
    }
    var handle19Change = (data) => {
        setV5(data.target.value)
    }
    var handle20Change = (data) => {
        setV6(data.target.value)
    }
    var handle21Change = (text) => {

        setIntervallPR(text)
    }

    var handleSubmit = (e) => {
        var values = {
            d21:d2,
            avr1:avr,
            rythme:rythme,
            fc:fc,
            duree:duree,
            amplitude:amplitude,
            d1:D1,
            d2:D2,
            d3:D3,
            avr:AVR,
            avl:AVL,
            avf:AVF,
            v1:V1,
            v2:V2,
            v3:V3,
            v4:V4,
            v5:V5,
            v6:V6,
            intervallPR:intervallPR
        }
        console.log(values)
        e.preventDefault();
        props.etudeECGPatient(props.patientList["cin"], values)
        props.navigation.navigate("EtudeQRS")
    }

    return (
        <section className="landing-backgroundt1">
        <div class="row">
  <div class=" d-flex  m-4 col-md-6  " >
  <MDBContainer   >
        <MDBRow>
          <MDBCol >
            <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('text-blue-700 font-bold text-3xl text-center')}>{t("Étude de l’ECG")}</Text>
            <Text style={tailwind(' p-2 text-indigo-700 text-2xl')}>Le rythme cardiaque:</Text>
            <div  >
        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Rythme: </Text>
        <input onChange={handleChange} type="radio" value="sinusal" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>sinusal</Text>
        <input onChange={handleChange} type="radio" value="jonctionnel" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>jonctionnel</Text>
        <input onChange={handleChange} type="radio" value="idioventriculaire" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>idioventriculaire</Text>
        </div>
            
        <div  >
        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Polarité onde P en D2: </Text>
        <input onChange={handle1Change} type="radio" value="+" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
        <input onChange={handle1Change} type="radio" value="-" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
        <input onChange={handle1Change} type="radio" value="B1" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
        </div>
        <div  >
        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Polarité onde P en AVR: </Text>
        <input onChange={handle2Change} type="radio" value="+" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
        <input onChange={handle2Change} type="radio" value="-" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
        <input onChange={handle2Change} type="radio" value="B1" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
        </div>
            
                    
                    <Text style={tailwind(' p-2 text-indigo-700 text-2xl')}>Fréquence cardiaque (FC):</Text>
                    <FormInput
                    placeholder={t("La fréquence en battements par minute")}
                    onChangeText={handle5Change}
                     />
                     <Text style={tailwind(' p-2 text-indigo-700 text-2xl')}>Analyse de l’onde P en D 2:</Text>
                      <FormInput
                      type="number"
                    placeholder={t("Durée de l’onde P(ms)")}
                    onChangeText={handle6Change}
                     />
                      <FormInput
                      type="number"
                    placeholder={t("Amplitude de l’onde P(mv)")}
                    onChangeText={handle7Change}
                     />
                     <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>D1 : </Text>
                        <input onChange={handle8Change} type="radio" value="+" name="gender6" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle8Change} type="radio" value="-" name="gender6" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle8Change} type="radio" value="B1" name="gender6" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>D2 : </Text>
                        <input onChange={handle9Change} type="radio" value="+" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle9Change} type="radio" value="-" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle9Change} type="radio" value="B1" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>D3 : </Text>
                        <input onChange={handle10Change} type="radio" value="+" name="gender8" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle10Change} type="radio" value="-" name="gender8" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle10Change} type="radio" value="B1" name="gender8" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>AVR : </Text>
                        <input onChange={handle11Change} type="radio" value="+" name="gender9" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle11Change} type="radio" value="-" name="gender9" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle11Change} type="radio" value="B1" name="gender9" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>AVL : </Text>
                        <input onChange={handle12Change} type="radio" value="+" name="gender10" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle12Change} type="radio" value="-" name="gender10" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle12Change} type="radio" value="B1" name="gender10" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>AVF : </Text>
                        <input onChange={handle13Change} type="radio" value="+" name="gender17" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle13Change} type="radio" value="-" name="gender17" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle13Change} type="radio" value="B1" name="gender17" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V1 : </Text>
                        <input onChange={handle14Change} type="radio" value="+" name="gender18" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle14Change} type="radio" value="-" name="gender18" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle14Change} type="radio" value="B1" name="gender18" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V2 : </Text>
                        <input onChange={handle15Change} type="radio" value="+" name="gender19" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle15Change} type="radio" value="-" name="gender19" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle15Change} type="radio" value="B1" name="gender19" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>

                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V3 : </Text>
                        <input onChange={handle17Change} type="radio" value="+" name="gender11" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle17Change} type="radio" value="-" name="gender11" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle17Change} type="radio" value="B1" name="gender11" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V4 : </Text>
                        <input onChange={handle18Change} type="radio" value="+" name="gender12" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle18Change} type="radio" value="-" name="gender12" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle18Change} type="radio" value="B1" name="gender12" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V5 : </Text>
                        <input onChange={handle19Change} type="radio" value="+" name="gender13" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle19Change} type="radio" value="-" name="gender13" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle19Change} type="radio" value="B1" name="gender13" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>
                    <div  >
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V6 : </Text>
                        <input onChange={handle20Change} type="radio" value="+" name="gender14" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("positive")}</Text>
                        <input onChange={handle20Change} type="radio" value="-" name="gender14" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("négative")}</Text>
                        <input onChange={handle20Change} type="radio" value="B1" name="gender14" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("biphasique")}</Text>
                    </div>

                    <Text style={tailwind(' p-2 text-indigo-700 text-2xl')}>Intervalle PR:</Text>
                      <FormInput
                      type="number"
                    placeholder={t("PR mesuré")}
                    onChangeText={handle21Change}
                     />


                <View style={styles.row}>
                    <FormButton title={t("Précédent")} onPress={() => { props.navigation.navigate("ExamenClinique") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
                </View>
                <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("EtudeQRS") }} />
            </View>
            </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  current={3} class="col-md-6"/>  
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
    etudeECGPatient: actions.etudeECGPatient

};

export default connect(mapStateToProps, mapActionToProps)(EtudeECG);



