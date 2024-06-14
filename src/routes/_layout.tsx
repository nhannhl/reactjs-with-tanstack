import Header from '@/components/common/Header'
import { Outlet, createFileRoute, useNavigate, redirect } from '@tanstack/react-router'
import { useConfigStore } from '@/stores';
import { useEffect } from 'react';

export const Route = createFileRoute('/_layout')({
  // beforeLoad: ({ context }) => {
  //   if(!context.config.auth.id) {
  //     throw redirect({ 
  //       to: "/login"
  //     });
  //   }
  // },
  component: LayoutComponent
})

function LayoutComponent() {
  const config = useConfigStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(config.auth.id === 0) {
      navigate({ to: "/login" });
    }
  }, [])
  
  return (
    <div className='container'>
      <Header />
      <Outlet />
    </div>
  )
}