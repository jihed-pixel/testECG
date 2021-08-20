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

const FicheIRM = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })
    const [masseMyo, setMasseMyo] = useState()
    const [epaiDia, setEpaiDia] = useState()
    const [epaiSys, setEpaiSys] = useState()
    const [epaiAbs, setEpaiAbs] = useState()
    const [epaiRef, setEpaiRef] = useState()
    const [dog, setDog] = useState()
    const [dod, setDod] = useState()
    const [fe, setFe] = useState()
    const [vtd, setVtd] = useState()
    const [vtdI, setVtdI] = useState()
    const [vts, setVts] = useState()
    const [vtsI, setVtsI] = useState()
    const [ves, setVes] = useState()
    const [vesI, setVesI] = useState()
    const [debitCar, setDebitCar] = useState()
    const [debitCarI, setDebitCarI] = useState()
    const [vg, setVg] = useState()
    const [feVd, setFeVd] = useState()
    const [vtdVd, setVtdVd] = useState()
    const [vtdIVd, setVtdIVD] = useState()
    const [vtsVd, setVtsVd] = useState()
    const [vtsIVd, setVtsIVd] = useState()
    const [vesVd, setVesVd] = useState()
    const [vesIVd, setVesIVd] = useState()
    const [debitCarVd, setDebitCarVd] = useState()
    const [debitCarIVd, setDebitCarIVd] = useState()
    const [longaxe, setLongaxe] = useState()
    const [rehauTar, setRehauTar] = useState()
    const [ische, setIsche] = useState()
    const [nonische, setNonische] = useState()

    var handleChange = (text) => {
        setMasseMyo(text)
    }
    var handle1Change = (text) => {
        setEpaiDia(text)
    }
    var handle2Change = (text) => {
        setEpaiSys(text)
    }
    var handle3Change = (text) => {
        setEpaiAbs(text)
    }
    var handle4Change = (text) => {
        setEpaiRef(text)
    }
    var handle5Change = (text) => {
        setDog(text)
    }
    var handle6Change = (text) => {
        setDod(text)
    }
    var handle7Change = (text) => {
        setFe(text)
    }
    var handle8Change = (text) => {
        setVtd(text)
    }
    var handle9Change = (text) => {
        setVtdI(text)
    }
    var handle10Change = (text) => {
        setVts(text)
    }
    var handle11Change = (text) => {
        setVtsI(text)
    }
    var handle12Change = (text) => {
        setVes(text)
    }
    var handle13Change = (text) => {
        setVesI(text)
    }
    var handle14Change = (text) => {
        setDebitCar(text)
    }
    var handle15Change = (text) => {
        setDebitCarI(text)
    }
    var handle16Change = (text) => {
        setVg(text.target.value)
    }
    var handle17Change = (text) => {
        setFeVd(text)
    }
    var handle18Change = (text) => {
        setVtdVd(text)
    }
    var handle19Change = (text) => {
        setVtdIVD(text)
    }
    var handle20Change = (text) => {
        setVtsVd(text)
    }
    var handle21Change = (text) => {
        setVtsIVd(text)
    }
    var handle22Change = (text) => {
        setVesVd(text)
    }
    var handle23Change = (text) => {
        setVesIVd(text)
    }
    var handle24Change = (text) => {
        setDebitCarVd(text)
    }
    var handle25Change = (text) => {
        setDebitCarIVd(text)
    }
    var handle26Change = (text) => {
        setLongaxe(text.target.value)
    }
    var handle27Change = (data) => {
        if (data.target.value==="Oui")
        setRehauTar(true)
      if (data.target.value==="Non")
      setRehauTar(false)
    }
    var handle28Change = (text) => {
        setIsche(text.target.value)
    }
    var handle29Change = (text) => {
        setNonische(text.target.value)
    }
    

    var handleSubmit = (e) => {
        var values = {
            masseMyo:masseMyo,
            epaiDia:epaiDia,
            epaiSys:epaiSys,
            epaiAbs:epaiAbs,
            epaiRef:epaiRef,
            dog:dog,
            dod:dod,
            fe:fe,
            vtd:vtd,
            vtdI:vtdI,
            vts:vts,
            vtsI:vtsI,
            ves:ves,
            vesI:vesI,
            debitCar:debitCar,
            debitCarI:debitCarI,
            vg:vg,
            feVd:feVd,
            vtdVd:vtdVd,
            vtdIVd:vtdIVd,
            vtsVd:vtsVd,
            vtsIVd:vtsIVd,
            vesVd:vesVd,
            vesIVd:vesIVd,
            debitCarVd:debitCarVd,
            debitCarIVd:debitCarIVd,
            longaxe:longaxe,
            rehauTar:rehauTar,
            ische:ische,
            nonische:nonische
            
        }
        console.log(values)
        e.preventDefault();
        props.ficheIRMPatient(props.patientList["cin"], values)
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
            <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>IRM cardiaque</Text>
            <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("")}</Text>
            <h3>Étude en mode ciné :</h3>
            <div class="row">
            <label><h3>Masse myocardique(g/m²)</h3>
            <NumericInput mobile className="form-control" min={30} max={400} onChange={handleChange} />
            </label>
            <label><h3>Diamètre de l’oreillette gauche</h3>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle5Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>Diamètre de l’oreillette droite</h3>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle6Change}/>
            </label>
            </div>
            <h3>SÉQUENCES CINE SSFP COUVRANT L’ENSEMBLE DU VG (LONG AXE):</h3>
            <div class="row">
            <label><h3>FE (%)</h3>
            <NumericInput mobile className="form-control" min={1} max={100} onChange={handle7Change} />
            </label>
            <label><h3>VTD(ml)</h3>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle8Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>VTD indexé (ml/m²)</h3>
            <NumericInput mobile className="form-control" min={10} max={400} onChange={handle9Change} />
            </label>
            <label><h3>VTS (ml)</h3>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle10Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>VTS indexé (ml/m²)</h3>
            <NumericInput mobile className="form-control" min={10} max={400} onChange={handle11Change} />
            </label>
            <label><h3>VES (ml)</h3>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle12Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>VES indexé (ml/m²)</h3>
            <NumericInput mobile className="form-control" min={10} max={400} onChange={handle13Change} />
            </label>
            <label><h3>Débit cardiaque (ml)</h3>
            <NumericInput mobile className="form-control" min={0} max={40}  onChange={handle14Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>Débit cardiaque indexé (ml/min/m²)</h3>
            <NumericInput mobile className="form-control" min={0} max={40} onChange={handle15Change} />
            </label>
            </div>
            <h3>CINETIQUE SEGMENTAIRE VG :</h3>
            <div  >
                <input onChange={handle16Change} type="radio" value="Akinésie" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Akinésie</Text>
                <input onChange={handle16Change} type="radio" value="Dyskinésie" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Dyskinésie</Text>
                <input onChange={handle16Change} type="radio" value="Asynchronisme" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Asynchronisme</Text>
            </div>
            <h3>SÉQUENCES CINE SSFP COUVRANT L’ENSEMBLE DU VD :</h3>
            <div class="row">
            <label><h3>FE (%)</h3>
            <NumericInput mobile className="form-control" min={1} max={100} onChange={handle17Change} />
            </label>
            <label><h3>VTD</h3>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle18Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>VTD indexé</h3>
            <NumericInput mobile className="form-control" min={10} max={100} onChange={handle19Change} />
            </label>
            <label><h3>VTS</h3>
            <NumericInput mobile className="form-control" min={10} max={100}  onChange={handle20Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>VTS indexé</h3>
            <NumericInput mobile className="form-control" min={10} max={400} onChange={handle21Change} />
            </label>
            <label><h3>VES</h3>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle22Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>VES indexé</h3>
            <NumericInput mobile className="form-control" min={10} max={400} onChange={handle23Change} />
            </label>
            <label><h3>Débit cardiaque</h3>
            <NumericInput mobile className="form-control" min={0} max={40}  onChange={handle24Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>Débit cardiaque indexé</h3>
            <NumericInput mobile className="form-control" min={0} max={40} onChange={handle25Change} />
            </label>
            </div>
            <h3>CINETIQUE SEGMENTAIRE VD (LONG AXE):</h3>
            <div  >
                <input onChange={handle26Change} type="radio" value="Akinésie" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Akinésie</Text>
                <input onChange={handle26Change} type="radio" value="Dyskinésie" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Dyskinésie</Text>
                <input onChange={handle26Change} type="radio" value="Asynchronisme" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Asynchronisme</Text>
            </div>
            <h3>Étude injectée (Gadolinium) :</h3>
            <div  >
                <Text style={tailwind('text-lg p-2 text-gray-700')}>Rehaussement tardif à 5-10 min</Text>
                <input onChange={handle27Change} type="radio" value="Non" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle27Change} type="radio" value="Oui" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            <div  >
                <Text style={tailwind('text-lg p-2 text-gray-700')}>Ischémique</Text>
                <input onChange={handle28Change} type="radio" value="Sous endocardique ou transmurale" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Sous endocardique ou transmurale</Text>
                <input onChange={handle28Change} type="radio" value="Topographie segmentaire vasculaire" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Topographie segmentaire vasculaire</Text>
            </div>
            <div  >
                <Text style={tailwind('text-lg p-2 text-gray-700')}>Non ischémique</Text>
                <input onChange={handle29Change} type="radio" value="Patchy" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Patchy</Text>
                <input onChange={handle29Change} type="radio" value="Sous épicardique" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Sous épicardique</Text>
                <input onChange={handle29Change} type="radio" value="Diffuse" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Diffuse</Text>
            </div>
        

            
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
    ficheIRMPatient: actions.ficheIRMPatient

};

export default connect(mapStateToProps, mapActionToProps)(FicheIRM);
