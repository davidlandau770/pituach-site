import { FC, HTMLInputTypeAttribute } from "react";
import {
  ChangeType,
  FormErrorType,
  OptionValueInterface,
} from "../../types/useFormTypes";
import {
  Breakpoint,
  Grid,
  InputLabelProps,
  MenuItem,
  SxProps,
  TextField,
  TextFieldProps,
  TextFieldVariants,
  Theme,
} from "@mui/material";

type FormInputProps = {
  name?: string;
  errors: FormErrorType;
  options?: OptionValueInterface[];
  label?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  sx?: SxProps<Theme>;
  variant?: TextFieldVariants;
  value: unknown;
  textFieldProps?: TextFieldProps;
  onChange: (e: ChangeType) => void;
  breakPoint?: { [key in Breakpoint]?: number };
  multiline?: boolean;
  inputLabelProps?: InputLabelProps;
  size?: "small" | "medium";
};

const FormInput: FC<FormInputProps> = ({
  label = "",
  name = "",
  options,
  errors,
  onChange,
  value,
  sx,
  breakPoint = { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  disabled = false,
  required = true,
  type = "text",
  variant = "outlined",
  rows = 1,
  textFieldProps,
  multiline = false,
  inputLabelProps = {
    sx: {
      "&.MuiInputLabel-root.MuiInputLabel-shrink": {
        textAlign: "left",
      },
    },
  },
  size = "small",
}) => {
  if (type === "select")
    return (
      <Grid item {...breakPoint}>
        <TextField
          sx={sx}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  direction: "rtl",
                },
              },
            },
          }}
          margin="dense"
          variant={variant}
          label={label}
          value={value}
          name={name}
          required={required}
          disabled={disabled}
          onChange={(e) => onChange(e as ChangeType)}
          error={!!errors[name]}
          helperText={typeof errors[name] === "string" ? errors[name] : ""}
          size={size}
          select
          fullWidth
          {...textFieldProps}
        >
          {options?.map((option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    );

  return (
    <Grid item {...breakPoint}>
      <TextField
        sx={{ my: 1, ...sx }}
        margin="dense"
        variant={variant}
        label={label}
        value={value}
        name={name}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange(e as ChangeType)}
        error={!!errors[name]}
        helperText={typeof errors[name] === "string" ? errors[name] : ""}
        size={size}
        fullWidth
        type={type}
        rows={rows}
        multiline={multiline}
        {...textFieldProps}
        InputLabelProps={inputLabelProps}
      />
    </Grid>
  );
};

export default FormInput;
