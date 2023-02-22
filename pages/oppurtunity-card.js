import Image from "next/image";
export default function OppCard() {
  return (
    <div className="oppurtunity-card-container">
      <div className="card-text">
        <h1>DONT MISS THE OPPURTUNITY</h1>
        <p>
          Build your future with LOREM INT'L, one of the best manpower agency in
          Nepal.
        </p>
      </div>
      <button>
        Send Resume <Image src={"/buttonarrow.svg"} width={50} height={50} />{" "}
      </button>
    </div>
  );
}
