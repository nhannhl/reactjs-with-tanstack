import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/user/')({
  component: () => <div>Select User!</div>
})