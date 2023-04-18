import Footer from "@/components/Footer"
import Link from "next/link"


function login() {
  return (
    <div className="fixed h-full w-full bg-[url('/images/shauku1.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
       <div className="bg-black  w-full h-full lg:bg-opacity-50">
         <nav className="px-12 py-5">
          <Link href="/">
         <img src="/images/logo.png" width={100} height={100} className="cursor-pointer object-contain"/>
         </Link>
         </nav>
         <div className="flex mt-10 justify-center">
          <div className="bg-black bg-opacity-70 px-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
           <h2 className="text-white text-4xl mb-8  mt-6 text-center font-semibold">
            Sign-In
           </h2>
           <div className="flex flex-col gap-4">

 <form className='space-y-6' action="#">

<div>
   <label 
    htmlFor="phone"
     className='block mb-2 text-sm font-medium text-gray-100'>
       Phone number or Email
     </label>
    <input
       type="phone"
       name="phone"
       id="phone"
       className='bg-gray-50 border border-gray-300
                  text-gray-900 text-sm rounded-lg focus:ring-[#18b6b3]
                  focus:border-[#18b6b3] block w-full p-2.5'
       placeholder='Email or Phone'
       required

    /> 
<label 
    htmlFor="phone"
     className='block mt-6 mb-2 text-sm font-medium text-gray-100'>
     Password
     </label>
<input
       type="password"
       name="password"
       id="pass"
       className='bg-gray-50 border border-gray-300
                  text-gray-900 text-sm rounded-lg focus:ring-[#18b6b3]
                  focus:border-[#18b6b3] block w-full p-2.5 '
       placeholder='password'
       required

    /> 

</div>

<div className='flex justify-between'>
   <div className='flex items-start'>
       <div className='flex items-center h-5'>
           <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4bg-gray-50 rounded border
              text-white border-gray-300 focus:ring-3 accent-[#28aca9] dark:focus:ring-[#30c7c4] focus:ring-[#1dddda] cursor-pointer"
              
             
              
              required           
           />


       </div>
       <label
         htmlFor="remember"
         className='ml-2 text-sm font-medium text-gray-100'
       >
         Remember me    

       </label>

   </div>

</div>
 <button
   type='submit'
   className='w-full text-white bg-[#17c5c2] hover:bg-[#18b6b3]
             focus:ring-4 focus:outline-none focus:ring-blue-300
             font-medium rounded-lg text-sm px-5 py-2.5 text-center'
 >
    Sign-In
 </button>
 <div className='text-sm font-medium text-gray-500'>
   Not registered?{""}
   <Link href='/registerhome' className='text-[#27a8a6] hover:underline'>
   Register here
   </Link>
 </div>
</form>
<div className="mt-11"></div>
           </div>
          </div>
         </div>
       </div>
       
    </div>
  )
}

export default login