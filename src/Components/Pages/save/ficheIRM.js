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
    const [test1, setTest1] = useState()
    const [test2, setTest2] = useState()

    const [siegeAkVg, setSiegeAkVg] = useState()
    const [siegeDyVg, setSiegeDyVg] = useState()
    const [siegeAsVg, setSiegeAsVg] = useState()
    const [siegeHyVg, setSiegeHyVg] = useState()
    const [siegeAkLong, setSiegeAkLong] = useState()
    const [siegeDyLong, setSiegeDyLong] = useState()
    const [siegeAsLong, setSiegeAsLong] = useState()
    const [siegeHyLong, setSiegeHyLong] = useState()

    const [pasPrise, setPasPrise ] = useState(false)
    const [sousEnd, setSousEnd ] = useState(false)
    const [transmurale, setTransmurale ] = useState(false)
    const [sousEp, setSousEp ] = useState(false)
    const [diffuse, setDiffuse ] = useState(false)
    const [patchy, setPatchy ] = useState(false)
    var handle42Change = (data) => {
        if (data.target.value==="Oui")
        setDiffuse (true)
        if (data.target.value==="Non")
        setDiffuse (false)
      }
      var handle43Change = (data) => {
        if (data.target.value==="Oui")
        setPatchy (true)
        if (data.target.value==="Non")
        setPatchy (false)
      }
    var handle39Change = (data) => {
        if (data.target.value==="Oui")
        setSousEnd (true)
        if (data.target.value==="Non")
        setSousEnd (false)
      }
    var handle38Change = (data) => {
        if (data.target.value==="Oui")
        setPasPrise (true)
        if (data.target.value==="Non")
        setPasPrise (false)
      }
      var handle40Change = (data) => {
        if (data.target.value==="Oui")
        setTransmurale (true)
        if (data.target.value==="Non")
        setTransmurale (false)
      }
      var handle41Change = (data) => {
        if (data.target.value==="Oui")
        setSousEp (true)
        if (data.target.value==="Non")
        setSousEp (false)
      }
    var handle30Change = (text) => {
        setSiegeAkVg(text)
    }
    var handle31Change = (text) => {
        setSiegeDyVg(text)
    }
    var handle32Change = (text) => {
        setSiegeAsVg(text)
    }
    var handle33Change = (text) => {
        setSiegeHyVg(text)
    }
    var handle34Change = (text) => {
        setSiegeAkLong(text)
    }
    var handle35Change = (text) => {
        setSiegeDyLong(text)
    }
    var handle36Change = (text) => {
        setSiegeAsLong(text)
    }
    var handle37Change = (text) => {
        setSiegeHyLong(text)
    }
    var handle71Change = (data) => {
        if (data.target.value==="Oui")
        setTest1(true)
      if (data.target.value==="Non")
      setTest1(false)
    }
    var handle72Change = (data) => {
        if (data.target.value==="Oui")
        setTest2(true)
      if (data.target.value==="Non")
      setTest2(false)
    }
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
            nonische:nonische,
            test1:test1,
            test2:test2,
            siegeAkVg:siegeAkVg,
            siegeDyVg:siegeDyVg,
            siegeAsVg:siegeAsVg,
            siegeHyVg:siegeHyVg,
            siegeAkLong:siegeAkLong,
            siegeDyLong:siegeDyLong,
            siegeAsLong:siegeAsLong,
            siegeHyLong:siegeHyLong,
            pasPrise:pasPrise,
            sousEnd:sousEnd,
            transmurale:transmurale,
            sousEp:sousEp,
            diffuse:diffuse,
            patchy:patchy,
        }
        console.log(values)
        e.preventDefault();
        props.ficheIRMPatient(props.patientList["cin"], values)
        props.navigation.navigate("Cercle1")
    }

    return (
        <section className="landing-background109">
        <div class="row">
  <div class=" d-flex  m-4 col-md-6  " >
  <MDBContainer   >
        <MDBRow>
          <MDBCol >
            <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>IRM cardiaque</Text>
            <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("")}</Text>
            
            <label><h3 class="text-primary">Masse myocardique(g/m²)</h3>
            <NumericInput mobile className="form-control" min={30} max={400} onChange={handleChange} />
            </label>
            <label><h3 class="text-primary">Diamètre de l’oreillette gauche(mm)</h3>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle5Change}/>
            </label>
            <div class="row">
            <label><h3 class="text-primary">Diamètre de l’oreillette droite(mm)</h3>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle6Change}/>
            </label>
            </div>
            <h3 class="text-primary">Etude de ventricule gauche :</h3>
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
            <div class="row mx-4">
                <InputRd id="1" name1="Akinésie" onChange={handle16Change} type="radio" value="Akinésie" name="gender" /> 
                <InputRd id="2" name1="Dyskinésie" onChange={handle16Change} type="radio" value="Dyskinésie" name="gender" /> 
                <InputRd id="3" name1="Asynchronisme" onChange={handle16Change} type="radio" value="Asynchronisme" name="gender" /> 
            </div>
            <div class="row mx-4">
                <InputRd id="4" name1="Hypokinésie" onChange={handle16Change} type="radio" value="Hypokinésie" name="gender" /> 
                <InputRd id="5" name1="Homogène" onChange={handle16Change} type="radio" value="Homogène" name="gender" /> 
            </div>
            {vg === "Akinésie" &&
                    <FormInput
                    placeholder="Precise le siège"
                    onChange={handle30Change}
                  />}
                  {vg === "Dyskinésie" &&
                    <FormInput
                    placeholder="Precise le siège"
                    onChange={handle31Change}
                  />}
                  {vg === "Asynchronisme" &&
                    <FormInput
                    placeholder="Precise le siège"
                    onChange={handle32Change}
                  />}
                  {vg === "Hypokinésie" &&
                    <FormInput
                    placeholder="Precise le siège"
                    onChange={handle33Change}
                  />}
                  
            <h3 class="text-primary">Etude de ventricule droite :</h3>
            <div class="row">
            <label><h3>FE (%)</h3>
            <NumericInput mobile className="form-control" min={1} max={100} onChange={handle17Change} />
            </label>
            <label><h3>VTD(ml)</h3>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle18Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>VTD indexé (ml/m²)</h3>
            <NumericInput mobile className="form-control" min={10} max={100} onChange={handle19Change} />
            </label>
            <label><h3>VTS (ml)</h3>
            <NumericInput mobile className="form-control" min={10} max={100}  onChange={handle20Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>VTS indexé (ml/m²)</h3>
            <NumericInput mobile className="form-control" min={10} max={400} onChange={handle21Change} />
            </label>
            <label><h3>VES (ml)</h3>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle22Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>VES indexé (ml/m²)</h3>
            <NumericInput mobile className="form-control" min={10} max={400} onChange={handle23Change} />
            </label>
            <label><h3>Débit cardiaque (ml)</h3>
            <NumericInput mobile className="form-control" min={0} max={40}  onChange={handle24Change}/>
            </label>
            </div>
            <div class="row">
            <label><h3>Débit cardiaque indexé (ml/min/m²)</h3>
            <NumericInput mobile className="form-control" min={0} max={40} onChange={handle25Change} />
            </label>
            </div>
            <h3>CINETIQUE SEGMENTAIRE VD :</h3>
            <div class="row mx-4">
                <InputRd id="6" name1="Akinésie" onChange={handle26Change} type="radio" value="Akinésie" name="gender1" /> 
                <InputRd id="7" name1="Dyskinésie" onChange={handle26Change} type="radio" value="Dyskinésie" name="gender1" /> 
                <InputRd id="8" name1="Asynchronisme" onChange={handle26Change} type="radio" value="Asynchronisme" name="gender1" /> 
            </div>
            <div class="row mx-4">
                <InputRd id="9" name1="Hypokinésie" onChange={handle26Change} type="radio" value="Hypokinésie" name="gender1" /> 
                <InputRd id="10" name1="Homogène" onChange={handle26Change} type="radio" value="Homogène" name="gender1" /> 
            </div>
            {longaxe === "Akinésie" &&
                    <FormInput
                    placeholder="Precise le siège"
                    onChange={handle34Change}
                  />}
                  {longaxe === "Dyskinésie" &&
                    <FormInput
                    placeholder="Precise le siège"
                    onChange={handle35Change}
                  />}
                  {longaxe === "Asynchronisme" &&
                    <FormInput
                    placeholder="Precise le siège"
                    onChange={handle36Change}
                  />}
                  {longaxe === "Hypokinésie" &&
                    <FormInput
                    placeholder="Precise le siège"
                    onChange={handle37Change}
                  />}
            <h3 class="text-primary">Étude injectée (Gadolinium) :</h3>
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-gray-700')}>Rehaussement tardif à 5-10 min</Text>
                <InputRd id="11" name1="Non" onChange={handle27Change} type="radio" value="Non" name="gender772" /> 
                <InputRd id="12" name1="Oui" onChange={handle27Change} type="radio" value="Oui" name="gender772" /> 
            </div>
            {rehauTar === true &&
            <div>
                <div class="row mx-4">
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}>- pas de prise de contraste :</Text>
            <InputRd id="13" name1="Non"  type="radio" value="Non" name="gender773" /> 
            <InputRd id="14" name1="Oui"  type="radio" value="Oui" name="gender773" /> 
        </div>
                <div class="row mx-4">
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}>- Prise de type ischémique :</Text>
            <InputRd id="15" name1="Non" onChange={handle71Change} type="radio" value="Non" name="gender773"onChange={handle38Change} /> 
            <InputRd id="16" name1="Oui" onChange={handle71Change} type="radio" value="Oui" name="gender773" onChange={handle38Change}/> 
        </div>
        {test1 === true &&
                    <div class="row mx-4"><div class="row mx-4">
                    <Text style={tailwind('text-lg p-2 text-Indigo-700')}>sous endocardique :</Text>
                    <InputRd id="17" name1="Non"  type="radio" value="Non" name="gender7773"onChange={handle39Change} /> 
                    <InputRd id="18" name1="Oui"  type="radio" value="Oui" name="gender7773"onChange={handle39Change} /> 
                </div>
                <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>transmurale :</Text>
                <InputRd id="19" name1="Non"  type="radio" value="Non" name="gender7773"onChange={handle40Change} /> 
                <InputRd id="20" name1="Oui"  type="radio" value="Oui" name="gender7773"onChange={handle40Change} /> 
            </div></div>}
        <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>- Prise non ischémique :</Text>
                <InputRd id="21" name1="Non" onChange={handle72Change} type="radio" value="Non" name="gender774" /> 
                <InputRd id="22" name1="Oui" onChange={handle72Change} type="radio" value="Oui" name="gender774" /> 
            </div>
            {test2 === true &&
                    <div class="row mx-4"><div class="row mx-4">
                    <Text style={tailwind('text-lg p-2 text-Indigo-700')}>sous epicardique :</Text>
                    <InputRd id="23" name1="Non"  type="radio" value="Non" name="gender7773"onChange={handle41Change} /> 
                    <InputRd id="24" name1="Oui"  type="radio" value="Oui" name="gender7773"onChange={handle41Change} /> 
                </div>
                <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>diffuse :</Text>
                <InputRd id="25" name1="Non"  type="radio" value="Non" name="gender7773"onChange={handle42Change} /> 
                <InputRd id="26" name1="Oui"  type="radio" value="Oui" name="gender7773"onChange={handle42Change} /> 
            </div><div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>patchy :</Text>
                <InputRd id="27" name1="Non"  type="radio" value="Non" name="gender7773" onChange={handle43Change}/> 
                <InputRd id="28" name1="Oui"  type="radio" value="Oui" name="gender7773" onChange={handle43Change}/> 
            </div></div>}
                  </div>
            }
            
        

            
                <View style={styles.row}>
                    <FormButton title={t("Précédent")} onPress={() => { props.navigation.navigate("SegmentSt") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
                </View>
                <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("Cercle1") }} />
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
