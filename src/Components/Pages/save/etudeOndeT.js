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
import InputRd from '../../Form/inputrd';
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

const EtudeOndeT = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })

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


    var handleSubmit = (e) => {
        var values = {
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
        }
        console.log(values)
        e.preventDefault();
        props.etudeOndeTPatient(props.patientList["cin"], values)
        props.navigation.navigate("AspectSegment")
    }

    return (
        <section className="landing-background200">
        <div class="row">
  <div class=" d-flex  m-4 col-md-6  " >
  <MDBContainer   >
        <MDBRow>
          <MDBCol >
            <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>{t("Étude de l'onde T")} </Text>

                     <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>D1 : </Text>
                        <InputRd id="1" name1="positive" onChange={handle8Change} type="radio" value="+" name="gender2" /> 
                        <InputRd id="2" name1="négative" onChange={handle8Change} type="radio" value="-" name="gender2" /> 
                        <InputRd id="3" name1="biphasique" onChange={handle8Change} type="radio" value="B1" name="gender2" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>D2 : </Text>
                        <InputRd id="4" name1="positive" onChange={handle9Change} type="radio" value="+" name="gender3" /> 
                        <InputRd id="5" name1="négative" onChange={handle9Change} type="radio" value="-" name="gender3" /> 
                        <InputRd id="6" name1="biphasique" onChange={handle9Change} type="radio" value="B1" name="gender3" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>D3 : </Text>
                        <InputRd id="7" name1="positive" onChange={handle10Change} type="radio" value="+" name="gender4" /> 
                        <InputRd id="8" name1="négative" onChange={handle10Change} type="radio" value="-" name="gender4" /> 
                        <InputRd id="9" name1="biphasique" onChange={handle10Change} type="radio" value="B1" name="gender4" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>AVR : </Text>
                        <InputRd id="10" name1="positive" onChange={handle11Change} type="radio" value="+" name="gender5" /> 
                        <InputRd id="11" name1="négative" onChange={handle11Change} type="radio" value="-" name="gender5" /> 
                        <InputRd id="12" name1="biphasique" onChange={handle11Change} type="radio" value="B1" name="gender5" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>AVL : </Text>
                        <InputRd id="13" name1="positive" onChange={handle12Change} type="radio" value="+" name="gender6" /> 
                        <InputRd id="14" name1="négative" onChange={handle12Change} type="radio" value="-" name="gender6" /> 
                        <InputRd id="15" name1="biphasique" onChange={handle12Change} type="radio" value="B1" name="gender6" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>AVF : </Text>
                        <InputRd id="16" name1="positive" onChange={handle13Change} type="radio" value="+" name="gender7" /> 
                        <InputRd id="17" name1="négative" onChange={handle13Change} type="radio" value="-" name="gender7" /> 
                        <InputRd id="18" name1="biphasique" onChange={handle13Change} type="radio" value="B1" name="gender7" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V1 : </Text>
                        <InputRd id="19" name1="positive" onChange={handle14Change} type="radio" value="+" name="gender8" /> 
                        <InputRd id="20" name1="négative" onChange={handle14Change} type="radio" value="-" name="gender8" /> 
                        <InputRd id="21" name1="biphasique" onChange={handle14Change} type="radio" value="B1" name="gender8" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V2 : </Text>
                        <InputRd id="22" name1="positive" onChange={handle15Change} type="radio" value="+" name="gender9" /> 
                        <InputRd id="23" name1="négative" onChange={handle15Change} type="radio" value="-" name="gender9" /> 
                        <InputRd id="24" name1="biphasique" onChange={handle15Change} type="radio" value="B1" name="gender9" /> 
                    </div>

                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V3 : </Text>
                        <InputRd id="25" name1="positive" onChange={handle17Change} type="radio" value="+" name="gender11" /> 
                        <InputRd id="26" name1="négative" onChange={handle17Change} type="radio" value="-" name="gender11" /> 
                        <InputRd id="27" name1="biphasique" onChange={handle17Change} type="radio" value="B1" name="gender11" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V4 : </Text>
                        <InputRd id="28" name1="positive" onChange={handle18Change} type="radio" value="+" name="gender12" /> 
                        <InputRd id="29" name1="négative" onChange={handle18Change} type="radio" value="-" name="gender12" /> 
                        <InputRd id="30" name1="biphasique" onChange={handle18Change} type="radio" value="B1" name="gender12" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V5 : </Text>
                        <InputRd id="31" name1="positive" onChange={handle19Change} type="radio" value="+" name="gender13" /> 
                        <InputRd id="32" name1="négative" onChange={handle19Change} type="radio" value="-" name="gender13" /> 
                        <InputRd id="33" name1="biphasique" onChange={handle19Change} type="radio" value="B1" name="gender13" /> 
                    </div>
                    <div class="row mx-4">
                        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>V6 : </Text>
                        <InputRd id="34" name1="positive" onChange={handle20Change} type="radio" value="+" name="gender14" /> 
                        <InputRd id="35" name1="négative" onChange={handle20Change} type="radio" value="-" name="gender14" /> 
                        <InputRd id="36" name1="biphasique" onChange={handle20Change} type="radio" value="B1" name="gender14" /> 
                    </div>





                <View style={styles.row}>
                    <FormButton title={t("Précédent")} onPress={() => { props.navigation.navigate("AspectSegment") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
                </View>
                <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("AspectSegment") }} />
            </View>
            </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  current={3} class="col-md-5"/>  
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
    etudeOndeTPatient: actions.etudeOndeTPatient

};

export default connect(mapStateToProps, mapActionToProps)(EtudeOndeT);
