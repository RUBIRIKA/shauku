

function Homecards() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950">
         <div className="grid  grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer ">
               <div className="h-96 w-72">
                  <img className="h-full w-full object-cover " src="/images/shauku1.jpg"/>
               </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black">

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%]
            group-hover:translate-y-0 transition-all">
               <h1 className="text-3xl font-bold text-white">Shauku</h1>
               <p className="text-lg text-white mb-3  ">music in rwanda is growing fastvjavdhvkavsvfvaksvfkasvjfvkavsfjjkasfksavfkvaskjfvklafdsa;g;svg;v</p>
            </div>

            </div>

            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-black/30 transition-shadow">
               <div className="h-96 w-72">
                  <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src="/images/shauku1.jpg"/>
               </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%]
            group-hover:translate-y-0 transition-all">
               <h1 className="text-3xl font-bold text-white">Shauku</h1>
               <p className="text-lg text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">music in rwanda is growing fastvjavdhvkavsvfvaksvfkasvjfvkavsfjjkasfksavfkvaskjfvklafdsa;g;svg;v</p>
            </div>

            </div>
         </div>
    </div>
  )
}

export default Homecards