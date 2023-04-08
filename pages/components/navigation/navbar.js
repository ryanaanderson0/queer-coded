import Brand from "./brand";
import Links from "./links";
import Login from "./login";

export default function Navbar() {
  return (
    <div className="relative flex flex-wrap items-center justify-between mx-auto px-8 shadow-lg z-10">
      <Brand />
      <Links />
      <Login />
    </div>
  );
}
