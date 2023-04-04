import Brand from "./brand";
import Links from "./links";

export default function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-between mx-auto px-8 shadow-lg">
      <Brand />
      <Links />
    </div>
  );
}
