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
import NumericInput from 'react-numeric-input';
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

const Cercle3 = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })
    const [v, setV] = useState()
    const [v1, setV1] = useState()
    const [v2, setV2] = useState()
    const [v3, setV3] = useState()
    const [v4, setV4] = useState()
    const [v5, setV5] = useState()
    const [v6, setV6] = useState()
    const [v7, setV7] = useState()
    const [v8, setV8] = useState()
    const [v9, setV9] = useState()
    const [v10, setV10] = useState()
    const [v11, setV11] = useState()
    const [v12, setV12] = useState()
    const [v13, setV13] = useState()
    const [v14, setV14] = useState()
    const [v15, setV15] = useState()
    const [v16, setV16] = useState()

    var handleChange = (text) => {
        setV(text)
    }
    var handle1Change = (text) => {
        setV1(text)
    }
    var handle2Change = (text) => {
        setV2(text)
    }
    var handle3Change = (text) => {
        setV3(text)
    }
    var handle4Change = (text) => {
        setV4(text)
    }
    var handle5Change = (text) => {
        setV5(text)
    }
    var handle6Change = (text) => {
        setV6(text)
    }
    var handle7Change = (text) => {
        setV7(text)
    }
    var handle8Change = (text) => {
        setV8(text)
    }
    var handle9Change = (text) => {
        setV9(text)
    }
    var handle10Change = (text) => {
        setV10(text)
    }
    var handle11Change = (text) => {
        setV11(text)
    }
    var handle12Change = (text) => {
        setV12(text)
    }
    var handle13Change = (text) => {
        setV13(text)
    }
    var handle14Change = (text) => {
        setV14(text)
    }
    var handle15Change = (text) => {
        setV15(text)
    }
    var handle16Change = (text) => {
        setV16(text)
    }
    

    var handleSubmit = (e) => {
        var values = {
            v:v,
            v1:v1,
            v2:v2,
            v3:v3,
            v4:v4,
            v5:v5,
            v6:v6,
            v7:v7,
            v8:v8,
            v9:v9,
            v10:v10,
            v11:v11,
            v12:v12,
            v13:v13,
            v14:v14,
            v15:v15,
            v16:v16
            
        }
        console.log(values)
        e.preventDefault();
        props.cercle3Patient(props.patientList["cin"], values)
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
            <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>{t("Epaississement absolu")}</Text>
            <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("")}</Text>
            <label><h3>v</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handleChange} />
            </label>
            <label><h3>v1</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle1Change} />
            </label>
            <label><h3>v2</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle2Change} />
            </label>
            <label><h3>v3</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle3Change} />
            </label>
            <label><h3>v4</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle4Change} />
            </label>
            <label><h3>v5</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle5Change} />
            </label>
            <label><h3>v6</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle6Change} />
            </label>
            <label><h3>v7</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle7Change} />
            </label>
            <label><h3>v8</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle8Change} />
            </label>
            <label><h3>v9</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle9Change} />
            </label>
            <label><h3>v10</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle10Change} />
            </label>
            <label><h3>v11</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle11Change} />
            </label>
            <label><h3>v12</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle12Change} />
            </label>
            <label><h3>v13</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle13Change} />
            </label>
            <label><h3>v14</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle14Change} />
            </label>
            <label><h3>v15</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle15Change} />
            </label>
            <label><h3>v16</h3>
            <NumericInput mobile className="form-control" min={0} max={100} onChange={handle16Change} />
            </label>

            <FormButton title={t("Annuler")} onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
            </View>
           </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={5} class="col-md-6"/>  
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
    cercle3Patient: actions.cercle3Patient

};

export default connect(mapStateToProps, mapActionToProps)(Cercle3);
