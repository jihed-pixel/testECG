import React from 'react';
import { Steps } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
import { useTranslation } from "react-i18next";
import "../Pages/Tran/i18nextInit";
const Steps1 = (props) => {
  const { t } = useTranslation();
  return (
    <>
     <div>
    <Steps  current={props.current} vertical style={styles1}>
      <Steps.Item title={t("Informations générales")} />
      <Steps.Item title={t("Interrogatoire")}  />
      <Steps.Item title={t("Examen clinique")}  />
      <Steps.Item title={t("Étude de l’ECG")}  />
      <Steps.Item title={"Echographie cardiaque"}  />
      <Steps.Item title={"IRM cardiaque"}  />
      <Steps.Item title={"Epreuve d'effort"}  />
      
    </Steps>
   
  </div>
    </>
  );
};
const styles1 = {
    width: 'auto',
    display: 'inline-table',
    verticalAlign: 'top'
  };
export default Steps1;
