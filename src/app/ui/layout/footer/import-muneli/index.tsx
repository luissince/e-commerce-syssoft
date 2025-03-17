import Image from "next/image";
import Link from "next/link";
import { fetchImagesCompany, fetchListBranchs, fetchLoadCompany } from "@/app/lib/data";
import { BranchModel, CompanyModel } from "@/app/lib/definitions";
import React from "react";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaInstagram } from "react-icons/fa";
import images from "@/app/lib/config/images";
import Container from "@/app/ui/component/import-muneli/container";

export default async function Footer() {
  const branchs = await fetchListBranchs() as BranchModel[];
  const company = await fetchLoadCompany() as CompanyModel;
  const image = await fetchImagesCompany() as CompanyModel;

  return (
    <footer className="footer-section-wrapper bg-white pt-10">
      <Container>
        <div className="lg:flex justify-between mb-10">
          <div className="flex-1 lg:flex">
            <div className="lg:w-1/3 lg:flex lg:flex-col w-full mb-10 lg:mb-0">
              <div>
                <Link href="/">
                  <Image
                    width="152"
                    height="36"
                    src={image.rutaImage ?? images["import-muneli"].logo}
                    alt={image.nombreEmpresa ?? "logo"}
                    priority={true}
                  />
                </Link>
                <div className="flex space-x-4 items-center mt-4">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram fill="#f76d24" size={22} />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <CiFacebook fill="#f76d24" size={22} />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <CiYoutube fill="#f76d24" size={22} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <div className="text-[#042460] text-sm font-bold">
                  <span>{company.email}</span>
                </div>
                <div className="text-[#042460] text-sm">
                  <span>{company.paginaWeb}</span>
                </div>
                <div className="text-[#042460] text-sm">
                  <span>{company.horarioAtencion}</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                <div className="mb-5">
                  <h6 className="text-base font-medium text-[#042460]">Enlaces Generales</h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <Link href="/all-products">
                        <span className="text-black text-sm hover:text-[#f76d24] border-b border-transparent hover:border-[#f76d24] cursor-pointer capitalize">
                          Tienda
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <span className="text-black text-sm hover:text-[#f76d24] border-b border-transparent hover:border-[#f76d24] cursor-pointer capitalize">
                          Políticas de Privacidad
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-condition">
                        <span className="text-black text-sm hover:text-[#f76d24] border-b border-transparent hover:border-[#f76d24] cursor-pointer capitalize">
                          Términos y Condiciones
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
                  <h6 className="text-base font-medium text-[#042460]">Enlaces Generales</h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <Link href="/">
                        <span className="text-black text-sm hover:text-[#f76d24] border-b border-transparent hover:border-[#f76d24] cursor-pointer capitalize">
                          Inicio
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <span className="text-black text-sm hover:text-[#f76d24] border-b border-transparent hover:border-[#f76d24] cursor-pointer capitalize">
                          Acerca de
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <span className="text-black text-sm hover:text-[#f76d24] border-b border-transparent hover:border-[#f76d24] cursor-pointer capitalize">
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
                  <h6 className="text-base font-medium text-[#042460]">Sede(s)</h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-3">
                    {branchs.map((item, index) => (
                      <React.Fragment key={index}>
                        <li>
                          <p className="text-black text-sm capitalize mb-1.5">{item.nombre}</p>
                          <Link href={`/branch/${item.idSucursal}`}>
                            <p className="text-[#042460] text-xs hover:text-[#f76d24] cursor-pointer capitalize">
                              {item.direccion}
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/branch/${item.idSucursal}`}>
                            <p className="text-[#042460] text-sm hover:text-[#f76d24] cursor-pointer capitalize">
                              {item.celular}
                            </p>
                          </Link>
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-bar border-t border-[#f76d24] flex justify-between items-center lg:flex-row flex-col py-5 space-y-5">
          <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:items-center lg:space-x-5">
            <div className="flex flex-col items-center lg:flex-row text-base">
              <span className="text-[#042460]">&copy; {new Date().getFullYear()}</span>
              <a
                href="https://syssoftintegra.com/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#f76d24] mx-1"
              >
                SysSoft Integra
              </a>
              <span className="text-center text-[#042460]">Reservados todos los derechos.</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <FaCcVisa color="#042460" size={30} />
            <FaCcMastercard color="#042460" size={30} />
            <FaCcPaypal color="#042460" size={30} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
