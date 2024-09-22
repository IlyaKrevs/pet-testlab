import React from 'react';
import './App.scss';
import { MyButton } from './Components/MyButton/MyButton';
import { InputCheckBox } from './Components/InputCheckBox/InputCheckBox';
import { InputCustom } from './Components/InputCustom/InputCustom';
import { Block1 } from './Containers/Block1/Block1';
import { Block2 } from './Containers/Block2/Block2';
import { BlockBlank } from './Components/BlockBlank/BlockBlank';
import { Block3 } from './Containers/Block3/Block3';
import { Block4 } from './Containers/Block4/Block4';
import { Block5 } from './Containers/Block5/Block5';
import { Block6 } from './Containers/Block6/Block6';

function App() {
  return (
    <div className="App">

      <Block1 />

      <Block2 />

      <Block3 />

      <Block4 />

      <Block5 />

      <Block6/>
    </div>
  );
}

export default App;


