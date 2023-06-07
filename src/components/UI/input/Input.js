import React from 'react'

export default function Input(props) {
    return (
        <div>
            <div
                className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
                    }`}
            >
                <label htmlFor={props.id}>{props.label}</label>
                <input
                    type={props.type}
                    id={props.id} value={enteredEmail}
                    onChange={props.ChangeHandler}
                    onBlur={props.blur}
                />
            </div>
        </div>
    )
}
