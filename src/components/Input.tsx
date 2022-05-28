import React, {ChangeEvent, useState} from 'react';

type InputType = {
    value: number
    name: string
    callBack: (newValue: number) => void
}

const Input = (props: InputType) => {
    // let [prevValue, setPrevValue] = useState(props.value)
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value;
        // setPrevValue(JSON.parse(newValue));
        props.callBack(JSON.parse(newValue));


    }
    return (
        <div className={'inputBlock'}>
            <span>{props.name}</span>
            <input className={'input'} type='number' value={props.value} onChange={onChangeHandle}/>
        </div>
    );
};

export default Input;