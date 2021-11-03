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

const ExamenClinique = (props) => {
  const { t } = useTranslation();
    useEffect(() => {
    })
    const [poids, setPoids] = useState(0)
    const [taille, setTaille] = useState(1)
    const [sc, setSc] = useState(0)
    const [bmi, setBmi] = useState(0)
    const [pas, setPas] = useState()
    const [pad, setPad] = useState()
    const [pas2, setPas2] = useState()
    const [pad2, setPad2] = useState()
    const [ac, setAc] = useState(false)
    const [bruit, setBruit] = useState()
    const [anormale, setAnormale] = useState()
    const [souf, setSouf] = useState(false)
    const [preciseSouf, setPreciseSouf] = useState()
    const [poul, setPoul] = useState(false)
    const [precisePoul, setPrecisePoul] = useState()
    const [peripherique, setPeripherique] = useState(false)
    const [varices , setVarices ] = useState(false)
    const [fc, setFc ] = useState()
    const [rythme, setRythme ] = useState()
    const [siege, setSiege ] = useState()
    const [reflux, setReflux ] = useState()
    const [siege2, setSiege2 ] = useState()
    var handle17Change = (data) => {
      if (data.target.value==="Oui")
      setReflux (true)
      if (data.target.value==="Non")
      setReflux (false)
    }
    var handle14Change = (text) => {
      setFc(text)
    }
    var handle15Change = (text) => {
      setRythme (text.target.value)
    }
    var handle16Change = (text) => {
      setSiege (text)
    }
    var handle18Change = (text) => {
      setSiege2 (text)
    }
    var handle10Change = (text) => {
      setPas(text)
    }
    var handle11Change = (text) => {
      setPad(text)
    }
    var handle12Change = (text) => {
      setPas2(text)
    }
    var handle13Change = (text) => {
      setPad2(text)
    }
    var handle1Change = (text) => {
      setPoids(text)
    }
    var handle2Change = (text) => {

      setTaille(text)
      setBmi(0.0003207*Math.pow((1000*poids),(0.7285-(0.0188*Math.log10(poids*1000))))*Math.pow(taille, 0.3))
      setSc(poids/Math.pow(taille*100, 2))
      console.log(bmi)
    }
    var handle3Change = (text) => {

      setSc(text)
    }
    var handle7Change = (text) => {

      setPreciseSouf(text)
    }
    var handle6Change = (data) => {
      if (data.target.value==="Oui")
      setSouf(true)
      if (data.target.value==="Non")
      setSouf(false)
    }
    var handle8Change = (data) => {
      if (data.target.value==="Oui")
      setPoul(true)
      if (data.target.value==="Non")
      setPoul(false)
    }
    var handle9Change = (text) => {

      setPrecisePoul(text)
    }
    var handle4Change = (data) => {
      setBruit(data.target.value)
  }
  var handle5Change = (data) => {
    setAnormale(data.target.value)
}
    

    var handle5Change = (data) => {
        if (data.target.value==="Oui")
          setAc(true)
        if (data.target.value==="Non")
        setAc(false)
      }
      var handle28Change = (data) => {
        if (data.target.value==="Oui")
          setPeripherique(true)
        if (data.target.value==="Non")
        setPeripherique(false)
      }
      var handle29Change = (data) => {
        if (data.target.value==="Oui")
        setVarices (true)
        if (data.target.value==="Non")
        setVarices (false)
      }


    var handleSubmit = (e) => {
        var values = {
            poids: poids,
            taille: taille,
            sc:sc,
            pas:pas,
            pad:pad,
            pas2:pas2,
            pad2:pad2,
            ac:ac,
            bruit:bruit,
            anormale:anormale,
            souf:souf,
            preciseSouf:preciseSouf,
            poul:poul,
            precisePoul:precisePoul,
            peripherique:peripherique,
            varices :varices ,
            fc:fc,
            rythme:rythme,
            siege:siege,
            reflux:reflux,
            siege2:siege2,
        }
        console.log(values)
        e.preventDefault();
        props.examenCliniquePatient(props.patientList["cin"], values)
        props.navigation.navigate("EtudeECG")
    }

    return (
      <section className="landing-background200">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer   >
      <MDBRow>
        <MDBCol >
          <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>{t("Examen clinique")}</Text>
        <FormInput3
          mask="999"
          placeholder={t("Le poids(Kg)")}
          onChange={handle1Change}
        />
        <FormInput3
          mask="9999"
          placeholder={t("La taille (cm)")}
          onChange={handle2Change}
        />
        <Text style={tailwind('text-lg p-2 text-gray-700')}>BMI: {poids/Math.pow(taille/100, 2)}</Text>
        <Text style={tailwind('text-lg p-2 text-gray-700')}>Le calcul de la surface corporelle (SC): {0.0003207*Math.pow((1000*poids),(0.7285-(0.0188*Math.log10(poids*1000))))*Math.pow(taille, 0.3)}</Text>
        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>TA aux deux bras après 5 min de repos :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-gray-700')}>PAS</Text>
            <NumericInput mobile className="form-control" min={30} max={400}  onChange={handle10Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-gray-700')}>PAD</Text>
            <NumericInput mobile className="form-control" min={0} max={1000} onChange={handle11Change} />
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-gray-700')}>PAS</Text>
            <NumericInput mobile className="form-control" min={30} max={400}onChange={handle12Change}  />
            </label>
            <label><Text style={tailwind('text-lg p-2 text-gray-700')}>PAD</Text>
            <NumericInput mobile className="form-control" min={0} max={1000}onChange={handle13Change}  />
            </label>
            </div>
            <FormInput3
          placeholder="FC (bpm)"
          onChange={handle14Change}
        />
          <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Rythme  :</Text>
              <InputRd id="1" name1="régulier"  type="radio" value="régulier" name="gender1"onChange={handle15Change} /> 
              <InputRd id="2" name1="irrégulier"  type="radio" value="irrégulier" name="gender1"onChange={handle15Change} /> 
              </div>
          </View>
          <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Bruits du cœur  :</Text>
              <InputRd id="3" name1="normaux"  type="radio" value="régulier" name="gender2"onChange={handle4Change} /> 
              <InputRd id="4" name1="anormaux"  type="radio" value="anormaux" name="gender2"onChange={handle4Change} /> 
              </div>
          </View>
          {bruit === "anormaux" &&
          
            <View style={tailwind(' items-center ')}>
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Si anormaux :</Text>
              <View style={styles.row}>
              <div class="row mx-4">
                
                <InputRd id="5" name1="Paradoxal"  type="radio" value="Paradoxal" name="gender3" onChange={handle5Change}/> 
                <InputRd id="6" name1="3ème bruit"  type="radio" value="3ème bruit" name="gender3" onChange={handle5Change}/> 
                <InputRd id="7" name1="4ème bruit"  type="radio" value="4ème bruit" name="gender3" onChange={handle5Change}/> 
                <InputRd id="8" name1="Dédoublement"  type="radio" value="Dédoublement" name="gender3"onChange={handle5Change} /> 
              </div>
            </View></View>
          }
          <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>{t("")}Souffle cardiaque:</Text>
              <InputRd id="9" name1="Non" onChange={handle6Change} type="radio" value="Non" name="gender4" /> 
              <InputRd id="10" name1="Oui" onChange={handle6Change} type="radio" value="Oui" name="gender4" /> 
            </div>
          </View>
          {souf === true &&
            <FormInput
            placeholder="préciser "
            onChangeText={handle7Change}
            />}
            <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Œdème périphérique :</Text>
              <InputRd id="11" name1="Non"  type="radio" value="Non" name="gender5" onChange={handle28Change} /> 
              <InputRd id="12" name1="Oui"  type="radio" value="Oui" name="gender5"onChange={handle28Change} /> 
            </div>
          </View>
          {peripherique === true &&
            <FormInput
            placeholder="siége"
            onChange={handle16Change}
            />}
          <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Reflux Hépato-jugulaire  :</Text>
              <InputRd id="13" name1="Non"  type="radio" value="Non" name="gender6" onChange={handle17Change}/> 
              <InputRd id="14" name1="Oui"  type="radio" value="Oui" name="gender6"onChange={handle17Change} /> 
            </div>
          </View>
          <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Pouls périphériques palpables:</Text>
              <InputRd id="15" name1="Non" onChange={handle8Change} type="radio" value="Non" name="gender7" /> 
              <InputRd id="16" name1="Oui" onChange={handle8Change} type="radio" value="Oui" name="gender7" /> 
            </div>
          </View>
          {poul === false &&
            <FormInput
            placeholder="préciser "
            onChangeText={handle9Change}
            />}
          <View style={styles.row}>
            <div class="row mx-4">
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Varices   :</Text>
              <InputRd id="17" name1="Non"  type="radio" value="Non" name="gender8" onChange={handle29Change}/> 
              <InputRd id="18" name1="Oui"  type="radio" value="Oui" name="gender8" onChange={handle29Change}/> 
            </div>
          </View>
          {varices  === true &&
            <FormInput
            placeholder="siége"
            onChange={handle18Change}
            />}



                <View style={styles.row}>
                    <FormButton title={t("Précédent")} onPress={() => { props.navigation.navigate("Interrogatoire") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
                </View>
                <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("EtudeECG") }} />
            </View>
            </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  current={2} class="col-md-6"/>  
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
    examenCliniquePatient: actions.examenCliniquePatient

};

export default connect(mapStateToProps, mapActionToProps)(ExamenClinique);
