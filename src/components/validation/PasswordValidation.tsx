import { z } from 'zod';
import { zodValidator } from '@tanstack/zod-form-adapter';
import InputProvider from '@/components/common/InputProvider';

function EmailValidation({ form, name, label }: 
  { form: any, name: string, label?: string }) {
  return (
    <form.Field
      name={name}
      validatorAdapter={zodValidator}
      validators={{ 
        onChange: z.string().
          min(4, { message: "Password must be at least 4 characters" }).
          max(32, { message: "Password must be at most 32 characters" }),
      }}
      children={(field: any) => (
        <InputProvider field={field} type="password" placeholder="Password min:4 max:32 characters" label={label} />
      )}
    />
  )
}

export default EmailValidation