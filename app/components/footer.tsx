import Image from "next/image";
import { LogoOftalmogia2 } from "../lib/images";

export default function Footer() {  
  return (
    <footer className="relative overflow-hidden bg-slate-50 w-full border-t border-slate-900/5">
      <div className="container max-w-screen-2xl mx-auto ss:px-12 px-6 py-12">

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-x-8">

          <div className="relative opacity-75 mb-6">
            <div className="w-9 rounded-lg bg-guindaClaro">
              <svg aria-hidden="true" className="h-9 w-9" fill="none">
                <defs>
                  <linearGradient id=":rc:" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse">
                    <stop offset=".194" stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#6692F1"></stop>
                  </linearGradient>
                </defs>
                <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:rc:)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-slate-600 ">
              <div className="[&:not(:focus-visible)]:focus:outline-none items-start">
                <span className="inset-0">Sedes Lima</span>
                <hr className="mt-2 w-16 border-2 border-guindaClaro" />
              </div>
            </h3>
            <div className="flex mt-7">

              <p className=" font-display text-xs text-slate-900 leading-7 flex">
                <span className="mt-[6px]">
                  <svg aria-hidden="true" className="h-4 w-4 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 6.17 7.94">
                    <path d="M5,9.18H5a.25.25,0,0,1-.2-.09C4.68,9,1.91,6,1.91,4.33a3.09,3.09,0,0,1,6.18,0C8.09,6,5.32,9,5.2,9.09A.25.25,0,0,1,5,9.18ZM5,1.79A2.54,2.54,0,0,0,2.47,4.33C2.47,5.42,4.14,7.52,5,8.49c.86-1,2.53-3.07,2.53-4.16A2.54,2.54,0,0,0,5,1.79Z" transform="translate(-1.91 -1.24)" />
                    <path d="M5,5.58A1.39,1.39,0,1,1,6.39,4.19,1.39,1.39,0,0,1,5,5.58ZM5,3.35a.84.84,0,1,0,.84.84A.85.85,0,0,0,5,3.35Z" transform="translate(-1.91 -1.24)" />
                  </svg>
                </span>
                <span className=" ml-2">
                  - SEDE CENTRAL: Av. Arequipa 1148 Urb. Santa Beatriz<br />
                  - SEDE SJL: Av. Gran Chimú 085, Zarate<br />
                  - SEDE BREÑA: Av. Tingo María 623, Breña<br />
                  - SEDE SMP: Av. Perú 3811, San Martín de Porres <br />
                  y nuestra SEDE COMAS: Av. Túpac Amaru 809.
                </span>
              </p>
            </div>
            <p className="mt-4 text-sm text-slate-600 flex">
              <span className="mt-[3px]">
                <svg aria-hidden="true" className="h-4 w-4 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 5.83 8.33">
                  <path className="cls-1" d="M6.8.83H3.43A1.24,1.24,0,0,0,2.2,2.07V7.93A1.24,1.24,0,0,0,3.43,9.17H6.8A1.24,1.24,0,0,0,8,7.93V2.07A1.24,1.24,0,0,0,6.8.83ZM3.43,1.4H6.8a.67.67,0,0,1,.66.67v4.7H2.77V2.07A.67.67,0,0,1,3.43,1.4ZM6.8,8.6H3.43a.67.67,0,0,1-.66-.67V7.34H7.46v.59A.67.67,0,0,1,6.8,8.6Z" transform="translate(-2.2 -0.83)" />
                  <path className="cls-1" d="M5,2.22a.23.23,0,1,0,0-.45.23.23,0,1,0,0,.45Z" transform="translate(-2.2 -0.83)" />
                  <path className="cls-1" d="M5,7.69a.23.23,0,0,0-.23.23A.23.23,0,0,0,5,8.15a.24.24,0,0,0,.23-.23A.23.23,0,0,0,5,7.69Z" transform="translate(-2.2 -0.83)" />
                </svg>
              </span>
              <span className="ml-2"> (01) 613 9292</span>
            </p>
          </div>

          <div className="relative opacity-75 mb-6">
            <div className="w-9 rounded-lg bg-guindaClaro">
              <svg aria-hidden="true" className="h-9 w-9" fill="none"><defs><linearGradient id=":rc:" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse"><stop offset=".194" stopColor="#fff"></stop><stop offset="1" stopColor="#6692F1"></stop></linearGradient></defs><path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:rc:)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-slate-600 ">
              <div className="[&:not(:focus-visible)]:focus:outline-none items-start">
                <span className="inset-0">Sedes Tacna</span>
                <hr className="mt-2 w-16 border-2 border-guindaClaro" />
              </div>
            </h3>
            <div className="flex mt-7">

              <p className=" font-display text-xs text-slate-900 leading-5 flex">
                <span className="mt-[6px]">
                  <svg aria-hidden="true" className="h-4 w-4 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 6.17 7.94">
                    <path d="M5,9.18H5a.25.25,0,0,1-.2-.09C4.68,9,1.91,6,1.91,4.33a3.09,3.09,0,0,1,6.18,0C8.09,6,5.32,9,5.2,9.09A.25.25,0,0,1,5,9.18ZM5,1.79A2.54,2.54,0,0,0,2.47,4.33C2.47,5.42,4.14,7.52,5,8.49c.86-1,2.53-3.07,2.53-4.16A2.54,2.54,0,0,0,5,1.79Z" transform="translate(-1.91 -1.24)" />
                    <path d="M5,5.58A1.39,1.39,0,1,1,6.39,4.19,1.39,1.39,0,0,1,5,5.58ZM5,3.35a.84.84,0,1,0,.84.84A.85.85,0,0,0,5,3.35Z" transform="translate(-1.91 -1.24)" />
                  </svg>
                </span>
                <span className=" ml-2">
                  - Av. Manuel A. Odría 702<br />
                  Tacna<br />
                  Perú<br />
                </span>
              </p>
            </div>
            <p className="mt-4 text-sm text-slate-600 flex">
              <span className="mt-[3px]">
                <svg aria-hidden="true" className="h-4 w-4 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 5.83 8.33">
                  <path className="cls-1" d="M6.8.83H3.43A1.24,1.24,0,0,0,2.2,2.07V7.93A1.24,1.24,0,0,0,3.43,9.17H6.8A1.24,1.24,0,0,0,8,7.93V2.07A1.24,1.24,0,0,0,6.8.83ZM3.43,1.4H6.8a.67.67,0,0,1,.66.67v4.7H2.77V2.07A.67.67,0,0,1,3.43,1.4ZM6.8,8.6H3.43a.67.67,0,0,1-.66-.67V7.34H7.46v.59A.67.67,0,0,1,6.8,8.6Z" transform="translate(-2.2 -0.83)" />
                  <path className="cls-1" d="M5,2.22a.23.23,0,1,0,0-.45.23.23,0,1,0,0,.45Z" transform="translate(-2.2 -0.83)" />
                  <path className="cls-1" d="M5,7.69a.23.23,0,0,0-.23.23A.23.23,0,0,0,5,8.15a.24.24,0,0,0,.23-.23A.23.23,0,0,0,5,7.69Z" transform="translate(-2.2 -0.83)" />
                </svg>
              </span>
              <span className="ml-2"> (+51) 940440123</span>
            </p>
          </div>

          <div className="relative opacity-75 mb-6">
            <div className="w-9 rounded-lg bg-guindaClaro">
              <svg aria-hidden="true" className="h-9 w-9" fill="none"><defs><linearGradient id=":rc:" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse"><stop offset=".194" stopColor="#fff"></stop><stop offset="1" stopColor="#6692F1"></stop></linearGradient></defs><path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:rc:)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-slate-600 ">
              <div className="[&:not(:focus-visible)]:focus:outline-none items-start">
                <span className="inset-0">Sedes Chiclayo</span>
                <hr className="mt-2 w-16 border-2 border-guindaClaro" />
              </div>
            </h3>
            <div className="flex mt-7">

              <p className=" font-display text-xs text-slate-900 leading-5 flex">
                <span className="mt-[6px]">
                  <svg aria-hidden="true" className="h-4 w-4 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 6.17 7.94">
                    <path d="M5,9.18H5a.25.25,0,0,1-.2-.09C4.68,9,1.91,6,1.91,4.33a3.09,3.09,0,0,1,6.18,0C8.09,6,5.32,9,5.2,9.09A.25.25,0,0,1,5,9.18ZM5,1.79A2.54,2.54,0,0,0,2.47,4.33C2.47,5.42,4.14,7.52,5,8.49c.86-1,2.53-3.07,2.53-4.16A2.54,2.54,0,0,0,5,1.79Z" transform="translate(-1.91 -1.24)" />
                    <path d="M5,5.58A1.39,1.39,0,1,1,6.39,4.19,1.39,1.39,0,0,1,5,5.58ZM5,3.35a.84.84,0,1,0,.84.84A.85.85,0,0,0,5,3.35Z" transform="translate(-1.91 -1.24)" />
                  </svg>
                </span>
                <span className=" ml-2">
                  - Calle La Florida 225 Urb. Santa Victoria<br />
                  Chiclayo<br />
                  Perú.
                </span>
              </p>
            </div>
            <p className="mt-4 text-sm text-slate-600 flex">
              <span className="mt-[3px]">
                <svg aria-hidden="true" className="h-4 w-4 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 5.83 8.33">
                  <path className="cls-1" d="M6.8.83H3.43A1.24,1.24,0,0,0,2.2,2.07V7.93A1.24,1.24,0,0,0,3.43,9.17H6.8A1.24,1.24,0,0,0,8,7.93V2.07A1.24,1.24,0,0,0,6.8.83ZM3.43,1.4H6.8a.67.67,0,0,1,.66.67v4.7H2.77V2.07A.67.67,0,0,1,3.43,1.4ZM6.8,8.6H3.43a.67.67,0,0,1-.66-.67V7.34H7.46v.59A.67.67,0,0,1,6.8,8.6Z" transform="translate(-2.2 -0.83)" />
                  <path className="cls-1" d="M5,2.22a.23.23,0,1,0,0-.45.23.23,0,1,0,0,.45Z" transform="translate(-2.2 -0.83)" />
                  <path className="cls-1" d="M5,7.69a.23.23,0,0,0-.23.23A.23.23,0,0,0,5,8.15a.24.24,0,0,0,.23-.23A.23.23,0,0,0,5,7.69Z" transform="translate(-2.2 -0.83)" />
                </svg>
              </span>
              <span className="ml-2"> (074) 227 810</span>
            </p>
          </div>

          <div className="relative opacity-75 mb-6">
            <div className="w-9 rounded-lg bg-guindaClaro">
              <svg aria-hidden="true" className="h-9 w-9" fill="none">
                <defs>
                  <linearGradient id=":rc:" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse">
                    <stop offset=".194" stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#6692F1"></stop>
                  </linearGradient>
                </defs>
                <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:rc:)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-slate-600 ">
              <div className="[&:not(:focus-visible)]:focus:outline-none items-start">
                <span className="inset-0">Información Institucional</span>
                <hr className="mt-2 w-16 border-2 border-guindaClaro" />
              </div>
            </h3>
            <div className="flex mt-7">
              <div className=" font-display text-xs text-slate-900 leading-7 flex">
                <span className=" ml-2">
                  <ul className="list-disc">
                    <li className="cursor-pointer hover:text-guindaOscuro font-medium">
                      Curso Fellowship
                    </li>
                    <li className="cursor-pointer hover:text-guindaOscuro font-medium">
                      Trabaja con Nosotros
                    </li>
                    <li className="cursor-pointer hover:text-guindaOscuro font-medium">
                      Política de Privacidad
                    </li>
                    <li className="cursor-pointer hover:text-guindaOscuro font-medium">
                      Política de Uso
                    </li>
                    <li className="cursor-pointer hover:text-guindaOscuro font-medium">
                      Sitemap
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12">
          <Image
            src={LogoOftalmogia2}
            alt="hoobank"
            className="mx-auto"
            width={200}
            height={200} />
        </div>

        <div className="flex flex-col items-center sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a className="group" aria-label="TaxPal on Facebook" href="https://facebook.com">
              <svg aria-hidden="true" className="h-4 w-4 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 6.4 9.87">
                <path d="M7.78,5.62l.33-1.79H6V2.67c0-.49.29-1,1.22-1H8.2V.19A12.74,12.74,0,0,0,6.53.06C4.82.06,3.7.92,3.7,2.47V3.83H1.8V5.62H3.7V9.94H6V5.62Z" />
              </svg>
            </a>
            <a className="group" aria-label="TaxPal on Instagram" href="https://instagram.com">
              <svg aria-hidden="true" className="h-4 w-4 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 8.6 8.49">
                <path d="M7.28,2.27a.5.5,0,0,0-.51.5.51.51,0,0,0,1,0A.5.5,0,0,0,7.28,2.27Z" transform="translate(-0.7 -0.76)" />
                <path d="M5,2.91A2.09,2.09,0,1,0,7.15,5,2.11,2.11,0,0,0,5,2.91ZM5,6.34A1.34,1.34,0,1,1,6.39,5,1.35,1.35,0,0,1,5,6.34Z" transform="translate(-0.7 -0.76)" />
                <path d="M6.72,9.24H3.28A2.57,2.57,0,0,1,.7,6.69V3.31A2.57,2.57,0,0,1,3.28.76H6.72A2.57,2.57,0,0,1,9.3,3.31V6.69A2.57,2.57,0,0,1,6.72,9.24ZM3.28,1.55A1.77,1.77,0,0,0,1.51,3.31V6.69A1.77,1.77,0,0,0,3.28,8.45H6.72A1.77,1.77,0,0,0,8.49,6.69V3.31A1.77,1.77,0,0,0,6.72,1.55Z" transform="translate(-0.7 -0.76)" />
              </svg>
            </a>
            <a className="group" aria-label="TaxPal on Youtube" href="https://youtube.com">
              <svg aria-hidden="true" className="h-4 w-4 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 8.24 5.77">
                <path d="M9.12,3.92a1.8,1.8,0,0,0-1.81-1.8H2.69A1.8,1.8,0,0,0,.88,3.92V6.08a1.8,1.8,0,0,0,1.81,1.8H7.31a1.8,1.8,0,0,0,1.81-1.8ZM6.4,5.16l-2.07,1c-.08,0-.36,0-.36-.11V4c0-.09.28-.15.36-.1L6.31,5C6.4,5,6.49,5.12,6.4,5.16Z" transform="translate(-0.88 -2.12)" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">Clinica La Luz ® 2023. Todods los derechos reservados. Diseño y desarrollo web
            <a href="" className="cursor-pointer hover:text-black hover:font-medium"> SyssoftIntegra</a>.
          </p>
        </div>
      </div>
    </footer >
  );
}