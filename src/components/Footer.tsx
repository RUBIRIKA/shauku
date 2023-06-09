import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div>
      <div className=" grid grid-cols-2 px-8  md:grid-cols-4 gap-y-10 lg:px-44 xl:px-44 py-14  text-gray-100">
        <div className="space-y-4 text-xs text-gray-300 ">
          <h4 className="font-bold"> COMPANY </h4>
          <p className=" hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              About Us
            </a>
          </p>
          <p className="hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              Our Services
            </a>
          </p>
          <p className="hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              Privacy Policy
            </a>
          </p>
        </div>

        <div className="space-y-4 text-xs text-gray-300 ">
          <h4 className="font-bold"> SUPPORT </h4>
          <p className="hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              Help Center
            </a>
          </p>
          <p className="hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              Contact Us
            </a>
          </p>
          <p className="hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              Sign-In
            </a>
          </p>
          <p className="hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              Sign-Up
            </a>
          </p>
        </div>

        <div className="space-y-4 text-xs text-gray-300 ">
          <h4 className="font-bold "> WORK WITH US </h4>
          <p className="  hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              Sponsorship
            </a>
          </p>
          <p className=" hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              Advertise with us
            </a>
          </p>
          <p className="hover:scale-105 transition transform duration-200 ease-out">
            <a href="" rel="">
              Become an Affiliate
            </a>
          </p>
        </div>

        <div className="space-y-4 text-xs text-gray-300 ">
          <h4 className="font-bold ">FOLLOW US </h4>
          <div className="flex space-x-4  ">
            <p className="cursor-pointer hover:scale-110 transition transform duration-200 ease-out ">
              <a href="" rel="">
                <FacebookIcon />
              </a>
            </p>
            <p className="cursor-pointer hover:scale-110 transition transform duration-200 ease-out ">
              <a href="" rel="">
                <TwitterIcon />
              </a>
            </p>
            <p className="cursor-pointer hover:scale-110 transition transform duration-200 ease-out ">
              <a href="" rel="">
                <InstagramIcon />
              </a>
            </p>
            <p className="cursor-pointer hover:scale-110 transition transform duration-200 ease-out ">
              <a href="" rel="">
                <PinterestIcon />
              </a>
            </p>
            <p className="cursor-pointer hover:scale-110 transition transform duration-200 ease-out ">
              <a href="" rel="">
                <YouTubeIcon />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-lg shadow  md:px-6 md:py-8 dark:bg-gray-900">
        <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className=" block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <p>
            <a href="" rel="" className="hover:text-gray-300">
              Privacy Policy |
            </a>

            <a href="" rel="" className="hover:text-gray-300">
              {' '}
              Terms of Service |
            </a>

            <a href="" rel="" className="hover:text-gray-300">
              {' '}
              Help
            </a>
          </p>
          <p>© 2023 Shauku. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;