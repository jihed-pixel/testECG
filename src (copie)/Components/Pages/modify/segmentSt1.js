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

    var handle21Change = (data) => {
        if (data.target.value==="Oui")
        setPrecoce(true)
        if (data.target.value==="Non")
        setPrecoce(false)
      }
     var handle3Change = (data) => {
        setType(data.target.value)
      }

      var handle8Change = (data) => {
        if (data.target.value==="Oui")
        setD1(true)
        if (data.target.value==="Non")
        setD1(false)
      }
      var handle9Change = (data) => {
        if (data.target.value==="Oui")
        setD2(true)
        if (data.target.value==="Non")
        setD2(false)
        }
    var handle10Change = (data) => {
        if (data.target.value==="Oui")
        setD3(true)
        if (data.target.value==="Non")
        setD3(false)
    }
    var handle11Change = (data) => {
        if (data.target.value==="Oui")
        setAVR(true)
        if (data.target.value==="Non")
        setAVR(false)
    }
    var handle12Change = (data) => {
        if (data.target.value==="Oui")
        setAVL(true)
        if (data.target.value==="Non")
        setAVL(false)
    }
    var handle13Change = (data) => {
        if (data.target.value==="Oui")
        setAVF(true)
        if (data.target.value==="Non")
        setAVF(false)
    }
    var handle14Change = (data) => {
        if (data.target.value==="Oui")
        setV1(true)
        if (data.target.value==="Non")
        setV1(false)
    }
    var handle15Change = (data) => {
        if (data.target.value==="Oui")
        setV2(true)
        if (data.target.value==="Non")
        setV2(false)
    }

    var handle17Change = (data) => {
        if (data.target.value==="Oui")
        setV3(true)
        if (data.target.value==="Non")
        setV3(false)
    }
    var handle18Change = (data) => {
        if (data.target.value==="Oui")
        setV4(true)
        if (data.target.value==="Non")
        setV4(false)
    }
    var handle19Change = (data) => {
        if (data.target.value==="Oui")
        setV5(true)
        if (data.target.value==="Non")
        setV5(false)
    }
    var handle20Change = (data) => {
        if (data.target.value==="Oui")
        setV6(true)
        if (data.target.value==="Non")
        setV6(false)
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
        }
        console.log(values)
        e.preventDefault();
        props.segmentPatient(props.patientList["cin"], values)
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
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Etude du Segment  ST</Text>
            <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>D1 : </Text>
                     <div  >
                        <View style={styles.row}>
                        <div>  <input onChange={handle8Change} type="radio" value="Iso_electrique" name="gender" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle8Change} type="radio" value="Sus_decalage" name="gender" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle8Change} type="radio" value="Sous_decalage" name="gender" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle8Change} type="radio" value="Repolarisation_precoce" name="gender" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>    
                        </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>D2 : </Text>
                    <div  >
                        <View style={styles.row}>
                        <div>  <input onChange={handle9Change} type="radio" value="Iso_electrique" name="gender1" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle9Change} type="radio" value="Sus_decalage" name="gender1" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle9Change} type="radio" value="Sous_decalage" name="gender1" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle9Change} type="radio" value="Repolarisation_precoce" name="gender1" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                    <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>D3 : </Text>
                    <div  >
                        <View style={styles.row}>
                        <div>  <input onChange={handle10Change} type="radio" value="Iso_electrique" name="gender2" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle10Change} type="radio" value="Sus_decalage" name="gender2" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle10Change} type="radio" value="Sous_decalage" name="gender2" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle10Change} type="radio" value="Repolarisation_precoce" name="gender2" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                    
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>AVR : </Text>
                        <div  >
                        <View style={styles.row}>
                        <div>  <input onChange={handle11Change} type="radio" value="Iso_electrique" name="gender3" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle11Change} type="radio" value="Sus_decalage" name="gender3" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle11Change} type="radio" value="Sous_decalage" name="gender3" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle11Change} type="radio" value="Repolarisation_precoce" name="gender3" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700')}>AVL : </Text>
                        <div  >
                        <View style={styles.row}>
                        <div>  <input onChange={handle12Change} type="radio" value="Iso_electrique" name="gender4" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle12Change} type="radio" value="Sus_decalage" name="gender4" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle12Change} type="radio" value="Sous_decalage" name="gender4" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle12Change} type="radio" value="Repolarisation_precoce" name="gender4" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>AVF : </Text>
                        <div  >
                            <View style={styles.row}>
                        <div>  <input onChange={handle13Change} type="radio" value="Iso_electrique" name="gender5" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle13Change} type="radio" value="Sus_decalage" name="gender5" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle13Change} type="radio" value="Sous_decalage" name="gender5" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle13Change} type="radio" value="Repolarisation_precoce" name="gender5" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V1 : </Text>
                        <div  >
                        <View style={styles.row}>
                        <div>  <input onChange={handle14Change} type="radio" value="Iso_electrique" name="gender6" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle14Change} type="radio" value="Sus_decalage" name="gender6" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle14Change} type="radio" value="Sous_decalage" name="gender6" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle14Change} type="radio" value="Repolarisation_precoce" name="gender6" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V2 : </Text>
                        <div  >
                        <View style={styles.row}>
                        <div>  <input onChange={handle15Change} type="radio" value="Iso_electrique" name="gender7" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle15Change} type="radio" value="Sus_decalage" name="gender7" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle15Change} type="radio" value="Sous_decalage" name="gender7" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle15Change} type="radio" value="Repolarisation_precoce" name="gender7" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V3 : </Text>
                        <div  >
                        <View style={styles.row}>
                        <div>  <input onChange={handle17Change} type="radio" value="Iso_electrique" name="gender8" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle17Change} type="radio" value="Sus_decalage" name="gender8" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle17Change} type="radio" value="Sous_decalage" name="gender8" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle17Change} type="radio" value="Repolarisation_precoce" name="gender8" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V4 : </Text>
                        <div  ><View style={styles.row}>
                        <div>  <input onChange={handle18Change} type="radio" value="Iso_electrique" name="gender9" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle18Change} type="radio" value="Sus_decalage" name="gender9" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle18Change} type="radio" value="Sous_decalage" name="gender9" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle18Change} type="radio" value="Repolarisation_precoce" name="gender9" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V5 : </Text>
                        <div  ><View style={styles.row}>
                        <div>  <input onChange={handle19Change} type="radio" value="Iso_electrique" name="gender10" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle19Change} type="radio" value="Sus_decalage" name="gender10" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle19Change} type="radio" value="Sous_decalage" name="gender10" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle19Change} type="radio" value="Repolarisation_precoce" name="gender10" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                        <Text style={tailwind(' p-2 text-Indigo-700 items-center')}>V6 : </Text>
                        <div  ><View style={styles.row}>
                        <div>  <input onChange={handle20Change} type="radio" value="Iso_electrique" name="gender11" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Iso électrique")}</Text></div>
                        <div>  <input onChange={handle20Change} type="radio" value="Sus_decalage" name="gender11" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sus décalage")}</Text></div>
                        <div>  <input onChange={handle20Change} type="radio" value="Sous_decalage" name="gender11" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Sous décalage")}</Text></div>
                        <div>  <input onChange={handle20Change} type="radio" value="Repolarisation_precoce" name="gender11" /> <Text style={tailwind(' p-2 text-gray-700')}>{t("Repolarisation précoce")}</Text></div>
                        </View>
                    </div>
                    <View style={styles.row}>
                    <div  >
                        <Text style={tailwind('p-2 text-Indigo-700 items-center ')}>Repolarisation précoce :</Text>
                        <input onChange={handle21Change} type="radio" value="Non" name="gender12" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                        <input onChange={handle21Change} type="radio" value="Oui" name="gender12" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
                    </div>
                    </View>
                    {precoce === true &&
                    <div  ><Text style={tailwind('p-2 text-Indigo-700 items-center')}>si oui </Text>
                    <div  ><View style={styles.row}>
                    <div>  <input  type="radio" value="Ascendant" name="gender13" /> <Text style={tailwind(' p-2 text-gray-700')}>Ascendant</Text></div>
                    <div>  <input  type="radio" value="horizontal" name="gender13" /> <Text style={tailwind(' p-2 text-gray-700')}>horizontal</Text></div>
                    <div>  <input  type="radio" value="descendant" name="gender13" /> <Text style={tailwind(' p-2 text-gray-700')}>descendant</Text></div>
                    </View>
                </div></div>}
                    


                <FormButton title={t("Annuler")} onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
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
