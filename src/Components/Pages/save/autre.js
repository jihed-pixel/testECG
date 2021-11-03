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
import InputRd from '../../Form/inputrd';
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

const Autre = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })
    const [dureeEE, setDureeEE] = useState()
    const [arretEE, setArretEE] = useState()
    const [palier, setPalier] = useState()
    const [motif, setMotif] = useState()
    const [conclusion, setConclusion] = useState()

    var handleChange = (text) => {
        setDureeEE(text)
    }
    var handle1Change = (text) => {
        setArretEE(text)
    }
    var handle2Change = (text) => {
        setPalier(text)
    }
    var handle3Change = (text) => {
        setMotif(text.target.value)
    }
    var handle4Change = (text) => {
        setConclusion(text)
    }
    
    var handleSubmit = (e) => {
        var values = {
            dureeEE:dureeEE,
            arretEE:arretEE,
            palier:palier,
            motif:motif,
            conclusion:conclusion
            
        }
        console.log(values)
        e.preventDefault();
        props.autrePatient(props.patientList["cin"], values)
        props.navigation.navigate("Dash41")
    }

    return (
<section className="landing-background100">
            <div class="row">
  <div class=" d-flex  m-4 col-md-6  " >
  <MDBContainer   >
        <MDBRow>
          <MDBCol >
            <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>Epreuve d'effort</Text>
            <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("")}</Text>
            <label><h3>Durée de l’EE (min)</h3>
            <NumericInput mobile className="form-control" min={1} max={60} onChange={handleChange} />
            </label>
            <label><h3>FC a l'arrêt de l’EE : -FC (%)</h3>
            <NumericInput mobile className="form-control" min={10} max={120} onChange={handle1Change} />
            </label>
            <label><h3>Numero du palier a l'arret de l'effort</h3>
            <NumericInput mobile className="form-control" min={1} max={10} onChange={handle2Change} />
            </label>
            <Text style={tailwind('text-lg p-2 text-gray-700')}>Motif d’arrêt :</Text>
            <div  >
                
            <div><InputRd id="1" name1="épuisement musculaire" onChange={handle3Change} type="radio" value="épuisement musculaire" name="gender" /> 
                </div  ><div><InputRd id="2" name1="troubles de conduction sévères" onChange={handle3Change} type="radio" value="troubles de conduction sévères" name="gender" /> 
                </div  ><div><InputRd id="3" name1="troubles de rythme sévères" onChange={handle3Change} type="radio" value="troubles de rythme sévères" name="gender" /> 
                </div  ><div><InputRd id="4" name1="troubles de répolarisation significatives" onChange={handle3Change} type="radio" value="troubles de répolarisation" name="gender" /> 
                </div  ><div><InputRd id="5" name1="dyspnée" onChange={handle3Change} type="radio" value="dyspnée" name="gender" /> 
                </div  ><div><InputRd id="6" name1="douleur thoracique" onChange={handle3Change} type="radio" value="douleurs thoraciques" name="gender" /> 
                </div  ><div><InputRd id="7" name1="atteinte de la FMT" onChange={handle3Change} type="radio" value="douleurs thoraciques" name="gender" /> 
                </div  >
            </div>
            <label><h3>Conclusion</h3>
            <FormInput/>
            </label>
                <View style={styles.row}>
                    <FormButton title={t("Précédent")} onPress={() => { props.navigation.navigate("FicheEffort") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
                </View>
                <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("Dash41") }} />
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
    autrePatient: actions.autrePatient

};

export default connect(mapStateToProps, mapActionToProps)(Autre);
