import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
    disabled: number
    value: number
}

const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button className={props.disabled === props.value ? 'button disabled' : 'button'}
                onClick={onClickHandler}
                disabled={props.disabled === props.value}>
            {props.name}
        </button>
    );
};

export default Button;