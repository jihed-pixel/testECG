import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./Actions/store";
import { createStackNavigator } from '@react-navigation/stack';


import Login from "./Components/Pages/login";
import Home from "./Components/Pages/home";
import AddPatient from "./Components/Pages/addPatient";
import SearchPatient from "./Components/Pages/searchPatient";
import SearchPatient1 from "./Components/Pages/save/searchPatient1";
import PatientDetails from "./Components/Pages/patientDetails";
import Information from "./Components/Pages/info/information";
import Dashbord from "./Components/Pages/dashbord";
import Dash1 from "./Components/Pages/Dashbord/dash1";
import Dash2 from "./Components/Pages/Dashbord/dash2";
import Dash3 from "./Components/Pages/Dashbord/dash3";
import Dash4 from "./Components/Pages/Dashbord/dash4";
import Dash11 from "./Components/Pages/save/dash11";
import Dash21 from "./Components/Pages/save/dash21";
import Dash31 from "./Components/Pages/save/dash31";
import Dash41 from "./Components/Pages/save/dash41";
import InfosGenerales2 from "./Components/Pages/info/infosGenerales2";
import EtudeECG from "./Components/Pages/save/etudeECG";
import EtudeQRS from "./Components/Pages/save/etudeQRS";
import EtudeOndeT from "./Components/Pages/save/etudeOndeT";
import ExamenClinique from "./Components/Pages/save/examenClinique";
import Interrogatoire from "./Components/Pages/save/interrogatoire";
import EtudeECG1 from "./Components/Pages/modify/etudeECG1";
import EtudeQRS1 from "./Components/Pages/modify/etudeQRS1";
import EtudeOndeT1 from "./Components/Pages/modify/etudeOndeT1";
import ExamenClinique1 from "./Components/Pages/modify/examenClinique1";
import Interrogatoire1 from "./Components/Pages/modify/interrogatoire1";
import SegmentSt from "./Components/Pages/save/segmentSt";
import SegmentSt1 from "./Components/Pages/modify/segmentSt1";
import AspectSegment from "./Components/Pages/save/aspectSegment";
import Cercle1 from "./Components/Pages/save/cercle1";
import Cercle2 from "./Components/Pages/save/cercle2";
import Cercle3 from "./Components/Pages/save/cercle3";
import Cercle4 from "./Components/Pages/save/cercle4";
import Ventricule from "./Components/Pages/save/ventricule";
import Ventricule2 from "./Components/Pages/save/ventricule2";
import Autre from "./Components/Pages/save/autre";
import FicheIRM from "./Components/Pages/save/ficheIRM";
import FicheEffort from "./Components/Pages/save/fichieEffort";

import AspectSegment1 from "./Components/Pages/modify/aspectSegment1";
import Cercle11 from "./Components/Pages/modify/cercle11";
import Cercle21 from "./Components/Pages/modify/cercle21";
import Cercle31 from "./Components/Pages/modify/cercle31";
import Cercle41 from "./Components/Pages/modify/cercle41";
import Ventricule1 from "./Components/Pages/modify/ventricule1";
import Autre1 from "./Components/Pages/modify/autre1";
import FicheIRM1 from "./Components/Pages/modify/ficheIRM1";
import FicheEffort1 from "./Components/Pages/modify/fichieEffort1";
const App = () => {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer >

<Stack.Navigator initialRouteName="Login" screenOptions={{
          headerShown: false

        }}
        >
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="AddPatient" component={AddPatient} />
           <Stack.Screen name="SearchPatient" component={SearchPatient} />
           <Stack.Screen name="SearchPatient1" component={SearchPatient1} />
           <Stack.Screen name="PatientDetails" component={PatientDetails} />
           <Stack.Screen name="Information" component={Information} />
           <Stack.Screen name="Dashbord" component={Dashbord} />
          <Stack.Screen name="Dash1" component={Dash1} />
          <Stack.Screen name="Dash2" component={Dash2} />
          <Stack.Screen name="Dash3" component={Dash3} />
          <Stack.Screen name="Dash4" component={Dash4} />
          <Stack.Screen name="Dash11" component={Dash11} />
          <Stack.Screen name="Dash21" component={Dash21} />
          <Stack.Screen name="Dash31" component={Dash31} />
          <Stack.Screen name="Dash41" component={Dash41} />
          <Stack.Screen name="InfosGenerales2" component={InfosGenerales2} />
          <Stack.Screen name="EtudeECG" component={EtudeECG} />
          <Stack.Screen name="EtudeQRS" component={EtudeQRS} />
          <Stack.Screen name="EtudeOndeT" component={EtudeOndeT} />
          <Stack.Screen name="ExamenClinique" component={ExamenClinique} />
          <Stack.Screen name="Interrogatoire" component={Interrogatoire} />
          <Stack.Screen name="EtudeECG1" component={EtudeECG1} />
          <Stack.Screen name="EtudeQRS1" component={EtudeQRS1} />
          <Stack.Screen name="EtudeOndeT1" component={EtudeOndeT1} />
          <Stack.Screen name="ExamenClinique1" component={ExamenClinique1} />
          <Stack.Screen name="Interrogatoire1" component={Interrogatoire1} />
          <Stack.Screen name="SegmentSt" component={SegmentSt} />
          <Stack.Screen name="SegmentSt1" component={SegmentSt1} />
          <Stack.Screen name="AspectSegment" component={AspectSegment} />
          <Stack.Screen name="Cercle1" component={Cercle1} />
          <Stack.Screen name="Cercle2" component={Cercle2} />
          <Stack.Screen name="Cercle3" component={Cercle3} />
          <Stack.Screen name="Cercle4" component={Cercle4} />
          <Stack.Screen name="Autre" component={Autre} />
          <Stack.Screen name="FicheIRM" component={FicheIRM} />
          <Stack.Screen name="FicheEffort" component={FicheEffort} />
          <Stack.Screen name="Ventricule" component={Ventricule} />
          <Stack.Screen name="Ventricule2" component={Ventricule2} />
          <Stack.Screen name="AspectSegment1" component={AspectSegment1} />
          <Stack.Screen name="Cercle11" component={Cercle11} />
          <Stack.Screen name="Cercle21" component={Cercle21} />
          <Stack.Screen name="Cercle31" component={Cercle31} />
          <Stack.Screen name="Cercle41" component={Cercle41} />
          <Stack.Screen name="Autre1" component={Autre1} />
          <Stack.Screen name="FicheIRM1" component={FicheIRM1} />
          <Stack.Screen name="FicheEffort1" component={FicheEffort1} />
          <Stack.Screen name="Ventricule1" component={Ventricule1} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
