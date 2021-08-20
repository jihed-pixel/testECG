import React from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { View} from 'react-native';
import InputMask from 'react-input-mask';
import { ImagePropTypes } from 'react-native';

const FormInput3 = (props) => {
  return (

    <>
      <View style={tailwind('w-1/2 items-center')}>
      <div class="shadow-md ...">
              <InputMask class="form-control" style={tailwind('border  border-blue-800 my-3  rounded-md w-64')} 
              placeholder={props.placeholder} 
              maskChar="" mask={props.mask} 
              min={props.min}
              max={props.max}
              onChange={(text) => props.onChange(text.target.value)} ></InputMask>
              </div>
      </View>


    </>
  );
};

export default FormInput3;
