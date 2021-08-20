import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../Form/FormInput";
import FormButton2 from "../Form/FormButton2";
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

import './home.css';
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
const ATCDchir1 = (props) => {

  const [ATCD, setATCD] = useState("");


  var handleATCDChange = (text) => {
    setATCD(text)
  }


  var handleSubmit = (e) => {
    var values = {
      antecedent: "ATCDchir",
      atcd: ATCD
    }
    e.preventDefault();
    console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }




  return (
    <section className="landing-background4">
    <div class=" d-flex align-items-center m-4 ">
<MDBContainer  >
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
          <form>
                    <FormButton2 title="Interrogatoire" onPress={() => { props.navigation.navigate("Interrogatoire1") }} />
                    <FormButton2 title="Examen clinique" onPress={() => { props.navigation.navigate("ExamenClinique1") }} />
                    <FormButton2 title="Étude de l’ECG" onPress={() => { props.navigation.navigate("EtudeECG1") }} />
                    <FormButton2 title="Etude du complexe QRS" onPress={() => { props.navigation.navigate("EtudeQRS1") }} />
                    <FormButton2 title="Étude de l'onde T" onPress={() => { props.navigation.navigate("EtudeOndeT1") }} />
                    <FormButton2 title="Segment St" onPress={() => { props.navigation.navigate("SegmentSt1") }} />
                    <FormButton2 title="l’aspect du segment ST" onPress={() => { props.navigation.navigate("Interrogatoire1") }} />
                    <FormButton2 title="Echographie cardiaque" onPress={() => { props.navigation.navigate("Ventricule1") }} />
                    <FormButton2 title="IRM cardiaque" onPress={() => { props.navigation.navigate("FicheIRM1") }} />
                    <FormButton2 title="Epaisseurs diastoliques" onPress={() => { props.navigation.navigate("Cercle11") }} />
                    <FormButton2 title="Epaisseurs systoliques" onPress={() => { props.navigation.navigate("Cercle21") }} />
                    <FormButton2 title="Epaississement absolu" onPress={() => { props.navigation.navigate("Cercle31") }} />
                    <FormButton2 title="Epaississement relatif" onPress={() => { props.navigation.navigate("Cercle41") }} />
                    <FormButton2 title="Epreuve d'effort" onPress={() => { props.navigation.navigate("FicheEffort1") }} />
                    <FormButton2 title="Autre Epreuve d'effort" onPress={() => { props.navigation.navigate("Autre1") }} />
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("SearchPatient") }} />
          </form>
           

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
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

};

export default connect(mapStateToProps, mapActionToProps)(ATCDchir1);