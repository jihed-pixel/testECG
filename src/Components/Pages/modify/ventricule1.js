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
        }
        console.log(values)
        e.preventDefault();
        props.ventriculePatient(props.patientList["cin"], values)
        props.navigation.navigate("PatientDetails")
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
    
    

    return (
        <section className="landing-background">
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
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>DTD VG indexé (mm²)</Text>
            <NumericInput mobile className="form-control" min={10} max={80}  onChange={handle1Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>DTS VG (mm)</Text>
            <NumericInput mobile className="form-control" min={10} max={80}  onChange={handle2Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>DTS  VG indexé (mm²)</Text>
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
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Onde E</Text>
            <NumericInput mobile className="form-control" min={1} max={200}  onChange={handle14Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>onde A</Text>
            <NumericInput mobile className="form-control" min={0} max={10}  onChange={handle15Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>rapport E/A</Text>
            <NumericInput mobile className="form-control" min={1} max={10}  onChange={handle16Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>onde E’</Text>
            <NumericInput mobile className="form-control" min={1} max={40}  onChange={handle17Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>E/E’</Text>
            <NumericInput mobile className="form-control" min={1} max={40}  onChange={handle18Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Ventricule droit :</Text>
            <Text style={tailwind('p-2 text-blue-400 text-2xl ')}>Diamètres :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>RVOT1</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle19Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>RVOT2</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle20Change}/>
            </label>
            </div>
            
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>RVOTP</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle21Change}/>
            </label>
            <Text style={tailwind('p-2 text-blue-400 text-2xl ')}>Volume :</Text>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Volume (ml)</Text>
            <NumericInput mobile className="form-control" min={10} max={400}  onChange={handle22Change}/>
            </label>
            
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Fonction :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>TAPSE</Text>
            <NumericInput mobile className="form-control" min={1} max={40}  onChange={handle23Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>onde S’</Text>
            <NumericInput mobile className="form-control" min={1} max={40}  onChange={handle24Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Rapport VD/VG</Text>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Rapport VD/VG</Text>
            <NumericInput mobile className="form-control" min={0} max={4}  onChange={handle25Change}/>
            </label>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>HTAP :</Text>
            <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>HTAP</Text>
                <input onChange={handle28Change} type="radio" value="Non" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle28Change} type="radio" value="Oui" name="gender" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            {htap === true &&
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAPS (mmhg)</Text>
            <NumericInput mobile className="form-control" min={0} max={150}  onChange={handle26Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAPM</Text>
            <NumericInput mobile className="form-control" min={0} max={100}  onChange={handle27Change}/>
            </label>
            </div>}
            
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Oreillette gauche :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Diamètre(mm)</Text>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle29Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Surface(mm²)</Text>
            <NumericInput mobile className="form-control" min={5} max={60}  onChange={handle30Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Volume indexé(ml/m²)</Text>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle31Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Oreillette droite :</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Diamètre(mm)</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle32Change}/>
            </label>
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Surface(mm²)</Text>
            <NumericInput mobile className="form-control" min={5} max={70}  onChange={handle33Change}/>
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Volume indexé(ml/m²)</Text>
            <NumericInput mobile className="form-control" min={5} max={80}  onChange={handle34Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Septum inter auriculaire :</Text>
            <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>intégrité CIA</Text>
                <input onChange={handle35Change} type="radio" value="Non" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle35Change} type="radio" value="Oui" name="gender1" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
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
            <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>normale :</Text>
                <input onChange={handle40Change} type="radio" value="Non" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle40Change} type="radio" value="Oui" name="gender2" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            {contiencevalve === false &&
            <div><div  >
            <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Rao :</Text>
            <input onChange={handle47Change} type="radio" value="Non" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
            <input onChange={handle47Change} type="radio" value="Oui" name="gender3" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
        </div>
        {rao === true &&
                    <FormInput
                    placeholder="Precise"
                  />}
        <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>IAo :</Text>
                <input onChange={handle48Change} type="radio" value="Non" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle48Change} type="radio" value="Oui" name="gender4" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            {iao === true &&
                    <FormInput
                    placeholder="Precise"
                  />}
                  </div>
            }
            <div class="row">
            <label><Text style={tailwind('p-2 text-blue-400 text-2xl')}>Nombre de cusp</Text>
            <NumericInput mobile className="form-control" min={1} max={3}  onChange={handle41Change}/>
            </label>
            </div>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>Naissance coronaire :</Text>
            <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>anomalie de naissance</Text>
                <input onChange={handle42Change} type="radio" value="Non" name="gender5" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle42Change} type="radio" value="Oui" name="gender5" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            {anomalie === true &&
                    <FormInput
                    placeholder="Precise"
                  />}
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Crosse de l’aorte :</Text>
            <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Dimension de la crosse normale</Text>
                <input onChange={handle43Change} type="radio" value="Non" name="gender6" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle43Change} type="radio" value="Oui" name="gender6" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Sténose de l’isthme aortique</Text>
                <input onChange={handle44Change} type="radio" value="Non" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Non")}</Text>
                <input onChange={handle44Change} type="radio" value="Oui" name="gender7" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>{t("Oui")}</Text>
            </div>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Valve mitrale :</Text>
            <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Continence</Text>
                <input onChange={handle45Change} type="radio" value="IM" name="gender8" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>IM</Text>
                <input onChange={handle45Change} type="radio" value="RM" name="gender8" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>RM</Text>
            </div>
            <Text style={tailwind('p-2 text-indigo-700 text-2xl')}>Péricarde : </Text>
            <div  >
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>Sec</Text>
                <input onChange={handle46Change} type="radio" value="Epanchement péricardique" name="gender9" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Epanchement péricardique</Text>
                <input onChange={handle46Change} type="radio" value="RM" name="gender9" /> <Text style={tailwind('text-lg p-2 text-gray-700')}>Signes de constriction</Text>
            </div>
            

            <FormButton title={t("Annuler")} onPress={() => { props.navigation.navigate("PatientDetails") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
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
