import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { UserApi } from '@/api';

export const Route = createFileRoute('/_layout/user')({
  loader: () => UserApi.getUsers(),
  component: User
})

function User() {
  const users = Route.useLoaderData();

  return (
    <div>
      <h1>List User</h1>
      <div className='p-4 flex'>
        <ul>
          {users.map(user => {
            return <li key={user.id}>
              <Link to='/user/$userId' params={{ userId: user.id.toString() }}>{user.name}</Link>
            </li>
          })}
        </ul>
        <Outlet />
      </div>
    </div>
  )
}