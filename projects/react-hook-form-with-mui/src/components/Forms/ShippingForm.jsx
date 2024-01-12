// MUI:
import { Autocomplete, Box, Button, TextField, Stack } from "@mui/material";

// third party:
import { Controller, useForm } from "react-hook-form";

// constants:
import { COUNTRIES } from "../../constants/countries";

// styles:
import styles from "./ShippingForm.module.scss";

export const ShippingForm = () => {
  const defaultValues = {
    first_name: "",
    last_name: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zip_code: "",
    country: null,
  };

  const { register, control, reset, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmitForm = (data) => {
    console.log(data);
  };

  const handleOnCancelSubmission = () => {
    reset({ ...defaultValues, country: null });
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
        <Box className={styles.boxContainer}>
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
          <Button
            variant="outlined"
            type="button"
            fullWidth
            onClick={handleOnCancelSubmission}
          >
            Cancel
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
