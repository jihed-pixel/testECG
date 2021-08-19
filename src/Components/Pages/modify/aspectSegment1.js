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

const AspectSegment = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })
    const [asp, setAsp] = useState()
    const [intervalle, setIntervalle] = useState("")


    var handle1Change = (text) => {

        setIntervalle(text)
    }
    var handle2Change = (data) => {
      if (data.target.value==="Oui")
      setAsp(true)
      if (data.target.value==="Non")
      setAsp(false)
    }

    var handleSubmit = (e) => {
        var values = {
            asp:asp,
            intervalle:intervalle
        }
        console.log(values)
        e.preventDefault();
        props.aspectsegmentPatient(props.patientList["cin"], values)
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
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Aspect de Brugada en V1 et V2 : </Text>
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}> </Text>
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("Si repolarisation précoce : préciser l’aspect du segment ST :")}</Text>
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("ascendant,")}</Text>
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("horizontal ou descendant")}</Text>
            <View style={styles.row}>
            <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("Aspect de Brugada en V1 et V2")}</Text>
                <input onChange={handle2Change} type="radio" value="Non" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle2Change} type="radio" value="Oui" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            </View>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Intervalle QT :</Text>
        <FormInput3
          placeholder="QT mesuré en ms en D2 et V5:"
          onChange={handle1Change}
        />
        <FormInput3
          placeholder="QT corrigé en ms:"
          onChange={handle1Change}
        />



<FormButton title={t("Annuler")} onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} /> 
            </View>
           </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={3}  class="col-md-6"/>  
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
    aspectsegmentPatient: actions.aspectsegmentPatient

};

export default connect(mapStateToProps, mapActionToProps)(AspectSegment);
