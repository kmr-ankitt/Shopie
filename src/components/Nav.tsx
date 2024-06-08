import Button from "./Button";

function Nav() {
  return <div className=" fixed my-8 px-20 flex justify-start gap-96  w-screen ">
    <h1 className=" text-5xl font-heavitas">Shopie</h1>
    <div className="flex gap-20">
    <Button name="Catalouge" link="#"/>
    <Button name="Fasion" link="#"/>
    <Button name="Favourite" link="#"/>
    <Button name="About" link="#"/>
    </div>
  </div>;
}

export default Nav;