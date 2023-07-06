import React, { useState } from "react";
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

export default function Modal({onSubmit}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [formState, setFormState] = useState(
        {
            name: "", job: "", date: ""
        }
    );

    const addEmployee = (e) => {
        e.preventDefault();
        onSubmit(formState)
        handleOpen()
    }

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Add Employee</Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white" >
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
                        <Input label="Employed Date " size="lg" value={formState.employmentDate} onChange={(e) => {
                            setFormState(formState => {
                                return { ...formState, date: e.target.value }
                            })
                        }} />
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