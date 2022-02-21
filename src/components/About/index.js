import profilePicCircle from '../../assets/images/profile-pic-circle.png'
import code from '../../assets/images/code.png';
import film from '../../assets/images/film-slate.png';
import design from '../../assets/images/design.png';

function About() {
return (
  <div className='bg-slate-800'>
    <div className='lg:[top-gap]'>

    </div>
    <div className="bg-slate-800 grid grid-rows-1 gap-3 items-center flex justify-center">
      <h1 className="items-center font-semibold text-white lg:text-5xl md:text-4xl sm:text-4xl text-3xl mt-8 mb-2 mx-3">
        Full-Stack <br className='sm:hidden md:hidden lg:hidden xl:hidden'/> Web Developer, <br className='sm:hidden md:hidden lg:hidden xl:hidden'/>Designer & <br className='md:hidden lg:hidden xl:hidden'/>Filmmaker 
      </h1>
      
      <h2 className="items-center text-white text-xl mx-3">
        I like to code websites, <br className='sm:hidden md:hidden lg:hidden xl:hidden'/>film nature/short stories, & <br className='sm:hidden md:hidden lg:hidden xl:hidden'/> sometimes count the stars.
      </h2>
      <div className="grid place-content-center">
        <img className="flex items-center justify-center mt-8 -mb-10 mx-2 place-content-center" src={profilePicCircle} alt="profile-pic" width="250"/>
      </div>
    </div>
      


    <section class="pt-[90px] sm:pt-[90px] md:pt-[90px] lg:pt-[90px] pb-10 lg:pb-20 bg-[#F3F4F6] gap-2">
      <div class="gap-2 grid flex justify-center place-content center">
        <h1 className="items-center font-semibold text-black text-3xl mb-6 mx-3">
          Hello, I'm Danny Urkov.<br className='sm:hidden md:hidden lg:hidden xl:hidden'/> Nice to meet you!
        </h1>
        <div class="gap-2 flex justify-center place-content-center">
          <div className='hidden lg:w-1/4 xl:w-1/4'>
            <br />
          </div>

          <h2 className="lg:w-1/2 xl:w-1/2 gap-2 justify-center place-content-center items-center text-black text-lg mb-4 mx-3">
            I began my journey studying filmmaking, psychology, and mental health/therapeutic training. 
            Now on a new adventure, I strive to combine old passions with new. I try my best each day 
            to design and develop websites and applications that have the opportunity to make the world a better place,
            by sharing love, positivity, and hope. 
          </h2>

          <div className='hidden lg:w-1/4 xl:w-1/4'>
            <br />
          </div>
        </div>
        <div class="flex flex-wrap mx-4 mt-10">
          
          <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="pt-10 bg-white rounded-lg overflow-hidden flex flex-wrap justify-center items-center mb-10">
                <img
                    src={code}
                    alt="image"
                    class="w-1/3"
                    />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                          href="javascript:void(0)"
                          class="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                          >
                      Full-Stack Web Developer
                      </a>
                    </h3>
                    <p class="text-base text-body-color leading-relaxed mb-7">
                      <strong><em>MERN</em></strong> stack and WordPress <br /> HTML5, CSS3, JavaScript,<br className='sm:hidden md:hidden lg:hidden xl:hidden'/> jQuery, JSX, SQL, GraphQL
                    </p>
                    <h4 className="
                          font-semibold
                          text-dark text-lg
                          mb-4
                          block
                          ">
                      Dev Tools
                    </h4>
                    <ul className="
                          flex flex-wrap overflow-hidden
                          text-dark text-md
                          mb-4
                          block
                          ">
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        React.js
                      </li>
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        Node.js                      
                        </li>
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        Express.js
                      </li>
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        MongoDB
                      </li>
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        Handlebars.js
                      </li>
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        WordPress
                      </li>
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        GitHub
                      </li>
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        Insomnia
                      </li>
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        MySQL
                      </li>
                      <li className='w-1/2 lg:w-1/3 xl:w-1/3 overflow-hidden'>
                        Jest
                      </li>
                      
                    </ul>
                    <a
                      href="javascript:void(0)"
                      class="
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-green
                      font-medium
                      hover:border-lime-400 hover:bg-green-800 hover:text-white
                      transition
                      "
                      >
                    View Websites
                    </a>
                </div>
              </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="pt-10 bg-white rounded-lg overflow-hidden flex flex-wrap justify-center items-center mb-10">
                <img
                    src={film}
                    alt="image"
                    class="w-1/3"
                    />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                          href="javascript:void(0)"
                          class="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                          >
                      Filmmaker
                      </a>
                    </h3>
                    <p class="text-base text-body-color leading-relaxed mb-7">
                      Documentary & Short Story form Filmmaker <br />
                      Always looking to share a good story that needs to be heard 
                    </p>
                    <h4 className="
                          font-semibold
                          text-dark text-lg
                          mb-4
                          block
                          ">
                      Filmmaking Tools
                    </h4>
                    <ul className="
                          
                          text-dark text-md
                          mb-4
                          block
                          ">
                      <li>
                        Adobe Premiere
                      </li>
                      <li>
                        Final Cut Pro                      
                      </li>
                      <li>
                        Pro Tools
                      </li>
                    </ul>
                    <a
                      href="javascript:void(0)"
                      class="
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-green
                      font-medium
                      hover:border-lime-400 hover:bg-green-800 hover:text-white
                      transition
                      "
                      >
                    View Films
                    </a>
                </div>
              </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="pt-10 bg-white rounded-lg overflow-hidden flex flex-wrap justify-center items-center mb-10">
                <img
                    src={design}
                    alt="image"
                    class="w-1/3"
                    />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                          href="javascript:void(0)"
                          class="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          "
                          >
                      Designer                      
                      </a>
                    </h3>
                    <p class="text-base text-body-color leading-relaxed mb-7">
                      Website designs, logos, presentation material, & more <br /> I enjoy creating visual components are clean, fresh, and exciting
                    </p>
                    <h4 className="
                          font-semibold
                          text-dark text-lg
                          mb-4
                          block
                          ">
                      Design Tools
                    </h4>
                    <ul className="
                          
                          text-dark text-md
                          mb-4
                          block
                          ">
                      <li>
                        Figma
                      </li>
                      <li>
                        Adobe Photoshop
                      </li>
                      <li>
                        Adobe Illustrator
                      </li>
                    </ul>
                    <a
                      href="javascript:void(0)"
                      class="
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-green
                      font-medium
                      hover:border-lime-400 hover:bg-green-800 hover:text-white
                      transition
                      duration-900
                      "
                      >
                    View Designs
                    </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
{/* Cards Section End */}
    {/* <img src={mountains} 
    alt="mountains image animated"
    className='w-full'
    z-index="0"
     /> */}
    
  </div>
)
}

export default About;