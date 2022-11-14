import React, { FC } from 'react';
import Select from 'react-select';
import {Control, Controller} from "react-hook-form";
import {ISimpleForm} from "./Form";
import Form from "react-bootstrap/Form";


interface ICustomSelectProps {
    name: keyof ISimpleForm
    control: Control<ISimpleForm>
}

interface IOption {
    value: string
    label: string
}

const CustomSelect: FC<ICustomSelectProps> = ({control, name}) => {

    const options: IOption[] = [
        { value: 'Черновцы', label: 'Черновцы' },
        { value: 'Днепр', label: 'Днепр' },
        { value: 'Ивано-Франковск', label: 'Ивано-Франковск' },
        { value: 'Харьков', label: 'Харьков' },
        { value: 'Киев', label: 'Киев' },
        { value: 'Кривой Рог', label: 'Кривой Рог' },
        { value: 'Львов', label: 'Львов' },
        { value: 'Одесса', label: 'Одесса' },
    ]


    return (
        <Controller control={control}
                    name={name}
                    rules={
                        {
                            required: 'Select is not required'
                        }
                    }
                    render={
            ({field: {value,onChange}, fieldState: {error}}) => (
                <>
                    <Select
                        options={options}
                        placeholder={'Select a city...'}
                        value={options.find(el => el. value === value)}
                        onChange={(newValue) => onChange(newValue?.value)}
                    />
                    {
                        error?.message && <Form.Text
                        className='text-danger'>{error?.message}</Form.Text>
                    }
                </>
            )
        }/>

    )
}

export default CustomSelect;