import { StockList } from "../../StockListData";

const Stocks = () => {
  return (
    <main className="hidden lg:flex w-[1200px] m-auto">
      <div className="flex justify-between items-center">
        {StockList.map((stocks) => (
          <div
            className="w-[350px] h-[140px] border-2 border-[#D9D9D9] flex justify-center items-center shadow-md rounded-md bg-center backdrop-blur-sm mr-16"
            key={stocks.label}
            style={{
              backgroundImage: `url(${stocks.imageUrl})`,
              backgroundSize: "110%",
            }}
          >
            <h2 className="font-bold text-5xl text-white">{stocks.label}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Stocks;
