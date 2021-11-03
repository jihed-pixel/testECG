import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import '../home.css';
import Steps from "../../Form/Steps";
import { useTranslation } from "react-i18next";
import "../Tran/i18nextInit";
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


const SearchPatient1 = (props) => {
  const { t } = useTranslation();
  useEffect(() => {
    props.search(search,props.loggedUser.username)
  }, [])


  const [search, setSearch] = useState(0)
  const [search2, setSearch2] = useState(0)

  const handleSearchChange = (text) => {
    setSearch(text)
    //console.log(search)
  }
  const handleSearch = () => {
    setSearch2(search)
    console.log(search)
    props.search(search,props.loggedUser.username)


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
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>{t("Rechercher un patient11")}</Text>
        <View style={tailwind('py-8 items-center')}>

          <FormInput
            placeholder="Search...Type CIN"
            onChangeText={handleSearchChange}
          />

          <FormButton title={t("Rechercher")}onPress={handleSearch} />
          <View style={tailwind('py-8 items-center')}>
            <Text style={tailwind("text-red-500")}>
              {(search2 != 0) && ((typeof (props.patientList) === 'string' && props.patientList) ||
                (
                  <View style={tailwind('items-center')}>
                  <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>{props.patientList.cin} </Text>
                    <FormButton title={t("Suivant")} onPress={() => { props.navigation.navigate("Interrogatoire") }} />
                  </View>



                ))}

            </Text>

          </View>




        </View>

        <View style={styles.row}>
          <FormButton title="Ajouter un patient" onPress={() => { props.navigation.navigate("AddPatient"); }} />
          <FormButton title="Précédent" onPress={() => { props.navigation.navigate("Home"); }} />
        </View>
      </View>
      </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  class="col-md-1"/>  
    </div>

    </section>  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {

  search: actions.searchPatient
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

export default connect(mapStateToProps, mapActionToProps)(SearchPatient1);
