import Title, { BreadItem } from "@/src/components/common/title";
import { CurveIcon, EmailIcon, MapIcon, PhoneIcon } from "@/src/helper/icons";

const Body = () => {
    return (
        <div className="contact-wrapper w-full mb-10">
            <div className="container max-w-screen-x mx-auto md:px-6">
                <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-1">Contact Information</h1>
                        <p className="text-[15px] text-qgraytwo leading-[30px] mb-5">Fill the form below or write us .We will help you as soon as possible.</p>
                        <div className="xl:flex xl:space-x-[30px] mb-[30px]">
                            <div className="xl:w-1/2 w-full  h-[196px] flex flex-col item justify-center bg-[#FFEAE5] p-5">
                                <div className="flex justify-center mb-3 ">
                                    <PhoneIcon />
                                </div>
                                <p className="text-[22px] text-black leading-[30px] text-center font-semibold">Phone</p>
                                <p className="text-[15px] text-black leading-[30px] text-center">+(323) 9847 3847 383</p>
                                <p className="text-[15px] text-black leading-[30px] text-center">+(434) 5466 5467 443</p>
                            </div>
                            <div className="xl:w-1/2 w-full h-[196px] flex flex-col item justify-center bg-[#D3EFFF] p-5">
                                <div className="flex justify-center mb-3 ">
                                    <EmailIcon />
                                </div>
                                <p className="text-[22px] text-black leading-[30px] text-center font-semibold">Email</p>
                                <p className="text-[15px] text-black leading-[30px] text-center">Demoemail@gmail.com</p>
                                <p className="text-[15px] text-black leading-[30px] text-center">rafiqulislamsuvobd@gmail.com</p>
                            </div>
                        </div>
                        <div className="p-5 flex flex-col justify-between w-full bg-[#E7F2EC]">
                            <div className="flex space-x-5">
                                <span>
                                    <MapIcon />
                                </span>
                                <div>
                                    <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-2">Address</h1>
                                    <p className="text-[15px] text-qblack leading-[30px]">4517 Washington Ave. Manchester, Road 2342, <br />Kentucky 39495</p>
                                </div>
                            </div>
                            <div className="w-full h-[206px] mt-5">
                                <iframe title="newWork" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.94539481518!2d-74.26675559025064!3d40.69739290398433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1656755618576!5m2!1sen!2sbd"
                                    loading="lazy" className="w-full h-full border-0">

                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white sm:p-10 p-3">
                        <div className="title flex flex-col items-center">
                            <h1 className="text-[34px] font-bold text-qblack">Get In Touch</h1>
                            <span className="-mt-5 block">
                                {/* <svg width="354" height="30" viewBox="0 0 354 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1" stroke="#FFBB38" stroke-width="2" strokeLinecap="round"></path>
                                </svg> */}
                                <CurveIcon />
                            </span>
                        </div>
                        <div className="inputs mt-5">
                            <div className="mb-4">
                                <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="first_name">Frist Name*</label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                        <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" id="first_name" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="first_name">Email Address*</label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                        <input placeholder="info@quomodosoft.com" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" id="first_name" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="first_name">Subject*</label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                        <input placeholder="Your Subject here" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" id="first_name" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">Message*</h6>
                                <textarea placeholder="Type your message here" className="w-full h-[105px] focus:ring-0 focus:outline-none p-3 border border-qgray-border placeholder:text-sm"></textarea>
                            </div>

                            <div><a href="#"><div className="black-btn text-sm font-semibold w-full h-[50px] flex justify-center items-center"><span>Send Now</span></div></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Contact = () => {

    return (
        <div className="w-full pt-0 pb-0">
            <Title
                breadCrumds={
                    <>
                        <BreadItem
                            href={"/"}
                            title={"home"}
                            isSeparator={true} />
                        <BreadItem
                            href={"/contact"}
                            title={"contact"}
                            isSeparator={false} />
                    </>
                }
                title={"Contact"} />
            <Body />
        </div>
    );
}

export default Contact;