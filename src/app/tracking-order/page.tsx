import Discount from "@/src/components/common/discount";
import Title, { BreadItem } from "@/src/components/common/title";
import { CardIcon } from "@/src/helper/icons";

const Body = () => {
  return (
    <div className="content-wrapper w-full mb-[40px]">
      <div className="container max-w-screen-x mx-auto px-2 md:px-6">
        <h1 className="text-[22px] text-qblack font-semibold leading-9">Track Your Order</h1>
        <p className="text-[15px] text-qgraytwo leading-8 mb-5">Enter your order taracking number and your secreet id.</p>
        <div className="w-full bg-white lg:px-[30px] px-5 py-[23px] lg:flex items-center">
          <div className="lg:w-[642px] w-full">
            <div className="mb-3">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Order Tracking Number*</label>
                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                  <input placeholder="Order Number" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" />
                </div>
              </div>
            </div>
            <div className="mb-[30px]">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Delivery Date</label>
                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                  <input placeholder="23/09/2022" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" />
                </div>
              </div>
            </div>
            <a href="#"><div className="w-[142px] h-[50px] black-btn flex justify-center items-center"><span>Track Now</span></div></a>
          </div>
          <div className="flex-1 flex justify-center mt-5 lg:mt-0">
            <CardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

const TrackingOrder = () => {
  return (
    <div className="w-full pt-0 pb-0">
      <div className="tracking-page-wrapper w-full">
        <Title
          breadCrumds={
            <>
              <BreadItem
                href={"/"}
                title={"home"}
                isSeparator={true} />

              <BreadItem
                href={"/tracking-order"}
                title={"Track Order"}
                isSeparator={false} />
            </>
          }
          title={"Track Order"} />

        <Body />
        <Discount />
      </div>
    </div>
  );
}

export default TrackingOrder;