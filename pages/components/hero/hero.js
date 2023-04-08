import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-center items-center p-16">
        <h1 className="antialiased font-semibold text-7xl">
          Queer centric coding groups and resources
        </h1>
        <p className="text-slate-500 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="rounded-full bg-red-400 p-3 my-4" bg->
          Join The Community
        </button>
      </div>
      <div className="flex justify-center items-center p-16">
        <Image src="test.svg" width={500} height={500} />
      </div>
    </div>
  );
}
