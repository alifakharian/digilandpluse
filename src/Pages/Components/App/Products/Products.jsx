import Productitem from "./Productitem";

export default function Products() {
  return (
    <>
      <div className="flex flex-wrap dark:bg-slate-900 dark:text-white">
        <div className=" grid grid-cols-6 gap-[15px]  p-2  justify-center smd:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <Productitem />
        </div>
        {/* <div className="lg:w-[20%] bg-gray-500 dark:bg-slate-900 pt-5 text-center">right</div> */}
      </div>
    </>
  );
}
