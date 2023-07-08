import React, { useState } from "react";
import { UserPlusIcon } from "@heroicons/react/24/solid";

import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";

export default function Modal({ onSubmit, handleOpen, open, defaultValue }) {


    const [formState, setFormState] = useState(defaultValue ||
    {
       id: new Date().getTime().toString(),
        name: "", job: "", date: ""
    }
    );
    const [errors, setErrors] = useState('');
    const validateForm = () => {
        if (formState.name && formState.job && formState.date) {
            setErrors('');
            return true;
        } else {
            let errorFields = []
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(', '))
            return false;
        }
    }

    const addEmployee = (e) => {
        e.preventDefault();
        if (!validateForm()) return
        onSubmit(formState)
        handleOpen()
        console.log(formState);

    }

    return (
        <React.Fragment>
            <div className="flex justify-center py-4">
                <Button onClick={handleOpen} className="flex "> <UserPlusIcon className="h-4 w-4 mr-" /> Add Employee   </Button>
            </div>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-lg "
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography className='font-bold text-3xl heading' color="white" >
                            Add Employee
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Name" size="lg" value={formState.name} onChange={(e) => {
                            setFormState(formState => {
                                return { ...formState, name: e.target.value }
                            })
                        }} />
                        <Input label="Job" size="lg" value={formState.job} onChange={(e) => {
                            setFormState(formState => {
                                return { ...formState, job: e.target.value }
                            })
                        }} />
                        <Input label="Employed Date " size="lg" value={formState.date} onChange={(e) => {
                            setFormState(formState => {
                                return { ...formState, date: e.target.value }
                            })
                        }} />
                        {
                            errors && <div className="errorDiv ">
                                {`Please include: ${errors}`}
                            </div>
                        }
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={addEmployee} fullWidth>
                            Add
                        </Button>

                    </CardFooter>
                </Card>
            </Dialog>
        </React.Fragment>
    );
}