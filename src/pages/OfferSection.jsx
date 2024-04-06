import { personalCare } from "../../ItemLists";

const OfferSection = () => {
  return (
    <main className="mt-16 w-[1200px] m-auto">
      <h2 className="text-4xl font-bold ml-12 sm:ml-2 mb-8 sm:mb-12">Today's Offer zone</h2>
      <div className="flex flex-wrap w-[93vw] lg:w-[79vw] gap-16 justify-center lg:gap-12 ml-2 sm:ml-0">
        {personalCare.map((item) => (
          <div
            key={item.id}
            className="rounded-md hover:border-orange border-2 border-black cursor-pointer hover:shadow-lg"
            style={{
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <img
              src={item.imgUrl}
              width={200}
              height={200}
              alt="cloth"
              className="w-[195px]"
            />
            <div className="text-center font-semibold text-xl cursor-pointe border-t-2 border-black hover:border-orange">
              <p>description</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[96vw] sm:w-[94vw] lg:w-[77vw]  flex justify-end mt-4 mr-2">
        <h4 className="cursor-pointer text-black hover:text-[#FE2000CC] font-semibold text-xl">
          see more
        </h4>
      </div>
    </main>
  );
};

export default OfferSection;
