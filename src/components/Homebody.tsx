
function Homebody() {
  return (

    <div className="max-w-[1200px] mx-auto ">
       


<div className="flex justify-center items-center mt-12 gap-6  bg-blue-lightest flex-col md:flex-row ">
        <div id="app" className="bg-[#070b25] w-128 h-60 rounded-lg shadow-md flex card text-grey-darkest">
            <img className="w-1/2 h-full rounded-lg" src="/images/shauku2.jpg" alt="Room Image" />
            <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <h3 className="font-light mb-1 text-grey-darkest">Shauku band</h3>
                    <div className="text-xs flex items-center mb-4">
                        <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                        Kigali, Rwanda
                    </div>
                    <span className="text-5xl text-grey-darkest"><span className="text-lg"></span></span>
                    <div className="flex items-center mt-4">
                        <div className="pr-2 text-xs">
                            <i className="fas fa-wifi text-green"></i> Watch the concert here
                        </div>
                        <div className="px-2 text-xs">
                            <i className="text-grey-darker far fa-building"></i> 
                        </div>
                    </div>
                </div>
                <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                <button className=" hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2 rounded-lg hover:bg-[#dfac13]">Watch</button>
                </div>
            </div>
        </div>

        <div id="app" className="bg-[#070b25] w-128 h-60 rounded-lg shadow-md flex card text-grey-darkest">
            <img className="w-1/2 h-full rounded-lg" src="/images/shauku2.jpg" alt="Room Image" />
            <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <h3 className="font-light mb-1 text-grey-darkest">Akagera National Park</h3>
                    <div className="text-xs flex items-center mb-4">
                        <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                        Eastern Pro, Rwanda
                    </div>
                    <span className="text-5xl text-grey-darkest"><span className="text-lg"></span></span>
                    <div className="flex items-center mt-4">
                        <div className="pr-2 text-xs">
                            <i className="fas fa-wifi text-green"></i> Watch Wild animals life
                        </div>
                        <div className="px-2 text-xs">
                            <i className="text-grey-darker far fa-building"></i> 
                        </div>
                    </div>
                </div>
                <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                <button className=" hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2 rounded-lg hover:bg-[#dfac13]">watch</button>
                </div>
            </div>
        </div>

    </div>






    <div className="container mt-12 mx-auto p-4 md:p-0">
  
 
  <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
    
   
    <div className="bg-cover bg-bottom rounded-lg border w-full md:w-1/3 h-64 md:h-auto relative" >
    <img src="/images/shauku1.jpg"  className="w-full h-full rounded-lg"/>
      <div className="absolute text-xl">
        <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
      </div>
    </div>
   
    
   
    <div className=" w-full md:w-2/3">
      
      <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
        
        <div className="rounded-lg bg-[#070a1d] lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
         
          <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3>Marriott</h3>
            <p className="mb-0 mt-3 text-grey-dark text-sm ">Kigali - Rwanda</p>
            <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" ></hr>
          </div>
         
          <div className="w-full lg:w-3/5 lg:px-3">
            <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
            Within walking distance of several embassies, Kigali Marriott Hotel offers luxurious accommodations in downtown Kigali. 
            </p>
          </div>
         
          <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
            <button className=" hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2 rounded-lg hover:bg-[#dfac13]">More info</button>
          </div>
       
        </div>
      
      </div>
     
    </div>
   
  </div>

</div>





    <div className=" flex flex-col  text-white mt-12">
        <main className="container mx-auto px-6  flex-1 text-center">

           
           <form action="" method="" target="_blank">
            <div className="opacity-75 mb-6">
            <h2 className="text-l md:text-xl lg:text-xl">Enter your email for membership renewal or creation</h2>  
            </div>
         <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="text-lg md:text-2xl placeholder:text-gray-400
              py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 
              focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none
              md:rounded-br-none mb-4 md:mb-0"/>

              <input
                 type="submit"
                 value="Subscribe"
                 name="member"
                 className="bg-[#dfac13] rounded-full md:rounded-tl-none
                 md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10
                 lg:py-6 lg:px-12 cursor-pointer hover:opacity-75 duration-150 "
              />

         </div>

    </form>
        
        </main>
  
        
    </div>



    </div>
  )
}

export default Homebody