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

const SegmentSt = (props) => {
  const { t } = useTranslation();
    useEffect(() => {
    })
    const [type, setType] = useState()
    const [D1, setD1] = useState(false)
    const [D2, setD2] = useState(false)
    const [D3, setD3] = useState(false)
    const [AVR, setAVR] = useState(false)
    const [AVL, setAVL] = useState(false)
    const [AVF, setAVF] = useState(false)
    const [V1, setV1] = useState(false)
    const [V2, setV2] = useState(false)
    const [V3, setV3] = useState(false)
    const [V4, setV4] = useState(false)
    const [V5, setV5] = useState(false)
    const [V6, setV6] = useState(false)
    const [precoce, setPrecoce] = useState(false)
    const [sioui, setSioui] = useState()

    var handle21Change = (data) => {
        if (data.target.value==="Oui")
        setPrecoce(true)
        if (data.target.value==="Non")
        setPrecoce(false)
      }
     var handle22Change = (data) => {
        setSioui(data.target.value)
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


    var handleSubmit = (e) => {
        var values = {
            type:type,
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
            precoce:precoce,
            sioui:sioui,
        }
        console.log(values)
        e.preventDefault();
        props.segmentPatient(props.patientList["cin"], values)
        props.navigation.navigate("EtudeOndeT")
    }

    return (
        <section className="landing-background109">
        <div class="row">
  <div class=" d-flex  m-4 col-md-6  " >
  <MDBContainer   >
        <MDBRow>
          <MDBCol >
            <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Etude du Segment  ST</Text>
            <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>D1 : </Text>
                     <div class="row mx-4">
                        <View style={styles.row}>
                        <div>  <InputRd id="1" name1="Iso électrique" onChange={handle8Change} type="radio" value="Iso_electrique" name="gender" /> </div>
                        <div>  <InputRd id="2" name1="Sus décalage" onChange={handle8Change} type="radio" value="Sus_decalage" name="gender" /> </div>
                        <div>  <InputRd id="3" name1="Sous décalage" onChange={handle8Change} type="radio" value="Sous_decalage" name="gender" /> </div>
                        <div>  <InputRd id="4" name1="Repolarisation précoce" onChange={handle8Change} type="radio" value="Repolarisation_precoce" name="gender" /> </div>
                        </View>    
                        </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>D2 : </Text>
                    <div class="row mx-4">
                        <View style={styles.row}>
                        <div>  <InputRd id="5" name1="Iso électrique" onChange={handle9Change} type="radio" value="Iso_electrique" name="gender1" /> </div>
                        <div>  <InputRd id="6" name1="Sus décalage" onChange={handle9Change} type="radio" value="Sus_decalage" name="gender1" /> </div>
                        <div>  <InputRd id="7" name1="Sous décalage" onChange={handle9Change} type="radio" value="Sous_decalage" name="gender1" /> </div>
                        <div>  <InputRd id="8" name1="Repolarisation précoce" onChange={handle9Change} type="radio" value="Repolarisation_precoce" name="gender1" /> </div>
                        </View>
                    </div>
                    <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>D3 : </Text>
                    <div class="row mx-4">
                        <View style={styles.row}>
                        <div>  <InputRd id="9" name1="Iso électrique" onChange={handle10Change} type="radio" value="Iso_electrique" name="gender2" /> </div>
                        <div>  <InputRd id="11" name1="Sus décalage" onChange={handle10Change} type="radio" value="Sus_decalage" name="gender2" /> </div>
                        <div>  <InputRd id="12" name1="Sous décalage" onChange={handle10Change} type="radio" value="Sous_decalage" name="gender2" /> </div>
                        <div>  <InputRd id="13" name1="Repolarisation précoce" onChange={handle10Change} type="radio" value="Repolarisation_precoce" name="gender2" /> </div>
                        </View>
                    </div>
                    
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>AVR : </Text>
                        <div class="row mx-4">
                        <View style={styles.row}>
                        <div>  <InputRd id="14" name1="Iso électrique" onChange={handle11Change} type="radio" value="Iso_electrique" name="gender3" /> </div>
                        <div>  <InputRd id="15" name1="Sus décalage" onChange={handle11Change} type="radio" value="Sus_decalage" name="gender3" /> </div>
                        <div>  <InputRd id="16" name1="Sous décalage" onChange={handle11Change} type="radio" value="Sous_decalage" name="gender3" /> </div>
                        <div>  <InputRd id="17" name1="Repolarisation précoce" onChange={handle11Change} type="radio" value="Repolarisation_precoce" name="gender3" /> </div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700')}>AVL : </Text>
                        <div class="row mx-4">
                        <View style={styles.row}>
                        <div>  <InputRd id="18" name1="Iso électrique" onChange={handle12Change} type="radio" value="Iso_electrique" name="gender4" /> </div>
                        <div>  <InputRd id="19" name1="Sus décalage" onChange={handle12Change} type="radio" value="Sus_decalage" name="gender4" /> </div>
                        <div>  <InputRd id="21" name1="Sous décalage" onChange={handle12Change} type="radio" value="Sous_decalage" name="gender4" /> </div>
                        <div>  <InputRd id="22" name1="Repolarisation précoce" onChange={handle12Change} type="radio" value="Repolarisation_precoce" name="gender4" /> </div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>AVF : </Text>
                        <div class="row mx-4">
                            <View style={styles.row}>
                        <div>  <InputRd id="23" name1="Iso électrique" onChange={handle13Change} type="radio" value="Iso_electrique" name="gender5" /> </div>
                        <div>  <InputRd id="24" name1="Sus décalage" onChange={handle13Change} type="radio" value="Sus_decalage" name="gender5" /> </div>
                        <div>  <InputRd id="25" name1="Sous décalage" onChange={handle13Change} type="radio" value="Sous_decalage" name="gender5" /> </div>
                        <div>  <InputRd id="26" name1="Repolarisation précoce" onChange={handle13Change} type="radio" value="Repolarisation_precoce" name="gender5" /> </div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V1 : </Text>
                        <div class="row mx-4">
                        <View style={styles.row}>
                        <div>  <InputRd id="27" name1="Iso électrique" onChange={handle14Change} type="radio" value="Iso_electrique" name="gender6" /> </div>
                        <div>  <InputRd id="28" name1="Sus décalage" onChange={handle14Change} type="radio" value="Sus_decalage" name="gender6" /> </div>
                        <div>  <InputRd id="29" name1="Sous décalage" onChange={handle14Change} type="radio" value="Sous_decalage" name="gender6" /> </div>
                        <div>  <InputRd id="31" name1="Repolarisation précoce" onChange={handle14Change} type="radio" value="Repolarisation_precoce" name="gender6" /> </div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V2 : </Text>
                        <div class="row mx-4">
                        <View style={styles.row}>
                        <div>  <InputRd id="32" name1="Iso électrique" onChange={handle15Change} type="radio" value="Iso_electrique" name="gender7" /> </div>
                        <div>  <InputRd id="33" name1="Sus décalage" onChange={handle15Change} type="radio" value="Sus_decalage" name="gender7" /> </div>
                        <div>  <InputRd id="34" name1="Sous décalage" onChange={handle15Change} type="radio" value="Sous_decalage" name="gender7" /> </div>
                        <div>  <InputRd id="35" name1="Repolarisation précoce" onChange={handle15Change} type="radio" value="Repolarisation_precoce" name="gender7" /> </div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V3 : </Text>
                        <div class="row mx-4">
                        <View style={styles.row}>
                        <div>  <InputRd id="36" name1="Iso électrique" onChange={handle17Change} type="radio" value="Iso_electrique" name="gender8" /> </div>
                        <div>  <InputRd id="37" name1="Sus décalage" onChange={handle17Change} type="radio" value="Sus_decalage" name="gender8" /> </div>
                        <div>  <InputRd id="38" name1="Sous décalage" onChange={handle17Change} type="radio" value="Sous_decalage" name="gender8" /> </div>
                        <div>  <InputRd id="39" name1="Repolarisation précoce" onChange={handle17Change} type="radio" value="Repolarisation_precoce" name="gender8" /> </div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V4 : </Text>
                        <div class="row mx-4"><View style={styles.row}>
                        <div>  <InputRd id="41" name1="Iso électrique" onChange={handle18Change} type="radio" value="Iso_electrique" name="gender9" /> </div>
                        <div>  <InputRd id="42" name1="Sus décalage" onChange={handle18Change} type="radio" value="Sus_decalage" name="gender9" /> </div>
                        <div>  <InputRd id="43" name1="Sous décalage" onChange={handle18Change} type="radio" value="Sous_decalage" name="gender9" /> </div>
                        <div>  <InputRd id="44" name1="Repolarisation précoce" onChange={handle18Change} type="radio" value="Repolarisation_precoce" name="gender9" /> </div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V5 : </Text>
                        <div class="row mx-4"><View style={styles.row}>
                        <div>  <InputRd id="45" name1="Iso électrique" onChange={handle19Change} type="radio" value="Iso_electrique" name="gender10" /> </div>
                        <div>  <InputRd id="46" name1="Sus décalage" onChange={handle19Change} type="radio" value="Sus_decalage" name="gender10" /> </div>
                        <div>  <InputRd id="47" name1="Sous décalage" onChange={handle19Change} type="radio" value="Sous_decalage" name="gender10" /> </div>
                        <div>  <InputRd id="48" name1="Repolarisation précoce" onChange={handle19Change} type="radio" value="Repolarisation_precoce" name="gender10" /> </div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V6 : </Text>
                        <div class="row mx-4"><View style={styles.row}>
                        <div>  <InputRd id="49" name1="Iso électrique" onChange={handle20Change} type="radio" value="Iso_electrique" name="gender11" /> </div>
                        <div>  <InputRd id="51" name1="Sus décalage" onChange={handle20Change} type="radio" value="Sus_decalage" name="gender11" /> </div>
                        <div>  <InputRd id="52" name1="Sous décalage" onChange={handle20Change} type="radio" value="Sous_decalage" name="gender11" /> </div>
                        <div>  <InputRd id="53" name1="Repolarisation précoce" onChange={handle20Change} type="radio" value="Repolarisation_precoce" name="gender11" /> </div>
                        </View>
                    </div>
                    <View style={styles.row}>
                    <div class="row mx-4">
                        <Text style={tailwind('p-2 text-Indigo-700 items-center ')}>Repolarisation précoce :</Text>
                        <InputRd id="54" name1="Non" onChange={handle21Change} type="radio" value="Non" name="gender12" /> 
                        <InputRd id="55" name1="Oui" onChange={handle21Change} type="radio" value="Oui" name="gender12" /> 
                    </div>
                    </View>
                    {precoce === true &&
                    <div class="row mx-4"><Text style={tailwind('p-2 text-Indigo-700 items-center')}>si oui </Text>
                    <div class="row mx-4"><View style={styles.row}>
                    <div>  <InputRd id="56" name1="Ascendant"  onChange={handle22Change}type="radio" value="Ascendant" name="gender13" /> </div>
                    <div>  <InputRd id="57" name1="horizontal"  onChange={handle22Change}type="radio" value="horizontal" name="gender13" /> </div>
                    <div>  <InputRd id="58" name1="descendant"  onChange={handle22Change}type="radio" value="descendant" name="gender13" /> </div>
                    </View>
                </div></div>}
                    


                <View style={styles.row}>
                    <FormButton title={t("Précédent")} onPress={() => { props.navigation.navigate("EtudeQRS") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
                </View>
                <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("EtudeOndeT") }} />
            </View>
            </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={3} class="col-md-6"/>  
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
    segmentPatient: actions.segmentPatient

};

export default connect(mapStateToProps, mapActionToProps)(SegmentSt);
