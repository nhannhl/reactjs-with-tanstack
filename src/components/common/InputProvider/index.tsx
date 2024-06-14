import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FieldInfo from '@/components/common/FieldInfo';

function InputProvider({ field, type, placeholder, label }: 
  { field: {
    name: string,  
    value?: string | number,
    state?: any
    handleChange: (value: string) => void, 
    handleBlur?: () => void
  },
  label?: string,
  type?: string, 
  placeholder?: string }) {
  return (
    <>
      <Label htmlFor={field.name}>{label || field.name || ''}</Label>
      <Input type={type || 'text'} id={field.name} name={field.name} value={field?.state?.value || field?.value || ''} 
        onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} 
        placeholder={placeholder || ''} />
      <FieldInfo field={field} />
    </>
  )
}

export default InputProvider;