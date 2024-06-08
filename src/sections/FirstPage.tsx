import Button from "../components/Button";
import Nav from "../components/Nav";

function FirstPage() {
  return (
    <div className="h-screen w-screen bg-red-500 text-black flex flex-col items-center ">
      <Nav />
      <div className="flex flex-col px-20 justify-center items- h-screen w-screen ">
        <h1 className="my-10 text-7xl font-heavitas">
          Let's <br /> uncover <br /> your <br /> <span className=" p-2  bg-yellow-300 text-white">Ideal</span> <br /> Items
        </h1>
        <p>
          List is full of possiblities, as is you wishlist with unique items!
        </p> <br />
        <Button name="Buy Now" link="#" />
      </div>
    </div>
  );
}

export default FirstPage;
