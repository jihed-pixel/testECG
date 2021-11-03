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

const FichieEffort = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
    })
   
    const [charge, setCharge] = useState()
    const [ta, setTa] = useState()
    const [tap, setTap] = useState()
    const [fc, setFc] = useState()
    const [trouCon, setTrouCon] = useState()
    const [trouRep, setTrouRep] = useState()
    const [trouRyt, setTrouRyt] = useState()
    const [charge2, setCharge2] = useState()
    const [ta2, setTa2] = useState()
    const [tap2, setTap2] = useState()
    const [fc2, setFc2] = useState()
    const [trouCon2, setTrouCon2] = useState()
    const [trouRep2, setTrouRep2] = useState()
    const [trouRyt2, setTrouRyt2] = useState()
    const [charge3, setCharge3] = useState()
    const [ta3, setTa3] = useState()
    const [tap3, setTap3] = useState()
    const [fc3, setFc3] = useState()
    const [trouCon3, setTrouCon3] = useState()
    const [trouRep3, setTrouRep3] = useState()
    const [trouRyt3, setTrouRyt3] = useState()
    const [charge4, setCharge4] = useState()
    const [ta4, setTa4] = useState()
    const [tap4, setTap4] = useState()
    const [fc4, setFc4] = useState()
    const [trouCon4, setTrouCon4] = useState()
    const [trouRep4, setTrouRep4] = useState()
    const [trouRyt4, setTrouRyt4] = useState()
    const [charge5, setCharge5] = useState()
    const [ta5, setTa5] = useState()
    const [tap5, setTap5] = useState()
    const [fc5, setFc5] = useState()
    const [trouCon5, setTrouCon5] = useState()
    const [trouRep5, setTrouRep5] = useState()
    const [trouRyt5, setTrouRyt5] = useState()
    const [taR, setTaR] = useState()
    const [tapR, setTapR] = useState()
    const [fcR, setFcR] = useState()
    const [trouConR, setTrouConR] = useState()
    const [trouRepR, setTrouRepR] = useState()
    const [trouRytR, setTrouRytR] = useState()
    const [Precise, setPrecise] = useState()
    const [Precise1, setPrecise1] = useState()
    const [Precise2, setPrecise2] = useState()
    const [Precise3, setPrecise3] = useState()
    const [Precise4, setPrecise4] = useState()
    const [Precise5, setPrecise5] = useState()
    const [Precise6, setPrecise6] = useState()
    const [Precise7, setPrecise7] = useState()
    const [Precise8, setPrecise8] = useState()
    const [Precise9, setPrecise9] = useState()
    const [Precise10, setPrecise10] = useState()
    const [Precise11, setPrecise11] = useState()
    const [Precise12, setPrecise12] = useState()
    const [Precise13, setPrecise13] = useState()
    const [Precise14, setPrecise14] = useState()
    const [Precise15, setPrecise15] = useState()
    const [Precise16, setPrecise16] = useState()
    const [Precise17, setPrecise17] = useState()
    var handle100Change = (text) => {
      setPrecise(text)
  }
  var handle101Change = (text) => {
    setPrecise1(text)
}
var handle102Change = (text) => {
  setPrecise12(text)
}
var handle103Change = (text) => {
  setPrecise3(text)
}

var handle104Change = (text) => {
  setPrecise4(text)
}
var handle105Change = (text) => {
  setPrecise5(text)
}

var handle106Change = (text) => {
  setPrecise6(text)
}
var handle107Change = (text) => {
  setPrecise7(text)
}

var handle108Change = (text) => {
  setPrecise8(text)
}
var handle109Change = (text) => {
  setPrecise9(text)
}

