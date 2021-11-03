import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormButton2 from "../../Form/FormButton2";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';

import '../home.css';
const HomeAdmin = (props) => {
  useEffect(() => {
    props.all()
  }, [])
  const [toggleCheckBox, setToggleCheckBox] = useState(false)





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
    console.log(props.patientList1)
  return (
<section className="landing-background4">
    <div class=" d-flex align-items-center m-4 ">
<MDBContainer  >
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
          
          <form>
          <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-9xl')}>Bienvenue a </Text>
        <Text style={tailwind('text-gray-700 font-bold py-2 text-9xl')}>Plate-forme SARS-COV2</Text>
        <Text style={tailwind('text-gray-700 font-bold py-2 text-9xl')}>et autre maladie infectieuse Admin</Text>
        </View>
        <FormButton2 title="Patient" onPress={() => props.navigation.navigate("Patient")} />
        <FormButton2 title="Patient1" onPress={() => props.navigation.navigate("Patient1")} />
          <FormButton2 title=" File patient " onPress={() => props.navigation.navigate("FilePatient")} />
          <FormButton2 title=" Csv patient "onPress={() => props.navigation.navigate("Csv")} />
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("Open") }} />
          </form>
           

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </section>


    
  );
};
const mystyle = {
      color: "white",

      backgroundposition: "center",
      backgroundrepeat: "no-repeat",
      backgroundsize: "cover"
    };
    const mapStateToProps = (state) => ({
      loggedUserAdmin: state.medicalService.loggedUserAdmin,
      
    });
    const mapActionToProps = {
      loginAdmin: actions.loginAdmin,
      all: actions.allPatient
    };

export default  connect(mapStateToProps, mapActionToProps)(HomeAdmin);