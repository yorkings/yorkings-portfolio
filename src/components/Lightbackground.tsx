

const Lightbackground = () => {
  return (
    <div className="absolute top-0 inset-0 -z-10 not-even:overflow-hidden dark:hidden">
       <video autoPlay        loop        muted        playsInline
        className="w-full h-full object-cover opacity-40">
         <source  src="light1.mp4" type="video/mp4"/>
       </video>
    </div>
  )
}

export default Lightbackground
