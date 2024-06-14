import { createFileRoute } from '@tanstack/react-router'
import { fetchUserByIdOptions } from '@/services/queries'
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/user/$userId/detail')({
  loader: ({ context: { queryClient }, params: { userId } }) => queryClient.ensureQueryData(fetchUserByIdOptions(Number(userId))),
  component: MoreDetail
})

function MoreDetail() {
  const data = Route.useLoaderData();
  return (
    <div>
      <h1>More Detail</h1>
      <div className='p-4'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <Link to='/user'>Back</Link>
    </div>
  )
}