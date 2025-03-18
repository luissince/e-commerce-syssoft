import Image from "next/image";
import Link from "next/link";
import { BranchModel, CompanyModel } from "@/app/lib/definitions";
import React from "react";
import Logo from "./component/logo";

interface Props {
  company: CompanyModel;
  branchs: BranchModel[];
}

export default async function Footer({ company, branchs }: Props) {

  return (
    <footer className="footer-section-wrapper bg-white dark:bg-black ">
      <div className="container max-w-screen-x mx-auto px-2 md:px-6 pt-[56px]">
       {/* Start Logo */}
          <Logo {...company} />
       {/* End Logo */}
        <div className="lg:flex justify-between mb-[50px]">
          <div className="flex-1 lg:flex">
            <div className="lg:w-1/3 lg:flex lg:flex-col w-full mb-10 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-base font-medium text-[#2F2F2F] dark:text-[#8b8b8b]">
                {company.nombreEmpresa}
                </h6>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="text-qgray  dark:text-[#ffffff] text-sm">
                  <span>
                    {company.email}
                  </span>
                </div>

                <div className="text-qgray  dark:text-[#ffffff] text-sm">
                  <span>
                    {company.paginaWeb}
                  </span>
                </div>

                <div className="text-qgray  dark:text-[#ffffff] text-sm">
                  <span>
                    {company.horarioAtencion}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                <div className="mb-5">
                  <h6 className="text-base font-medium text-[#2F2F2F] dark:text-[#8b8b8b]">
                    Enlacen Generales
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    <li>
                      <Link href="/all-products">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Tienda
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Politicas de Privacidad
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-condition">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Terminos y Condiciones
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
                    Enlacen Generales
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    <li>
                      <Link href="/">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Inicio
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                            Acerca de
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <span className="text-qgray  dark:text-[#ffffff] text-sm hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Contacto
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
                    Sede(s)
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-3">
                    {
                      branchs.map((item, index) => (
                        <React.Fragment key={index}>
                          <li>
                            <p className="text-black dark:text-[#ffffff] text-sm capitalize mb-1.5">
                              {item.nombre}
                            </p>
                            <Link href={`/branch/${item.idSucursal}`}>
                              <p className="text-qgray dark:text-[#ffffff] text-xs hover:text-qblack cursor-pointer capitalize">
                                {item.direccion}
                              </p>
                            </Link>
                          </li>

                          <li>                           
                            <Link href={`/branch/${item.idSucursal}`}>
                              <p className="text-qgray dark:text-[#ffffff] text-sm hover:text-qblack cursor-pointer capitalize">
                                {item.celular}
                              </p>
                            </Link>
                          </li>
                        </React.Fragment>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-bar border-t border-qgray-border flex justify-between items-center lg:flex-row flex-col py-5 space-y-5">
          <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:items-center lg:space-x-5">
            {/* <div className="flex space-x-4 justify-center items-center">
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon fill="#848484" width={20} height={20} />
              </a>

              <a href="https://www.facebook.com/" target="_blank">
                <FacebookIcon fill="#848484" width={20} height={20} />
              </a>

              <a href="https://www.youtube.com/" target="_blank">
                <YouTubeIcon fill="#848484" width={20} height={20} />
              </a>
            </div> */}

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