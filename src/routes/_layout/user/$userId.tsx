import { createFileRoute } from '@tanstack/react-router'
import UserInfo from '@/pages/user';

export const Route = createFileRoute('/_layout/user/$userId')({
  component: () => <UserInfo userId={Route.useParams().userId} />
})

// function UserInfo() {
//   const userId = Route.useParams().userId;
//   return (
//     <div>User Info {userId}</div>
//   )
// }
