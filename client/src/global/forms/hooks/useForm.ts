import Joi from "joi";
import { FormEvent, useCallback, useMemo, useState } from "react";
import {
  ChangeType,
  FormErrorType,
  UseFormReturnType,
} from "../types/useFormTypes";

const useForm = <T extends { [key: string]: any }>(
  initialState: T,
  schema: Joi.ObjectSchema<any>,
  onSubmit: (data: T) => void
): UseFormReturnType<T> => {
  const [data, setData] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrorType>({});

  const resetForm = useCallback(() => {
    setErrors({});
    setData(initialState);
  }, [initialState]);

  const handleBlur = useCallback(() => setErrors({}), [errors]);

  const extractSchema = useCallback((name: string) => {
    const [parent, child] = name.split(".");
    return child
      ? schema.extract(parent).extract(child)
      : schema.extract(parent);
  }, []);

  const extractName = (name: string) => name.split(".");

  const validateProperty = useCallback(
    (schema: Joi.Schema<any>, value: unknown) => {
      const { error } = schema.validate(value);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleError = useCallback(
    (name: string, errorMessage: string | null) => {
      setErrors((prev) => {
        if (prev && errorMessage) return { ...prev, [name]: errorMessage };
        const newErrorObj = { ...prev };
        delete newErrorObj[name];
        return newErrorObj;
      });
    },
    []
  );

  const handleData = useCallback(
    (name: string, value: any) => {
      const [parentName, childName] = extractName(name);
      setData((prev) => {
        if (!childName) return { ...prev, [parentName]: value };
        return {
          ...prev,
          [parentName]: { ...prev[parentName], [childName]: value },
        };
      });
    },
    [data]
  );

  const handleChange = useCallback(({ target }: ChangeType) => {
    const { name, value } = target;
    const newSchema = extractSchema(name);
    const error = validateProperty(newSchema, value);

    handleError(name, error);
    handleData(name, value);
  }, []);

  const validateForm = useCallback(() => {
    const { error } = schema.validate(data);
    return error ? false : true;
  }, [errors]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(data);
    },
    [data]
  );

  const value = useMemo(() => ({ data, errors }), [data, errors]);

  return {
    ...value,
    validateForm,
    setData,
    handleBlur,
    resetForm,
    handleChange,
    handleSubmit,
  };
};
export default useForm;
