import Image from "next/legacy/image"


function Products() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-12 gap-6 px-8 max-w-[1400px] mx-auto">
     
      <div className="product group">
         <Image src="/images/tele.png" layout="fill" objectFit="cover" />
         <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
            <source  src="/videos/pub.mp4" type="video/mp4"/>
         </video>
      </div>

      <div className="product group">
         <Image src="/images/tele.png" layout="fill" objectFit="cover" />
         <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
            <source  src="/videos/pub.mp4" type="video/mp4"/>
         </video>
      </div>

      <div className="product group">
         <Image src="/images/tele.png" layout="fill" objectFit="cover" />
         <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
            <source  src="/videos/pub.mp4" type="video/mp4"/>
         </video>
      </div>

      <div className="product group">
         <Image src="/images/tele.png" layout="fill" objectFit="cover" />
         <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
            <source  src="/videos/pub.mp4" type="video/mp4"/>
         </video>
      </div>

      <div className="product group">
         <Image src="/images/tele.png" layout="fill" objectFit="cover" />
         <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
            <source  src="/videos/pub.mp4" type="video/mp4"/>
         </video>
      </div>

      <div className="product group">
         <Image src="/images/tele.png" layout="fill" objectFit="cover" />
         <video autoPlay loop playsInline className="hidden group-hover:inline rounded-lg object-cover">
            <source  src="/videos/pub.mp4" type="video/mp4"/>
         </video>
      </div>

    </section>
    
  )
}

export default Products