import { useFetchUserById } from "@/services/queries";
import { Link } from "@tanstack/react-router";

function UserInfo({ userId }: {userId: string}) {
  const { data, isLoading } = useFetchUserById(Number(userId));

  return (
    <div>
      <h2>UserInfo {isLoading ? 'loading...' : ''}</h2>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.username}</p>
      <p>{data?.email}</p>
      <Link to='/user/$userId/detail' params={{ userId: userId }} >more ...</Link>
    </div>
  )
}

export default UserInfo;