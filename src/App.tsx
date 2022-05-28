import React, {useEffect, useState} from 'react';
import './App.css';
import Table from "./components/Table";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {

    let [maxValue, setMaxValueEdit] = useState(5)
    const changeMaxValue = (newValue: number) => {
        setMaxValueEdit(newValue)
    }

    let [minValue, setMinValueEdit] = useState(0)
    const changeMinValue = (newValue: number) => {
        setMinValueEdit(newValue)
    }

    const saveLocalStorage = () => {
        localStorage.setItem('newMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('newMinValue', JSON.stringify(minValue))

    }
    useEffect(() => {
        setMinValueEdit(minValue)
    }, [minValue])
    useEffect(() => {
        setMaxValueEdit(maxValue)
    }, [maxValue])
    // получаем данные из localStorage
    // const getLocalStorage = () => {
    //   let newMaxValue = localStorage.getItem('newMaxValue')
    //     let newMinValue = localStorage.getItem('newMinValue')
    //     if (newMaxValue) {
    //         setMaxValueEdit(JSON.parse(newMaxValue))
    //     }
    //     if (newMinValue) {
    //         setMinValueEdit(JSON.parse(newMinValue))
    //         setValue(JSON.parse(newMinValue))
    //     }
    //     console.log(maxValue, minValue)
    //
    // }

    let [value, setValue] = useState(minValue);
    const incrementValue = () => {
        setValue(value + 1);
    }
    const resetValue = () => {
        setValue(minValue);
    }

    useEffect(() => {
        let newMaxValue = localStorage.getItem('newMaxValue')
        let newMinValue = localStorage.getItem('newMinValue')
        if (newMaxValue) {
            setMaxValueEdit(JSON.parse(newMaxValue))
        }
        if (newMinValue) {
            setMinValueEdit(JSON.parse(newMinValue))
            setValue(JSON.parse(newMinValue))
        }
    }, [])



    return (
        <div className="App">
            <div className={'wrapper'}>
                <Table value={value} maxValue={maxValue} minValue={minValue}/>
                <div className={'button-block'}>
                    <Button name={'INC'} callBack={incrementValue} disabled={maxValue} value={value}/>
                    <Button name={'RESET'} callBack={resetValue} disabled={minValue} value={value}/>
                </div>
            </div>
            <div className={'wrapper'}>
                <div className={'input-block'}>
                    <Input value={maxValue} name={'Max value:'} callBack={changeMaxValue}/>
                    <Input value={minValue} name={'Min value:'} callBack={changeMinValue}/>
                </div>
                <div className={'button-block'}>
                    <Button name={'SET LocalStorage'}
                            callBack={saveLocalStorage}
                            disabled={maxValue}
                            value={value}/>
                    {/*<Button name={'GET LocalStorage'}*/}
                    {/*        callBack={getLocalStorage}*/}
                    {/*        disabled={10000}*/}
                    {/*        value={value}/>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
