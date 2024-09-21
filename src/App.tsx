import React from 'react';
import './App.css';
import { MyButton } from './Components/MyButton/MyButton';
import { InputCheckBox } from './Components/InputCheckBox/InputCheckBox';
import { InputCustom } from './Components/InputCustom/InputCustom';

function App() {
  return (
    <div className="App">
      <MyButton type='primary' currentText='pohui' />
      <MyButton type='default' currentText='pohui' />

      <InputCheckBox isChecked={true} labelText='Я соглашаюсь' />
      <InputCheckBox isChecked={false} labelText='Я соглашаюсь' />

      <InputCustom labelText='tel' />
      <InputCustom labelText='text  ' />
    </div>
  );
}

export default App;


