import { useConfigStore } from "@/stores";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

function Header() {
  const config = useConfigStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    config.reset();
    navigate({ to: "/login" });
  }

  return (
    <div>
      <div className="font-bold text-red-500 text-3xl">Layout Component</div>
      <div className="flex gap-2">
        <Link to="/" activeProps={{ className: "font-bold" }}>Home</Link>
        <Link to="/about" activeProps={{ className: "font-bold" }}>About</Link>
        <Link to="/user" activeProps={{ className: "font-bold" }}>Users</Link>
        <Button variant="link" onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  )
}

export default Header;