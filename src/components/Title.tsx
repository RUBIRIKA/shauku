import Homebody from "./Homebody"
import Products from "./Products"

function Title() {
  return (
    <div className=" flex flex-col  text-white">
        <main className="container mx-auto px-6 pt-16 flex-1 text-center">
           <h1 className="text-xl md:text-2x lg:text-4xl font-extrabold mb-8">Good places to visit, Hotels, Entertainment and many more.</h1>
           <h2 className="text-l md:text-xl lg:text-2xl mb-8">Do your subscription $10/month</h2>
           
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
    <Products />
    <Homebody />
    
        
        </main>
  
        
    </div>
  )
}

export default Title