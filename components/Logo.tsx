import Image from "next/image";

function Logo() {
  return (
    <div className="flex justify-center items-center text-3xl">
      <Image
        placeholder="blur"
        blurDataURL={"/logo.png"}
        src={"/logo.png"}
        alt="Logo"
        width={100}
        height={100}
      />
    </div>
  );
}

export default Logo;
