import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "../../component/icons";
import { FaWhatsapp } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="footer-section-wrapper bg-white dark:bg-black ">
      <div className="container max-w-screen-x mx-auto px-2 md:px-6 pt-[56px]">
        <div className="w-full flex flex-col items-center mb-[50px]">
          <div className="mb-[40px]">
            <Link href="/">
              <Image width="152" height="36" src="/assets/logo.svg" alt="logo" priority={true} />
            </Link>
          </div>
          <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
        </div>

        <div className="lg:flex justify-between mb-[50px]">
          <div className="flex-1 lg:flex">
            <div className="lg:w-1/3 lg:flex lg:flex-col w-full mb-10 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-base font-medium text-[#2F2F2F] dark:text-[#8b8b8b]">
                  General Links
                </h6>
              </div>

              <div className="flex flex-col space-y-4">
                <p className="text-qgray dark:text-[#ffffff]  text-sm">
                  We know there are a lot of threa developers our but we pride into
                  a firm in the industry.
                </p>
                <div className="text-qgray  dark:text-[#ffffff] text-sm">
                  <div className="flex items-center">
                    <LuMapPin /> <span className="ml-1">Av. Jose Leal 507, Lince</span>
                  </div>
                </div>
                <div className="text-qgray  dark:text-[#ffffff]  text-sm">
                  <div className="flex items-center">
                    <FaWhatsapp /> <span className="ml-1">(+51) 919 445 661</span>
                  </div>
                </div>
                <div className="text-qgray  dark:text-[#ffffff] text-sm">
                  <span className="flex items-center">
                    <IoTimeOutline /> <span className="ml-1">Horario:</span>
                  </span>
                  <span>
                    Lunes a viernes: 9:30 a.m. - 7:00 p.m.
                    Sábados: 9:30 a.m - 5:00 p.m
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-base font-medium text-[#2F2F2F] dark:text-[#8b8b8b]">
                  General Links
                </h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4 ">
                  <li>
                    <Link href="/about">
                      <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        About Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-condition">
                      <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Terms Condition
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-products">
                      <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Best Products
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                <div className="mb-5">
                  <h6 className="text-base font-medium text-[#2F2F2F] dark:text-[#8b8b8b]">
                    General Links
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    <li>
                      <Link href="/blogs">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Blog
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tracking-order">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Tracking Order
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/become-saller">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Become Seller
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                <div className="mb-5">
                  <h6 className="text-base font-medium text-[#2F2F2F] dark:text-[#8b8b8b]">
                    Main Headquarters
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    <li>
                      <Link href="/flash-sale">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Sede Lince: Av. Jose Leal 507
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Sede San Miguel: Av. de la Marina 1465, San Miguel 15088
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Sede Miraflores: Ca. Enrique Palacios 762
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-bar border-t border-qgray-border flex justify-between items-center lg:flex-row flex-col py-5 space-y-5">
          <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:items-center lg:space-x-5">
            <div className="flex space-x-4 justify-center items-center">
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon fill="#848484" width={20} height={20} />
              </a>

              <a href="https://www.facebook.com/" target="_blank">
                <FacebookIcon fill="#848484" width={20} height={20} />
              </a>

              <a href="https://www.youtube.com/" target="_blank">
                <YouTubeIcon fill="#848484" width={20} height={20} />
              </a>
            </div>

            <div className="flex flex-col items-center lg:flex-row text-base">
              <span className="text-qgray">&copy;{new Date().getFullYear()}</span>
              <a
                href="https://syssoftintegra.com/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-qblack dark:text-white mx-1"
              >
                SysSoft Integra
              </a>
              <span className="text-center text-qgray">Reservados todos los derechos.</span>
            </div>
          </div>

          <div className="">
            <a href="https://pay-me.com/">
              <Image
                width="318"
                height="28"
                src="/assets/payment-getways.png"
                alt="payment-getways"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}