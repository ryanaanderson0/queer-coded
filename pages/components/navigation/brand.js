import Image from "next/image";

export default function Brand() {
  return (
    <div>
      <Image
        src="/queer.svg"
        alt="Queer Coded logo"
        width={125}
        height={50}
      ></Image>
    </div>
  );
}
