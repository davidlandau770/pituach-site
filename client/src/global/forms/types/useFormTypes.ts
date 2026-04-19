import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
} from "react";

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type ChangeType =
  | ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  | TargetType;

export type TargetType = {
  target: {
    name: string;
    value: any;
  };
};

export type UseFormReturnType<T> = {
  validateForm: () => boolean;
  data: T;
  setData: SetStateType<T>;
  errors: FormErrorType;
  handleBlur: () => void;
  resetForm: () => void;
  handleChange: (e: ChangeType) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export type FormErrorType = {
  [key: string]: string;
};

export interface OptionValueInterface {
  label: string | ReactNode;
  value: string | number;
}
