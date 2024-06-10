import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <img src="https://i.ibb.co/HPqFBvW/flag-palestine-wallpaper-preview.jpg" alt="flag-palestine-wallpaper-preview" border="0"  className="w-full max-h-[700px]"/>      
      </div>

      <div className="text-center flex flex-col pt-10 pb-20 font-bold items-center">
          <p className="text-lg">Paleswear in all countries</p>
          <div className="text-7xl ff flex flex-col mt-10 mb-6 text-red-600"><h1>FROM THE RIVER</h1><h1>TO THE SEA</h1></div>
          <p>This is not a real eCommerce website, its only a project for the odin project, but I 
            thought I could at least do something for palestine with my skills
          </p>
          <Link className="bg-green-600 text-white rounded-full px-6 py-4 max-w-max mt-8" to="shop">Shop Now</Link>
      </div>

      <div className="flex flex-col">
        <h1 className="mb-10 px-14 text-3xl ff">Available Shops</h1>
        <div className="flex gap-[2px]">
          <Link className="w-[50%] relative h-[900px] pl-8" to="palestineshop">
            <img src="https://i.ibb.co/QXvM5vY/9f815cb89be7af68753dfd8a47e0adf4.jpg" alt="9f815cb89be7af68753dfd8a47e0adf4" border="0" className="w-full border-black border hover:blur-sm transition-all max-h-full"/>
            <div className="flex flex-col absolute bottom-20 left-14 ">
                <p className="text-2xl font-bold ff ml-10">Palestine Shop</p>
                <button className="bg-black text-white ml-10 rounded-full px-6 py-4 max-w-max mt-4">Shop Now</button>
            </div>
          </Link>

          <Link className="w-[50%] relative h-[900px] pr-8" to="shop">
            <img src="https://i.ibb.co/vcgYgx0/SD-03-T11-2081-E0-X-EC-0.webp" alt="SD-03-T11-2081-E0-X-EC-0" border="0" className="w-full border-black border hover:blur-sm transition-all max-h-full"/>
            <div className="flex flex-col absolute bottom-20 left-14 ">
                <p className="text-2xl font-bold ff">Our Shop</p>
                <button className="bg-black text-white rounded-full px-6 py-4 max-w-max mt-4">Shop Now</button>
            </div>
          </Link>
      </div>
      </div>
    </div>
  )
}

export default Hero;