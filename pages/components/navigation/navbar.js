import Brand from "./brand";
import Links from "./links";

export default function Navbar() {
  return (
    <div className="relative flex flex-wrap items-center justify-between mx-auto px-8 shadow-lg z-10">
      <Brand />
      <Links />
    </div>
  );
}
