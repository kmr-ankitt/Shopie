import Card from "../components/Card"


function ThirdPage() {
  return (
    <div className="h-screen w-screen bg-[#2200A8] flex gap-16 flex-col justify-center text-[#FFDCC6]  " id="thirdPage">
      <h2 className="text-5xl font-heavitas ml-20 w-fit border-b-[7px] border-[#000]">Young's Favourite</h2>
        <div className="flex gap-10 justify-start ml-20 items-center text-[#2200A8] ">
            <Card image="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" item="Clothing"/>
            <Card image="https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" item="All Under $20"/>
            <Card image="https://images.unsplash.com/photo-1586104237516-5b7075e00d45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Accessories"/>
        </div>
    </div>
  )
}

export default ThirdPage
