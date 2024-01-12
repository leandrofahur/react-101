// MUI:
import { Autocomplete, Box, Button, TextField, Stack } from "@mui/material";

// third party:
import { Controller, useForm } from "react-hook-form";

// constants:
import { COUNTRIES } from "../../constants/countries";

// styles:
import styles from "./ShippingForm.module.scss";

export const ShippingForm = () => {
  const { register, control, handleSubmit } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.shippingForm} onSubmit={handleSubmit(onSubmitForm)}>
      <Stack className={styles.stackContainer}>
        <Box className={styles.twoColumn}>
          <TextField
            label="First name"
            variant="outlined"
            {...register("first_name")}
          />
          <TextField
            label="Last name"
            variant="outlined"
            {...register("last_name")}
          />
        </Box>
        <TextField
          label="Address"
          variant="outlined"
          {...register("address")}
        />
        <TextField label="Unit" variant="outlined" {...register("unit")} />
        <Box className={styles.threeColumn}>
          <TextField label="City" variant="outlined" {...register("city")} />
          <TextField label="State" variant="outlined" {...register("state")} />
          <TextField
            label="Zip code"
            variant="outlined"
            {...register("zip_code")}
          />
        </Box>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={COUNTRIES}
              getOptionLabel={(option) => option.name}
              onChange={(event, item) => {
                field.onChange(item);
              }}
              disablePortal
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select the country"
                  variant="outlined"
                />
              )}
            />
          )}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};
