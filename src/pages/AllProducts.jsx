import { Products } from "../../ItemLists";

const AllProducts = () => {
  return (
    <main className="w-[1200px] m-auto mt-7">
      <div className="flex justify-between">
        {Products.map((item) => (
          <img
            key={item.id}
            src={item.imgUrl}
            alt="img"
            width={250}
            className={`cursor-pointer ${item.style}`}
          />
        ))}
      </div>
    </main>
  );
};

export default AllProducts;
