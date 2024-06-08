const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <img src="https://i.ibb.co/HPqFBvW/flag-palestine-wallpaper-preview.jpg" alt="flag-palestine-wallpaper-preview" border="0"  className="w-full max-h-[700px]"/>      
      </div>

      <div className="text-center flex flex-col py-10 font-bold items-center">
          <p className="text-lg">Paleswear in all countries</p>
          <div className="text-7xl ff flex flex-col mt-10 mb-6 text-red-600"><h1>LET'S FREE</h1><h1>PALESTINE TOGETHER</h1></div>
          <p>This is not a real eCommerce website, its only a project for the odin project, but I 
            thought I could at least do something for palestine with my skills
          </p>
          <button className="bg-green-600 text-white rounded-full px-6 py-4 max-w-max mt-8">Shop Now</button>
      </div>
    </div>
  )
}

export default Hero;