var handle110Change = (text) => {
      setPrecise10(text)
  }
  var handle111Change = (text) => {
    setPrecise11(text)
}
var handle112Change = (text) => {
  setPrecise12(text)
}
var handle113Change = (text) => {
  setPrecise13(text)
}
var handle114Change = (text) => {
  setPrecise14(text)
}
var handle115Change = (text) => {
  setPrecise15(text)
}
var handle116Change = (text) => {
  setPrecise16(text)
}
var handle117Change = (text) => {
  setPrecise17(text)
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

    var handle21Change = (text) => {
        setCharge2(text)
    }
    var handle22Change = (text) => {
        setTa2(text)
    }
    var handle23Change = (text) => {
        setTap2(text)
    }
    var handle24Change = (text) => {
        setFc2(text)
    }
    var handle25Change = (data) => {
        if (data.target.value==="Oui")
        setTrouCon2(true)
      if (data.target.value==="Non")
      setTrouCon2(false)
    }
    var handle26Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRep2(true)
      if (data.target.value==="Non")
      setTrouRep2(false)
    }
    var handle27Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRyt2(true)
      if (data.target.value==="Non")
      setTrouRyt2(false)
    }

    var handle31Change = (text) => {
        setCharge3(text)
    }
    var handle32Change = (text) => {
        setTa3(text)
    }
    var handle33Change = (text) => {
        setTap3(text)
    }
    var handle34Change = (text) => {
        setFc3(text)
    }
    var handle35Change = (data) => {
        if (data.target.value==="Oui")
        setTrouCon3(true)
      if (data.target.value==="Non")
      setTrouCon3(false)
    }
    var handle36Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRep3(true)
      if (data.target.value==="Non")
      setTrouRep3(false)
    }
    var handle37Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRyt3(true)
      if (data.target.value==="Non")
      setTrouRyt3(false)
    }

    var handle41Change = (text) => {
        setCharge4(text)
    }
    var handle42Change = (text) => {
        setTa4(text)
    }
    var handle43Change = (text) => {
        setTap4(text)
    }
    var handle44Change = (text) => {
        setFc4(text)
    }
    var handle45Change = (data) => {
        if (data.target.value==="Oui")
        setTrouCon4(true)
      if (data.target.value==="Non")
      setTrouCon4(false)
    }
    var handle46Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRep4(true)
      if (data.target.value==="Non")
      setTrouRep4(false)
    }
    var handle47Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRyt4(true)
      if (data.target.value==="Non")
      setTrouRyt4(false)
    }

    var handle51Change = (text) => {
        setCharge5(text)
    }
    var handle52Change = (text) => {
        setTa5(text)
    }
    var handle53Change = (text) => {
        setTap5(text)
    }
    var handle54Change = (text) => {
        setFc5(text)
    }
    var handle55Change = (data) => {
        if (data.target.value==="Oui")
        setTrouCon5(true)
      if (data.target.value==="Non")
      setTrouCon5(false)
    }
    var handle56Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRep5(true)
      if (data.target.value==="Non")
      setTrouRep5(false)
    }
    var handle57Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRyt5(true)
      if (data.target.value==="Non")
      setTrouRyt5(false)
    }

    
    var handle62Change = (text) => {
        setTaR(text)
    }
    var handle63Change = (text) => {
        setTapR(text)
    }
    var handle64Change = (text) => {
        setFcR(text)
    }
    var handle65Change = (data) => {
        if (data.target.value==="Oui")
        setTrouCon(true)
      if (data.target.value==="Non")
      setTrouCon(false)
    }
    var handle66Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRep(true)
      if (data.target.value==="Non")
      setTrouRep(false)
    }
    var handle67Change = (data) => {
        if (data.target.value==="Oui")
        setTrouRyt(true)
      if (data.target.value==="Non")
      setTrouRyt(false)
    }
    var handleSubmit = (e) => {
        var values = {
            charge:charge,
            ta:ta,
            tap:tap,
            fc:fc,
            trouCon:trouCon,
            trouRep:trouRep,
            trouRyt:trouRyt,
            charge2:charge2,
            ta2:ta2,
            tap2:tap2,
            fc2:fc2,
            trouCon2:trouCon2,
            trouRep2:trouRep2,
            trouRyt2:trouRyt2,
            charge3:charge3,
            ta3:ta3,
            tap3:tap3,
            fc3:fc3,
            trouCon3:trouCon3,
            trouRep3:trouRep3,
            trouRyt3:trouRyt3,
            charge4:charge4,
            ta4:ta4,
            tap4:tap4,
            fc4:fc4,
            trouCon4:trouCon4,
            trouRep4:trouRep4,
            trouRyt4:trouRyt4,
            charge5:charge5,
            ta5:ta5,
            tap5:tap5,
            fc5:fc5,
            trouCon5:trouCon5,
            trouRep5:trouRep5,
            trouRyt5:trouRyt5,
            taR:taR,
            tapR:tapR,
            fcR:fcR,
            trouConR:trouConR,
            trouRepR:trouRepR,
            trouRytR:trouRytR,
            Precise:Precise,
            Precise1:Precise1,
            Precise2:Precise2,
            Precise3:Precise3,
            Precise4:Precise4,
            Precise5:Precise5,
            Precise6:Precise6,
            Precise7:Precise7,
            Precise8:Precise8,
            Precise9:Precise9,
            Precise10:Precise10,
            Precise11:Precise11,
            Precise12:Precise12,
            Precise13:Precise13,
            Precise14:Precise14,
            Precise15:Precise15,
            Precise16:Precise16,
            Precise17:Precise17,
            
        }
        console.log(values)
        e.preventDefault();
        props.fichePatient(props.patientList["cin"], values)
        props.navigation.navigate("FicheEffort")
    }

    return (
        <section className="landing-background108">
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
            <div class="row mx-4">
                <InputRd id="1" name1="Vélo-ergométrique"  type="radio" value="épuisement musculaire" name="gender111" /> 
                <InputRd id="2" name1="Tapis roulant"  type="radio" value="troubles de conduction sévères" name="gender111" /> 
            </div>
            <Text style={tailwind('p-2 text-blue-400 text-2xl')}>1er Palier(2min):</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Charge (w)</Text>
            <NumericInput mobile className="form-control" min={0} max={400} onChange={handle1Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAS (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={30} onChange={handle2Change} />
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAD (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={20} onChange={handle3Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>FC (% de la FMT)</Text>
            <NumericInput mobile className="form-control" min={10} max={120} onChange={handle4Change} />
            </label>
            </div>
            <div class="row">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de conduction </Text>
                <InputRd id="3" name1="Non" onChange={handle5Change} type="radio" value="Non" name="gender2" /> 
                <InputRd id="4" name1="Oui" onChange={handle5Change} type="radio" value="Oui" name="gender2" /> 
            </div>
            {trouCon === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle100Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de répolarisation</Text>
                <InputRd id="5" name1="Non" onChange={handle6Change} type="radio" value="Non" name="gender3" /> 
                
                <InputRd id="6" name1="Oui" onChange={handle6Change} type="radio" value="Oui" name="gender3" /> 
                
            </div>
            {trouRep === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle101Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de rythme</Text>
                <InputRd id="7" name1="Non" onChange={handle7Change} type="radio" value="Non" name="gender4" /> 
                <InputRd id="8" name1="Oui" onChange={handle7Change} type="radio" value="Oui" name="gender4" /> 
            </div>
            {trouRyt === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle102Change}
                  />}

<Text style={tailwind('p-2 text-blue-400 text-2xl')}>2eme Palier(2min):</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Charge (w)</Text>
            <NumericInput mobile className="form-control" min={0} max={400} onChange={handle21Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAS (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={30} onChange={handle22Change} />
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAD (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={20} onChange={handle23Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>FC (% de la FMT)</Text>
            <NumericInput mobile className="form-control" min={10} max={120} onChange={handle24Change} />
            </label>
            </div>
            <div class="row">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de conduction </Text>
                <InputRd id="9" name1="Non" onChange={handle25Change} type="radio" value="Non" name="gender22" /> 
                <InputRd id="10" name1="Oui" onChange={handle25Change} type="radio" value="Oui" name="gender22" /> 
            </div>
            {trouCon === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle103Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de répolarisation</Text>
                <InputRd id="11" name1="Non" onChange={handle26Change} type="radio" value="Non" name="gender23" /> 
                
                <InputRd id="12" name1="Oui" onChange={handle26Change} type="radio" value="Oui" name="gender23" /> 
                
            </div>
            {trouRep === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle104Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de rythme</Text>
                <InputRd id="13" name1="Non" onChange={handle27Change} type="radio" value="Non" name="gender24" /> 
                <InputRd id="14" name1="Oui" onChange={handle27Change} type="radio" value="Oui" name="gender24" /> 
            </div>
            {trouRyt === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle105Change}
                  />}

<Text style={tailwind('p-2 text-blue-400 text-2xl')}>3eme Palier(2min):</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Charge (w)</Text>
            <NumericInput mobile className="form-control" min={0} max={400} onChange={handle31Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAS (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={30} onChange={handle32Change} />
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAD (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={20} onChange={handle33Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>FC (% de la FMT)</Text>
            <NumericInput mobile className="form-control" min={10} max={120} onChange={handle34Change} />
            </label>
            </div>
            <div class="row">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de conduction </Text>
                <InputRd id="15" name1="Non" onChange={handle35Change} type="radio" value="Non" name="gender32" /> 
                <InputRd id="16" name1="Oui" onChange={handle35Change} type="radio" value="Oui" name="gender32" /> 
            </div>
            {trouCon === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle106Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de répolarisation</Text>
                <InputRd id="17" name1="Non" onChange={handle36Change} type="radio" value="Non" name="gender33" /> 
                
                <InputRd id="18" name1="Oui" onChange={handle36Change} type="radio" value="Oui" name="gender33" /> 
                
            </div>
            {trouRep === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle107Change}
                  />}
                  <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de rythme</Text>
                <InputRd id="19" name1="Non" onChange={handle37Change} type="radio" value="Non" name="gender34" /> 
                <InputRd id="20" name1="Oui" onChange={handle37Change} type="radio" value="Oui" name="gender34" /> 
            </div>
            {trouRyt === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle108Change}
                  />}

<Text style={tailwind('p-2 text-blue-400 text-2xl')}>4eme Palier(2min):</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Charge (w)</Text>
            <NumericInput mobile className="form-control" min={0} max={400} onChange={handle41Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAS (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={30} onChange={handle42Change} />
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAD (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={20} onChange={handle43Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>FC (% de la FMT)</Text>
            <NumericInput mobile className="form-control" min={10} max={120} onChange={handle44Change} />
            </label>
            </div>
            <div class="row">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de conduction </Text>
                <InputRd id="22" name1="Non" onChange={handle45Change} type="radio" value="Non" name="gender42" /> 
                <InputRd id="23" name1="Oui" onChange={handle45Change} type="radio" value="Oui" name="gender42" /> 
            </div>
            {trouCon === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle109Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de répolarisation</Text>
                <InputRd id="24" name1="Non" onChange={handle46Change} type="radio" value="Non" name="gender43" /> 
                
                <InputRd id="25" name1="Oui" onChange={handle46Change} type="radio" value="Oui" name="gender43" /> 
                
            </div>
            {trouRep === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle110Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de rythme</Text>
                <InputRd id="26" name1="Non" onChange={handle47Change} type="radio" value="Non" name="gender44" /> 
                <InputRd id="27" name1="Oui" onChange={handle47Change} type="radio" value="Oui" name="gender44" /> 
            </div>
            {trouRyt === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle111Change}
                  />}

<Text style={tailwind('p-2 text-blue-400 text-2xl')}>5eme Palier(2min):</Text>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>Charge (w)</Text>
            <NumericInput mobile className="form-control" min={0} max={400} onChange={handle51Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAS (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={30} onChange={handle52Change} />
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAD (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={20} onChange={handle53Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>FC (% de la FMT)</Text>
            <NumericInput mobile className="form-control" min={10} max={120} onChange={handle54Change} />
            </label>
            </div>
            <div class="row">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de conduction </Text>
                <InputRd id="28" name1="Non" onChange={handle55Change} type="radio" value="Non" name="gender52" /> 
                <InputRd id="29" name1="Oui" onChange={handle55Change} type="radio" value="Oui" name="gender52" /> 
            </div>
            {trouCon === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle112Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de répolarisation</Text>
                <InputRd id="30" name1="Non" onChange={handle56Change} type="radio" value="Non" name="gender53" /> 
                
                <InputRd id="31" name1="Oui" onChange={handle56Change} type="radio" value="Oui" name="gender53" /> 
                
            </div>
            {trouRep === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle113Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de rythme</Text>
                <InputRd id="" name1="Non" onChange={handle57Change} type="radio" value="Non" name="gender54" /> 
                <InputRd id="" name1="Oui" onChange={handle57Change} type="radio" value="Oui" name="gender54" /> 
            </div>
            {trouRyt === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle114Change}
                  />}
            


<Text style={tailwind('p-2 text-blue-400 text-2xl')}>Récupération:</Text>
            <div class="row">  
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAS (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={30} onChange={handle62Change} />
            </label>
            </div>
            <div class="row">
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>PAD (mmhg)</Text>
            <NumericInput mobile className="form-control" min={1} max={20} onChange={handle63Change} />
            </label>   
            <label><Text style={tailwind('text-lg p-2 text-Indigo-700 ')}>FC (% de la FMT)</Text>
            <NumericInput mobile className="form-control" min={10} max={120} onChange={handle64Change} />
            </label>
            </div>
            <div class="row">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de conduction </Text>
                <InputRd id="33" name1="Non" onChange={handle65Change} type="radio" value="Non" name="gender62" /> 
                <InputRd id="34" name1="Oui" onChange={handle65Change} type="radio" value="Oui" name="gender62" /> 
            </div>
            {trouCon === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle115Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de répolarisation</Text>
                <InputRd id="35" name1="Non" onChange={handle66Change} type="radio" value="Non" name="gender63" /> 
                
                <InputRd id="36" name1="Oui" onChange={handle66Change} type="radio" value="Oui" name="gender63" /> 
                
            </div>
            {trouRep === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle116Change}
                  />}
            <div class="row mx-4">
                <Text style={tailwind('text-lg p-2 text-Indigo-700')}>troubles de rythme</Text>
                <InputRd id="37" name1="Non" onChange={handle67Change} type="radio" value="Non" name="gender64" /> 
                <InputRd id="38" name1="Oui" onChange={handle67Change} type="radio" value="Oui" name="gender64" /> 
            </div>
            {trouRyt === true &&
                    <FormInput
                    placeholder="Preciser"
                    onChange={handle117Change}
                  />}
                <View style={styles.row}>
                    <FormButton title={t("Précédent")} onPress={() => { props.navigation.navigate("Cercle4") }} />
                    <FormButton title={t("Enregistre")} onPress={handleSubmit} />
                </View>
                <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("Autre") }} />
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
