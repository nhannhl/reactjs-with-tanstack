import { createFileRoute } from '@tanstack/react-router'
import { useConfigStore } from '@/stores';

export const Route = createFileRoute('/_layout/')({
  component: Index
})

function Index() {
  const config = useConfigStore();

  return (
    <div>Welcome to TanStack, {config.auth.name}</div>
  )
}