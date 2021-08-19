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

const ExamenClinique = (props) => {
  const { t } = useTranslation();
    useEffect(() => {
    })
    const [poids, setPoids] = useState(0)
    const [taille, setTaille] = useState(0)
    const [sc, setSc] = useState(0)
    const [ac, setAc] = useState(false)
    const [bruit, setBruit] = useState()
    const [anormale, setAnormale] = useState()
    const [souf, setSouf] = useState(false)
    const [preciseSouf, setPreciseSouf] = useState()
    const [poul, setPoul] = useState(false)
    const [precisePoul, setPrecisePoul] = useState()
    var handle1Change = (text) => {

      setPoids(text)
    }
    var handle2Change = (text) => {

      setTaille(text)
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


    var handleSubmit = (e) => {
        var values = {
            poids: poids,
            taille: taille,
            sc:sc,
            ac:ac,
            bruit:bruit,
            anormale:anormale,
            souf:souf,
            preciseSouf:preciseSouf,
            poul:poul,
            precisePoul:precisePoul,
        }
        console.log(values)
        e.preventDefault();
        props.examenCliniquePatient(props.patientList["cin"], values)
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
            <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>{t("Examen clinique")}</Text>
        <FormInput3
          mask="999"
          placeholder={t("Le poids")}
          onChange={handle1Change}
        />
        <FormInput3
          mask="9999"
          placeholder={t("La taille")}
          onChange={handle2Change}
        />
        <FormInput3
          placeholder={t("Le calcul de la surface corporelle (SC)")}
          onChange={handle3Change}
        />
        <Text style={tailwind('text-lg p-2 text-Indigo-700')}>TA aux deux bras après 5 min de repos :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-gray-700')}>PAS</Text>
            <NumericInput mobile className="form-control" min={30} max={400}  />
            </label>
            <label><Text style={tailwind('text-lg p-2 text-gray-700')}>PAD</Text>
            <NumericInput mobile className="form-control" min={0} max={1000}  />
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-gray-700')}>PAS</Text>
            <NumericInput mobile className="form-control" min={30} max={400}  />
            </label>
            <label><Text style={tailwind('text-lg p-2 text-gray-700')}>PAD</Text>
            <NumericInput mobile className="form-control" min={0} max={1000}  />
            </label>
            </div>
            <FormInput3
          placeholder="FC (bpm)"
        />
          <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Rythme  :</Text>
              <input  type="radio" value="normal" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>normal</Text>
              <input  type="radio" value="Arythmie" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Arythmie</Text>
              </div>
          </View>
          <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>{t("")}Bruits du cœur  :</Text>
              <input  type="radio" value="normal" name="gender2"onChange={handle4Change} /> <Text style={tailwind('text-lg p-2 text-gray-700')}>normal</Text>
              <input  type="radio" value="anormale" name="gender2"onChange={handle4Change} /> <Text style={tailwind('text-lg p-2 text-gray-700')}>anormale</Text>
              </div>
          </View>
          {bruit === "anormale" &&
          
            <View style={tailwind(' items-center ')}>
              <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Si anormale  :</Text>
              <View style={styles.row}>
              <div  >
                
                <input  type="radio" value="Paradoxal" name="gender3" onChange={handle5Change}/> <Text style={tailwind('text-lg p-2 text-gray-700')}>Paradoxal</Text>
                <input  type="radio" value="3ème bruit" name="gender3" onChange={handle5Change}/> <Text style={tailwind('text-lg p-2 text-gray-700')}>3ème bruit</Text>
                <input  type="radio" value="4ème bruit" name="gender3" onChange={handle5Change}/> <Text style={tailwind('text-lg p-2 text-gray-700')}>4ème bruit</Text>
                <input  type="radio" value="Dédoublement" name="gender3"onChange={handle5Change} /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Dédoublement</Text>
              </div>
            </View></View>
          }
          <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>{t("")}Souffle cardiaque:</Text>
              <input onChange={handle6Change} type="radio" value="Non" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
              <input onChange={handle6Change} type="radio" value="Oui" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
          </View>
          {souf === true &&
            <FormInput
            placeholder="préciser "
            onChangeText={handle7Change}
            />}
            <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Œdème périphérique :</Text>
              <input  type="radio" value="Non" name="gender5" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
              <input  type="radio" value="Oui" name="gender5" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
          </View>
          <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Reflux Hépato-jugulaire  :</Text>
              <input  type="radio" value="Non" name="gender6" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
              <input  type="radio" value="Oui" name="gender6" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
          </View>
          <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Pouls périphériques palpables:</Text>
              <input onChange={handle8Change} type="radio" value="Non" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
              <input onChange={handle8Change} type="radio" value="Oui" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
          </View>
          {poul === false &&
            <FormInput
            placeholder="préciser "
            onChangeText={handle9Change}
            />}
          <View style={styles.row}>
            <div  >
              <Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Varices   :</Text>
              <input  type="radio" value="Non" name="gender8" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
              <input  type="radio" value="Oui" name="gender8" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
          </View>
          



          <FormButton title={t("Annuler")} onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
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
