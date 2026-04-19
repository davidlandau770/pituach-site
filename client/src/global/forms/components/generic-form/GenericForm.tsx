import { Grid, SxProps, Theme } from "@mui/material";
import { CSSProperties, FC, FormEvent, ReactNode } from "react";
import PageTitle from "../../../components/page-title/PageTitle";
import SubmitButton from "../submit-button/SubmitButton";

type GenericFormProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  formStyle?: CSSProperties;
  title?: string;
  subTitle?: string;
  titleStyle?: CSSProperties;
  validateForm: () => boolean;
  submitButtonText?: string;
  navIcon?: ReactNode;
  buttonStyle?: SxProps<Theme>;
};
const GenericForm: FC<GenericFormProps> = ({
  handleSubmit,
  children,
  formStyle,
  title,
  subTitle,
  titleStyle,
  validateForm,
  submitButtonText = "שלח",
  navIcon,
  buttonStyle,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "0 24px 24px 24px", ...formStyle, borderRadius: "5px" }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {navIcon && <Grid item>{navIcon}</Grid>}

        {title && (
          <Grid item>
            <PageTitle
              title={title}
              subtitle={subTitle}
              fontSize={"1.5rem"}
              sx={{ ...titleStyle, paddingBottom: "12px" }}
            />
          </Grid>
        )}

        <Grid item>{children}</Grid>

        {validateForm() && (
          <Grid item textAlign={"right"} pt={1}>
            <SubmitButton text={submitButtonText} sx={buttonStyle} />
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default GenericForm;
