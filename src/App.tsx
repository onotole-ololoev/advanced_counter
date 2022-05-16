import React, {useState} from 'react';
import './App.css';
import Table from "./components/Table";
import Button from "./components/Button";

function App() {

    let maxValue = 5;
    let minValue = 0;
    let [value, setValue] = useState(minValue);

    const incrementValue = () => {
        setValue(value + 1);
    }

    const resetValue = () => {
        setValue(0);
    }



  return (
    <div className="App">
        <div className={'wrapper'}>
            <Table value={value} maxValue={maxValue} minValue={minValue}/>
            <div className={'button-block'}>
                <Button name={'INC'} callBack={incrementValue} disabled={maxValue} value={value}/>
                <Button name={'RESET'} callBack={resetValue} disabled={minValue} value={value}/>
            </div>
        </div>
        {/*<div className={'wrapper'}>*/}
        {/*    <Table />*/}
        {/*    <div className={'button-block'}>*/}
        {/*        <Button name={'SET'}/>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
