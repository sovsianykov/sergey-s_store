import React from 'react';
import { TextField, Grid } from "@material-ui/core";
import  { useFormContext, Controller } from "react-hook-form";

function FormInput( { name, label, required }) {
    const { control } = useFormContext()


    return (
        <Grid item={12} sm={6}>
            <Controller
                as={TextField}
                control={control}
                fullWidth
                name={name}
                label = {label}
                required={ required }
            />

        </Grid>
    );
}

export default FormInput;