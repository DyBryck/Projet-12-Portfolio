import mapScreenDunkirk from "../../public/images/maps/dunkirk.webp";

const CardDunkirk = () => {
  return (
    <div className="col-span-3 row-span-2 overflow-hidden rounded-lg opacity-80 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:opacity-100 md:col-span-4 lg:col-span-3 xl:col-span-2 xl:row-span-1">
      <img
        src={mapScreenDunkirk}
        className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
      />
    </div>
  );
};

export default CardDunkirk;
