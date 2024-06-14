import { z } from 'zod';
import { zodValidator } from '@tanstack/zod-form-adapter';
import InputProvider from '@/components/common/InputProvider';
import { useCheckEmailExist } from '@/services/queries';
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from '@/constant';
import { UserApi } from '@/api';

function EmailValidation({ form, name, label, emailExist }: 
  { form: any, name: string, label?: string, emailExist?: boolean | false }) {

  const getValidator = (emailExist?: boolean | false) => {
    let validator: { [key:string]: any } = {};
    validator.onChange = z.string().email({ message: "Invalid email address" });

    if(emailExist) {
      validator.onChangeAsyncDebounceMs = 500;
      validator.onChangeAsync = z.string().refine(
        async (value) => {
          const result = await UserApi.checkUserByEmail(value);
          if(result && result.length > 0) return false;
          return true;
        },
        { message: "Email already exists" }
      )
    }

    return validator;
  };

  return (
    <form.Field
      name={name}
      validatorAdapter={zodValidator}
      validators={getValidator(emailExist)}
      children={(field: any) => (
        <InputProvider field={field} type="email" placeholder="Email" label={label} />
      )}
    />
  )
}

export default EmailValidation