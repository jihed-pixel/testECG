import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import '../home.css';
import Steps from "../../Form/Steps";
import FormInput from '../../Form/FormInput';
import FormInput3 from "../../Form/FormInput3";
import { useTranslation } from "react-i18next";
import "../Tran/i18nextInit"
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

const Ventricule = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })
    const [dtd, setDtd] = useState()
    const [dtdI, setDtdI] = useState()
    const [dts, setDts] = useState()
    const [dtsI, setDtsI] = useState()
    const [siv, setSiv] = useState()
    const [pp, setPp] = useState()
    const [sivpp, setSivpp] = useState()
    const [vtd, setVtd] = useState()
    const [vtdI, setVtdI] = useState()
    const [vts, setVts] = useState()
    const [vtsI, setVtsI] = useState()
    const [fevgTm, setFevgTm] = useState()
    const [fevgBi, setFevgBi] = useState()
    const [fr, setFr] = useState()
    const [ondeE, setOndeE] = useState()
    const [ondeA, setOndeA] = useState()
    const [rapEA, setRapEA] = useState()
    const [ondeEP, setOndeEP] = useState()
    const [EEP, setEEP] = useState()
    


    

    var handleSubmit = (e) => {
        var values = {
            
            dtd:dtd,
            dts:dts,
            dtsI:dtsI,
            siv:siv,
            pp:pp,
            sivpp:sivpp,
            vtd:vtd,
            vtdI:vtdI,
            vts:vts,
            vtsI:vtsI,
            fevgTm:fevgTm,
            fevgBi:fevgBi,
            fr:fr,
            ondeE:ondeE,
            ondeA:ondeA,
            rapEA:rapEA,
            ondeEP:ondeEP,
            EEP:EEP,
            
        }
        console.log(values)
        e.preventDefault();
        props.ventriculePatient(props.patientList["cin"], values)
        props.navigation.navigate("Dash21")
    }
    
    var handleChange = (text) => {
        setDtd(text)
    }
    var handle1Change = (text) => {
        setDtdI(text)
    }
    var handle2Change = (text) => {
        setDts(text)
    }
    var handle3Change = (text) => {
        setDtsI(text)
    }
    var handle4Change = (text) => {
        setSiv(text)
    }
    var handle5Change = (text) => {
        setPp(text)
    }
    var handle6Change = (text) => {
        setSivpp(text)
    }
    var handle7Change = (text) => {
        setVtd(text)
    }
    var handle8Change = (text) => {
        setVtdI(text)
    }
    var handle9Change = (text) => {
        setVts(text)
    }
    var handle10Change = (text) => {
        setVtsI(text)
    }
    var handle11Change = (text) => {
        setFevgTm(text)
    }
    var handle12Change = (text) => {
        setFevgBi(text)
    }
    var handle13Change = (text) => {
        setFr(text)
    }
    var handle14Change = (text) => {
        setOndeE(text)
    }
    var handle15Change = (text) => {
        setOndeA(text)
    }
    var handle16Change = (text) => {
        setRapEA(text)
    }
    var handle17Change = (text) => {
        setOndeEP(text)
    }
    var handle18Change = (text) => {
        setEEP(text)
    }
    
    
    

    return (
        <section className="landing-background201">
        <div class="row">
  <div class=" d-flex  m-4 col-md-6  " >
  <MDBContainer   >
        <MDBRow>
          <MDBCol >
            <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('text-blue-700 font-bold text-3xl text-center')}>Echographie cardiaque</Text>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Ventricule gauche :</Text>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Dimensions :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>DTD VG (mm)</Text>
            <NumericInput mobile className="form-control" min={20} max={90} onChange={handleChange} />
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>DTD VG indexé (ml/m²)</Text>
            <NumericInput mobile className="form-control" min={10} max={80}  onChange={handle1Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>DTS VG (mm)</Text>
            <NumericInput mobile className="form-control" min={10} max={80}  onChange={handle2Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>DTS  VG indexé (ml/m²)</Text>
            <NumericInput mobile className="form-control" min={10} max={60} onChange={handle3Change} />
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>SIV (mm)</Text>
            <NumericInput mobile className="form-control" min={1} max={40}  onChange={handle4Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PPVG (mm)</Text>
            <NumericInput mobile className="form-control" min={1} max={40}  onChange={handle5Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Rapport SIV/PP</Text>
            <NumericInput mobile className="form-control" min={0} max={10}  onChange={handle6Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>VTD VG (ml)</Text>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle7Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>VTD VG indexé(ml/m²)</Text>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle8Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>VTS  VG (ml)</Text>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle9Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>VTS VG indexé(ml/m²)</Text>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle10Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Fonction systolique :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>FEVG(TM)(%)</Text>
            <NumericInput mobile className="form-control" min={1} max={100}  onChange={handle11Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>FEVG (biplan)(%)</Text>
            <NumericInput mobile className="form-control" min={1} max={100}  onChange={handle12Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>FR(%)</Text>
            <NumericInput mobile className="form-control" min={1} max={100}  onChange={handle13Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Fonction diastolique:</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Onde E(cm/s)</Text>
            <NumericInput mobile className="form-control" min={1} max={200}  onChange={handle14Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>onde A(cm/s)</Text>
            <NumericInput mobile className="form-control" min={0} max={200}  onChange={handle15Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>rapport E/A</Text>
            <NumericInput mobile className="form-control" min={1} max={10}  onChange={handle16Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>onde E’(cm/s)</Text>
            <NumericInput mobile className="form-control" min={1} max={40} 
            
            
            onChange={handle17Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>E/E’</Text>
            <NumericInput mobile className="form-control" min={1} max={40}  onChange={handle18Change}/>
            </label>
            </div>
                <View style={styles.row}>
                    <FormButton title={t("Précédent")} onPress={() => { props.navigation.navigate("Dash11") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
                </View>
                <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("Dash21") }} />
            </View>
           </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={4} class="col-md-6"/>  
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
    ventriculePatient: actions.ventriculePatient

};

export default connect(mapStateToProps, mapActionToProps)(Ventricule);
