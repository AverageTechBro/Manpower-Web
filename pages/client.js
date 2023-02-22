import Image from "next/image";
export default function Clients() {
  return (
    <div className="client-container">
      <h1>Our Clients</h1>
      <div className="client-image-container">
        <Image src={"/clientI.svg"} width={200} height={100} />
        <Image src={"/clientII.svg"} width={200} height={100} />
        <Image src={"/clientIII.svg"} width={200} height={100} />
        <Image src={"/clientIV.svg"} width={200} height={100} />
        <Image src={"/clientV.svg"} width={200} height={100} />
      </div>
      <Image
        className="client-arrow-left"
        src={"/arrow-left.svg"}
        width={50}
        height={50}
      />
      <Image
        className="client-arrow-right"
        src={"/arrow-right.svg"}
        width={50}
        height={50}
      />
    </div>
  );
}
