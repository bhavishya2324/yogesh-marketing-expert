import AnimationLottie from "../components/helper/animation-lottie";
import lottieFile from '/public/lottie/contactlottie.json';

const { default: ContactSection } = require("../components/homepage/contact");


async function page() {


return(

    
   <>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4 mt-16">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>
          <div className="flex">
            <ContactSection />
            </div>
            </div>

            </>
  

    
)

}

export default page;
