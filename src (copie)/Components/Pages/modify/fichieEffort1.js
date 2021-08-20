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

const FichieEffort = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })
    const [type, setType] = useState()
    const [charge, setCharge] = useState()
    const [ta, setTa] = useState()
    const [tap, setTap] = useState()
    const [fc, setFc] = useState()
    const [trouCon, setTrouCon] = useState()
    const [trouRep, setTrouRep] = useState()
    const [trouRyt, setTrouRyt] = useState()

    var handleChange = (text) => {
        setType(text.target.value)
    }
    var handle1Change = (text) => {
        setCharge(text)
    }
    var handle2Change = (text) => {
        setTa(text)
    }
    var handle3Change = (text) => {
        setTap(text)
    }
    var handle4Change = (text) => {
        setFc(text)
    }
    var handle5Change = (data) => {
        if (data.target.value==="Oui")
        setTrouCon(true)
      if (data.target.value==="Non")
      setTrouCon(false)
    }
    var handle6Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRep(true)
      if (data.target.value==="Non")
      setTrouRep(false)
    }
    var handle7Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRyt(true)
      if (data.target.value==="Non")
      setTrouRyt(false)
    }
    
    

    var handleSubmit = (e) => {
        var values = {
            type:type,
            charge:charge,
            ta:ta,
            tap:tap,
            fc:fc,
            trouCon:trouCon,
            trouRep:trouRep,
            trouRyt:trouRyt
        }
        console.log(values)
        e.preventDefault();
        props.fichePatient(props.patientList["cin"], values)
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
            <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>Epreuve d'effort</Text>
            <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("")}</Text>
            <h3></h3>
            <div  >
                <Text style={tailwind('text-lg p-2 text-gray-700')}>Non ischémique</Text>
                <input onChange={handleChange} type="radio" value="1er Palier" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>1er Palier</Text>
                <input onChange={handleChange} type="radio" value="2ème Palier" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>2ème Palier</Text>
                <input onChange={handleChange} type="radio" value="3ème Palier" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>3ème Palier</Text>
                <input onChange={handleChange} type="radio" value="4ème Palier" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>4ème Palier</Text>
                <input onChange={handleChange} type="radio" value="5ème  Palier" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>5ème Palier</Text>
                <input onChange={handleChange} type="radio" value="Récupération" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Récupération</Text>
            </div>
            <label><h3>Charge (w)</h3>
            <NumericInput mobile className="form-control" min={0} max={400} onChange={handle1Change} />
            </label>
            <label><h3>TA</h3>
            <NumericInput mobile className="form-control" min={1} max={30} onChange={handle2Change} />
            </label>
            <label><h3>TA' (mmhg)</h3>
            <NumericInput mobile className="form-control" min={1} max={20} onChange={handle3Change} />
            </label>
            <label><h3>FC (% de la FMT)</h3>
            <NumericInput mobile className="form-control" min={10} max={120} onChange={handle4Change} />
            </label>
            <div  >
                <Text style={tailwind('text-lg p-2 text-gray-700')}>troubles de conduction </Text>
                <input onChange={handle5Change} type="radio" value="Non" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle5Change} type="radio" value="Oui" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            <div  >
                <Text style={tailwind('text-lg p-2 text-gray-700')}>troubles de répolarisation</Text>
                <input onChange={handle6Change} type="radio" value="Non" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle6Change} type="radio" value="Oui" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            <div  >
                <Text style={tailwind('text-lg p-2 text-gray-700')}>troubles de rythme</Text>
                <input onChange={handle7Change} type="radio" value="Non" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle7Change} type="radio" value="Oui" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>

            <FormButton title={t("Annuler")} onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
            </View>
           </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={6} class="col-md-6"/>  
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
    fichePatient: actions.fichePatient

};

export default connect(mapStateToProps, mapActionToProps)(FichieEffort);
