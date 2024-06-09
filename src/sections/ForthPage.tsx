function ForthPage() {
  return (
    <div className=" bg-lime-200 h-[75vh]  w-screen gap-5 flex flex-col  justify-center items-center">
      <div className="flex flex-col gap-10 ">
        <h1 className="text-5xl text-center font-bold font-gill-roy">JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</h1>
        <p className="text-2xl font-[500] text-center ">Enter your email and you will receive a conformation</p>
      </div>

      <form action="#" method="get">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email here"
          className="bg-white placeholder:text-gray-300 p-2 pl-4 rounded-l-xl focus:outline-none"
        />
        <input type="submit" value="Send" className="bg-base-200 rounded-r-xl p-2"/>
      </form>
    </div>
  );
}

export default ForthPage;
