import React, { useState, useEffect } from 'react';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormButton from "../../Form/FormButton";
import JSONViewer from 'react-json-viewer';
import '../home.css';
import Scroll from "react-scroll";
var Element = Scroll.Element;
const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];
const Patient = (props) => {
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
      useEffect(() => {
        props.all()
      }, [])
      const test =props.patientList1;
      const list = [];
      {
        Object.keys(test).map((setNom, i) => (
          <div>
                    <h3 class="d-flex justify-content-between px-md-1">{setNom}</h3>
                    <p class="mb-0">{String(test[setNom].cin)}</p>
                    {
        Object.keys(test[setNom]["generalInformation"]).map((key, i) => (
          
          <div>
                    <h3 class="d-flex justify-content-between px-md-1">{key}</h3>
                    <p class="mb-0">{String(test[setNom][key])}</p>

                  </div>
                
        ))
      }
          </div>
        ))
      }
      return (

        <div>

{
        Object.keys(test).map((setNom, i) => (
          <div>
                    <h3 class="d-flex justify-content-between px-md-1">{setNom}</h3>
                    <p class="mb-0">{String(test[setNom].cin)}</p>
                    {
        Object.keys(test[setNom]["generalInformation"]).map((key, i) => (
          <div>
                    <h3 class="d-flex justify-content-between px-md-1">{key}</h3>
                    <p class="mb-0">{String(test[setNom][key])}</p>

                  </div>
                
        ))
      }
          </div>
        ))
      }<Element name="test7" className="element" id="containerElement"  style={{ height: '500px', position: "relative",  overflow: "scroll", marginBottom: '100px'}}><JSONViewer json={props.patientList1} /></Element>

          <FormButton title="Retour" onPress={() => { props.navigation.navigate("HomeAdmin") }} />
              </div>
      );
};

  const mapStateToProps = (state) => ({
      patientList1: state.medicalService.patientList1
  });
  const mapActionToProps = {
    all: actions.allPatient
  };
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2193b0',
    },
  });
  export default connect(mapStateToProps, mapActionToProps)(Patient);
