import React, {FC, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form'
import './form.css'
import CustomSelect from "./CustomSelect";


export interface ISimpleForm {
    name: string
    lastName: string
    email: string
    number: string
    password: string
    repeatPassword: string
    select: string
    check: boolean

}


const CustomForm: FC = () => {

    const {
        register, formState: {errors}, handleSubmit, getValues, watch, control
    } = useForm<ISimpleForm>()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    useEffect(() => {
        watch()
    }, [])

    return (
        <div className="background-form">
            <Container className="px-4 py-4">
                <Form onSubmit={handleSubmit(onSubmit)}>


                    <Form.Group className="md-3" controlId="formBasicName">
                        <Form.Control className="form-control"
                                      type="name"
                                      placeholder="First name"
                                      {...register('name', {
                                          required: 'Name is required',
                                          validate: (value) => value === getValues('name') || 'Type in the name',
                                          pattern: {
                                              value: /^[a-zA-Z-`']+$/g,
                                              message: 'Name should contain only letters, dash and apostrophe'
                                          }
                                      })}
                        />
                        {
                            errors.name?.message && <Form.Text
                            className='text-danger'>{errors.name?.message}</Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="md-3 form-group" controlId="formBasicLastName">
                        <Form.Control
                            type="lastName"
                            placeholder="Last Name"
                            {...register('lastName', {
                                required: 'Last name is required',
                                validate: (value) => value === getValues('lastName') || 'Type in the last name',
                                pattern: {
                                    value: /^[a-zA-Z-`']+$/g,
                                    message: 'Last name should contain only letters, dash and apostrophe'
                                }
                            })}
                        />
                        {
                            errors.lastName?.message && <Form.Text
                            className='text-danger'>{errors.lastName?.message}</Form.Text>
                        }
                    </Form.Group>


                    <Form.Group className="md-3 form-group" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Enter email..."
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email required'
                                }
                            })}
                        />
                        <Form.Text className={`${errors?.email?.message ? 'text-danger' : 'text-muted'}`}>
                            {errors?.email?.message || "We'll never share your email with anyone else."}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="md-3 form-group" controlId="formBasicNumber">
                        <Form.Control
                            type="text"
                            placeholder="+380..."
                            {...register('number', {
                                required: 'Number is required',
                                pattern: {
                                    value: /^(\+380)\d{9}/,
                                    message: 'Valid phone number required'
                                }
                                // validate: (value) => value === getValues('number') || 'Type in the number'
                            })}
                        />
                        {
                            errors.number?.message && <Form.Text
                            className='text-danger'>{errors.number?.message}</Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="md-3 form-group" controlId="formBasicPassword">
                        <Form.Control
                            type="password"

                            placeholder="Password..."
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /(?=.*[a-z])(?=.*[A-Z])/,
                                    message: 'Password must contain one uppercase and lowercase letter',
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Password must have at least 8 characters'
                                }
                            })}
                        />
                        {
                            errors.password?.message && <Form.Text
                            className='text-danger'>{errors?.password?.message}</Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="md-3 form-group" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Repeat password..."
                            {...register('repeatPassword', {
                                required: 'Repeat password is required',
                                validate: (value) => value === getValues('password') || 'The password do not match'
                            })}
                        />
                        {
                            errors.repeatPassword?.message && <Form.Text
                            className='text-danger'>{errors.repeatPassword?.message}</Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="md-3 select-form form-group" controlId="formBasicCheckbox">
                        <CustomSelect control={control} name={'select'}/>
                    </Form.Group>

                    <Form.Group className="md-3 form-group" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" {...register('check')}/>
                    </Form.Group>
                    <Button className="form-button" variant="primary" type="submit" disabled={!getValues('check')}>
                        Sign Up
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default CustomForm;

