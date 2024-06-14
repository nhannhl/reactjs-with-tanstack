import { useState, useEffect } from 'react'
import { useLogin } from '@/services/queries'
import { useForm } from "@tanstack/react-form"
import { Button } from "@/components/ui/button"
import EmailValidation from '@/components/validation/EmailValidation'
import PasswordValidation from '@/components/validation/PasswordValidation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useConfigStore } from '@/stores'
import { useNavigate } from "@tanstack/react-router"

function Login() {
  const [loginValue, setLoginValue] = useState({email: '', username: ''});
  const login = useLogin(loginValue, {enabled: !!loginValue.email && !!loginValue.username});
  const { setAuth } = useConfigStore();
  const navigate = useNavigate({ from: '/login' });

  const form = useForm({
    defaultValues: {
      email: '',
      username: ''
    },
    onSubmit: async function ({value}) {
      setLoginValue(value);
    },
  });

  useEffect(() => {
    if(login.data && login.data.length > 0) {
      setAuth({
        id: login.data[0].id,
        name: login.data[0].name,
        username: login.data[0].username,
        email: login.data[0].email
      });
      navigate({ to: '/' });
      form.reset();
    }
  }, [login.data]);


  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            <p>Email and Username of jsonplaceholder.typicode.com/users</p>
            {login.data && login.data.length == 0 && <p className="text-red-500">Login Failed</p>}
          </CardDescription>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <EmailValidation form={form} name="email" label="Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <PasswordValidation form={form} name="username" label="Password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="link" onClick={() => navigate({ to: '/register' })}>Register</Button>
            <Button variant="outline" onClick={form.reset}>Cancel</Button>
            <Button className="ml-2" disabled={login.isLoading} onClick={form.handleSubmit}>Go!</Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  )
}

export default Login;