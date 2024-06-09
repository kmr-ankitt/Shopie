import Button from "./Button";

function Nav() {
  return <div className="  py-7 px-20 flex justify-start gap-96 w-screen ">
    <h1 className=" text-5xl text-indigo-600 font-heavitas">Shopie</h1>
    <div className="flex gap-20">
    <Button name="Home" link="#firstPage"/>
    <Button name="Catalouge" link="#secondPage"/>
    <Button name="Favourite" link="#thirdPage"/>
    <Button name="Contact" link="#forthPage"/>
    </div>
  </div>;
}

export default Nav;