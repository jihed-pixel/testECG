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

const Ventricule2 = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })
    
    const [rvot1, setRvot1] = useState()
    const [rvot2, setRvot2] = useState()
    const [rvotp, setRvotp] = useState()
    const [volume, setVolume] = useState()
    const [tase, setTase] = useState()
    const [ondeSp, setOndeSp] = useState()
    const [vdvg, setVdvg] = useState()
    const [paps, setPaps] = useState()
    const [papm, setPapm] = useState()
    const [htap, setHtap] = useState()
    const [diametreg, setDiametreg] = useState()
    const [surfaceg, setSurfaceg] = useState()
    const [volumeIg, setVolumeIg] = useState()
    const [diametred, setDiametred] = useState()
    const [surfaced, setSurfaced] = useState()
    const [volumeId, setVolumeId] = useState()
    const [cia, setCia] = useState()
    const [aort, setAort] = useState()
    const [valsa, setValsa] = useState()
    const [sino, setSino] = useState()
    const [aorte, setaort] = useState()
    const [contiencevalve, setContiencevalve] = useState()
    const [cusp, setCusp] = useState()
    const [anomalie, setAnomalie] = useState()
    const [crossenormale, setCrossenormale] = useState()
    const [stenose, setStenose] = useState()
    const [contience, setContience] = useState()
    const [sec, setSec] = useState()
    const [rao, setRao] = useState()
    const [iao, setIao] = useState()
    const [normale, setNormale] = useState()
    const [im, setIm] = useState()
    const [rm, setRm] = useState()
    const [Precise, setPrecise] = useState()
    const [Precise1, setPrecise1] = useState()
    const [Precise2, setPrecise2] = useState()
    const [Precise3, setPrecise3] = useState()
    const [Precise4, setPrecise4] = useState()


    

    var handleSubmit = (e) => {
        var values = {
            
            
            
            rvot1:rvot1,
            rvot2:rvot2,
            rvotp:rvotp,
            volume:volume,
            tase:tase,
            ondeSp:ondeSp,
            vdvg:vdvg,
            paps:paps,
            papm:papm,
            htap:htap,
            diametreg:diametreg,
            surfaceg:surfaceg,
            volumeIg:volumeIg,
            diametred:diametred,
            surfaced:surfaced,
            volumeId:volumeId,
            cia:cia,
            aort:aort,
            valsa:valsa,
            sino:sino,
            aorte:aorte,
            contiencevalve:contiencevalve,
            cusp:cusp,
            anomalie:anomalie,
            crossenormale:crossenormale,
            stenose:stenose,
            contience:contience,
            sec:sec,
            rao:rao,
            iao:iao,
            normale:normale,
            im:im,
            rm:rm,
            Precise:Precise,
            Precise1:Precise1,
            Precise2:Precise2,
            Precise3:Precise3,
            Precise4:Precise4,
        }
        console.log(values)
        e.preventDefault();
        props.ventricule2Patient(props.patientList["cin"], values)
        props.navigation.navigate("Dash21")
    }
    var handle100Change = (text) => {
        setPrecise(text)
    }
    var handle101Change = (text) => {
      setPrecise1(text)
  }
  var handle102Change = (text) => {
    setPrecise2(text)
  }
  var handle103Change = (text) => {
    setPrecise3(text)
  }
  
  var handle104Change = (text) => {
    setPrecise4(text)
  }
    
    var handle19Change = (text) => {
        setRvot1(text)
    }
    var handle20Change = (text) => {
        setRvot2(text)
    }
    var handle21Change = (text) => {
        setRvotp(text)
    }
    var handle22Change = (text) => {
        setVolume(text)
    }
    var handle23Change = (text) => {
        setTase(text)
    }
    var handle24Change = (text) => {
        setOndeSp(text)
    }
    var handle25Change = (text) => {
        setVdvg(text)
    }
    var handle26Change = (text) => {
        setPaps(text)
    }
    var handle27Change = (text) => {
        setPapm(text)
    }
    var handle28Change = (data) => {
        if (data.target.value==="Oui")
        setHtap(true)
      if (data.target.value==="Non")
      setHtap(false)
    }
    var handle29Change = (text) => {
        setDiametreg(text)
    }
    var handle30Change = (text) => {
        setSurfaceg(text)
    }
    var handle31Change = (text) => {
        setVolumeIg(text)
    }
    var handle32Change = (text) => {
        setDiametred(text)
    }
    var handle33Change = (text) => {
        setSurfaced(text)
    }
    var handle34Change = (text) => {
        setVolumeId(text)
    }
    var handle35Change = (data) => {
        if (data.target.value==="Oui")
        setCia(true)
      if (data.target.value==="Non")
      setCia(false)
    }
    var handle36Change = (text) => {
        setAort(text)
    }
    var handle37Change = (text) => {
        setValsa(text)
    }
    var handle38Change = (text) => {
        setSino(text)
    }
    var handle39Change = (text) => {
        setaort(text)
    }
    var handle40Change = (data) => {
        if (data.target.value==="Oui")
        setContiencevalve(true)
      if (data.target.value==="Non")
      setContiencevalve(false)
    }
    var handle41Change = (text) => {
        setCusp(text)
    }
    var handle42Change = (data) => {
        if (data.target.value==="Oui")
        setAnomalie(true)
      if (data.target.value==="Non")
      setAnomalie(false)
    }
    var handle43Change = (data) => {
        if (data.target.value==="Oui")
        setCrossenormale(true)
      if (data.target.value==="Non")
      setCrossenormale(false)
    }
    var handle44Change = (data) => {
        if (data.target.value==="Oui")
        setStenose(true)
      if (data.target.value==="Non")
      setStenose(false)
    }
    var handle45Change = (text) => {
        setContience(text.target.value)
    }
    var handle46Change = (text) => {
        setSec(text.target.value)
    }
    var handle47Change = (data) => {
        if (data.target.value==="Oui")
        setRao(true)
      if (data.target.value==="Non")
      setRao(false)
    }
    var handle48Change = (data) => {
        if (data.target.value==="Oui")
        setIao(true)
      if (data.target.value==="Non")
      setIao(false)
    }
    var handle70Change = (data) => {
        if (data.target.value==="Oui")
        setNormale(true)
      if (data.target.value==="Non")
      setNormale(false)
    }
    var handle71Change = (data) => {
        if (data.target.value==="Oui")
        setIm(true)
      if (data.target.value==="Non")
      setIm(false)
    }
    var handle72Change = (data) => {
        if (data.target.value==="Oui")
        setRm(true)
      if (data.target.value==="Non")
      setRm(false)
    }
    
    

    return (
        <section className="landing-background107">
        <div class="row">
  <div class=" d-flex  m-4 col-md-6  " >
  <MDBContainer   >
        <MDBRow>
          <MDBCol >
            <MDBCard>
            <View style={tailwind(' items-center ')} >
            <Text style={tailwind('text-blue-700 font-bold text-3xl text-center')}>Echographie cardiaque</Text>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Ventricule droit :</Text>
            <Text style={tailwind('p-2 text-blue-400 text-2xl ')}>Diamètres :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>RVOT1(mm)</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle19Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>RVOT2(mm)</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle20Change}/>
            </label>
            </div>
            
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>RVOTP(mm)</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle21Change}/>
            </label>
            <Text style={tailwind('p-2 text-blue-400 text-2xl ')}>Volume :</Text>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Volume (ml)</Text>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle22Change}/>
            </label>
            
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Fonction :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>TAPSE(mm)</Text>
            <NumericInput mobile className="form-control" min={1} max={40}  onChange={handle23Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>onde S’(cm/s)</Text>
            <NumericInput mobile className="form-control" min={1} max={40}  onChange={handle24Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Rapport VD/VG</Text>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Rapport VD/VG</Text>
            <NumericInput mobile className="form-control" min={0} max={4}  onChange={handle25Change}/>
            </label>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>HTAP :</Text>
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>HTAP</Text>
                <InputRd id="1" name1="Non" onChange={handle28Change} type="radio" value="Non" name="gender" /> 
                <InputRd id="2" name1="Oui" onChange={handle28Change} type="radio" value="Oui" name="gender" /> 
            </div>
            
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAPS (mmhg)</Text>
            <NumericInput mobile className="form-control" min={0} max={150}  onChange={handle26Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAPM (mmhg)</Text>
            <NumericInput mobile className="form-control" min={0} max={100}  onChange={handle27Change}/>
            </label>
            </div>
            
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Oreillette gauche :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Diamètre(mm)</Text>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle29Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Surface(cm²)</Text>
            <NumericInput mobile className="form-control" min={5} max={60}  onChange={handle30Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Volume indexé(ml/m²)</Text>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle31Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Oreillette droite :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Diamètre(mm)</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle32Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Surface(cm²)</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle33Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Volume indexé(ml/m²)</Text>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle34Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Septum inter auriculaire :</Text>
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>intégrité CIA</Text>
                <InputRd id="3" name1="Non" onChange={handle35Change} type="radio" value="Non" name="gender1" /> 
                <InputRd id="4" name1="Oui" onChange={handle35Change} type="radio" value="Oui" name="gender1" /> 
            </div>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Valve aortique et aorte ascendant:</Text>
            <div class="row">
            <label><Text style={tailwind('p-2 text-blue-400 text-2xl')}>Anneau aortique(mm)</Text>
            <NumericInput mobile className="form-control" min={10} max={60}  onChange={handle36Change}/>
            </label>
            <label><Text style={tailwind('p-2 text-blue-400 text-2xl')}>Sinus de Valsalva(mm)</Text>
            <NumericInput mobile className="form-control" min={10} max={80}  onChange={handle37Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('p-2 text-blue-400 text-2xl')}>Sinus sino tubaire(mm)</Text>
            <NumericInput mobile className="form-control" min={10} max={60}  onChange={handle38Change}/>
            </label>
            <label><Text style={tailwind('p-2 text-blue-400 text-2xl')}>Aorte ascendant(mm)</Text>
            <NumericInput mobile className="form-control" min={10} max={100}  onChange={handle39Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Continence</Text>
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>normale :</Text>
                <InputRd id="5" name1="Non" onChange={handle40Change} type="radio" value="Non" name="gender2" /> 
                <InputRd id="6" name1="Oui" onChange={handle40Change} type="radio" value="Oui" name="gender2" /> 
            </div>
            {contiencevalve === false &&
            <div><div class="row mx-4">
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Rao :</Text>
            <InputRd id="7" name1="Non" onChange={handle47Change} type="radio" value="Non" name="gender3" /> 
            <InputRd id="8" name1="Oui" onChange={handle47Change} type="radio" value="Oui" name="gender3" /> 
        </div>
        {rao === true &&
                    <FormInput
                    placeholder="préciser surface en cm2"
                    onChange={handle100Change}
                  />}
        <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>IAo :</Text>
                <InputRd id="9" name1="Non" onChange={handle48Change} type="radio" value="Non" name="gender4" /> 
                <InputRd id="75" name1="Oui" onChange={handle48Change} type="radio" value="Oui" name="gender4" /> 
            </div>
            {iao === true &&
                    <FormInput
                    placeholder="préciser grade"
                    onChange={handle101Change}
                  />}
                  </div>
            }
            <div class="row">
            <label><Text style={tailwind('p-2 text-blue-400 text-2xl')}>Nombre de cusp</Text>
            <NumericInput mobile className="form-control" min={1} max={3}  onChange={handle41Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Naissance coronaire :</Text>
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>anomalie de naissance</Text>
                <InputRd id="74" name1="Non" onChange={handle42Change} type="radio" value="Non" name="gender5" /> 
                <InputRd id="73" name1="Oui" onChange={handle42Change} type="radio" value="Oui" name="gender5" /> 
            </div>
            {anomalie === true &&
                    <FormInput
                    placeholder="Preciser l'anomalie"
                    onChange={handle102Change}
                  />}
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Crosse de l’aorte :</Text>
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Dimension de la crosse normale</Text>
                <InputRd id="11" name1="Non" onChange={handle43Change} type="radio" value="Non" name="gender6" /> 
                <InputRd id="12" name1="Oui" onChange={handle43Change} type="radio" value="Oui" name="gender6" /> 
            </div>
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Sténose de l’isthme aortique</Text>
                <InputRd id="13" name1="Non" onChange={handle44Change} type="radio" value="Non" name="gender7" /> 
                <InputRd id="14" name1="Oui" onChange={handle44Change} type="radio" value="Oui" name="gender7" /> 
            </div>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Valve mitrale :</Text>
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Continence</Text>
                <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>normale :</Text>
                <InputRd id="15" name1="Non" onChange={handle70Change} type="radio" value="Non" name="gender72" /> 
                <InputRd id="16" name1="Oui" onChange={handle70Change} type="radio" value="Oui" name="gender72" /> 
            </div>
            {normale === false &&
            <div><div class="row mx-4">
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}>IM :</Text>
            <InputRd id="18" name1="Non" onChange={handle71Change} type="radio" value="Non" name="gender73" /> 
            <InputRd id="19" name1="Oui" onChange={handle71Change} type="radio" value="Oui" name="gender73" /> 
        </div>
        {im === true &&
                    <FormInput
                    placeholder="préciser grade"
                    onChange={handle103Change}
                  />}
        <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>RM :</Text>
                <InputRd id="21" name1="Non" onChange={handle72Change} type="radio" value="Non" name="gender74" /> 
                <InputRd id="22" name1="Oui" onChange={handle72Change} type="radio" value="Oui" name="gender74" /> 
            </div>
            {rm === true &&
                    <FormInput
                    placeholder="préciser surface en cm2"
                    onChange={handle104Change}
                  />}
                  </div>
            }  
            </div>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Péricarde : </Text>
            <div class="row mx-4">
                <InputRd id="23" name1="Sec" onChange={handle46Change} type="radio" value="Sec" name="gender9" /> 
                <InputRd id="24" name1="Epanchement péricardique" onChange={handle46Change} type="radio" value="Epanchement péricardique" name="gender9" /> 
                <InputRd id="25" name1="Signes de constriction" onChange={handle46Change} type="radio" value="RM" name="gender9" /> 
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
    ventricule2Patient: actions.ventriculePatient

};

export default connect(mapStateToProps, mapActionToProps)(Ventricule2);
