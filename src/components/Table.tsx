import React from 'react';

type TableType = {
    value: number
    maxValue: number
    minValue: number
}

const Table = (props: TableType) => {
    return (
        <div className={props.value === props.maxValue ? "table errorTable" : 'table'}>
            {props.value}
        </div>
    );
};

export default Table;