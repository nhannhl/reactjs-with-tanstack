import { useForm } from "@tanstack/react-form"
import { Button } from "@/components/ui/button"
import { useAddUser } from '@/services/mutations';
import { useNavigate } from '@tanstack/react-router';
import EmailValidation from '@/components/validation/EmailValidation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function Register() {
  const addUser = useAddUser();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: ''
    },
    onSubmit: async function ({value}) {
      addUser.mutate(value);
    },
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create your account</CardDescription>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <EmailValidation form={form} name="email" label="Email" emailExist={true} />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" onClick={form.reset}>Cancel</Button>
            <></>
            <Button className="ml-2" disabled={addUser.isPending} 
              onClick={addUser.data && addUser.isSuccess ? () => navigate({ to: '/login' }) : form.handleSubmit}>
              {addUser.data && addUser.isSuccess ? 'Go to login' : 'Register'}
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  )
}

export default Register;