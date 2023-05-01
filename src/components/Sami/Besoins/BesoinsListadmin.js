import image1 from '../images1/event1.png';
import image2 from '../images1/event2.png';
import image3 from '../images1/event3.png';
import placeicon from '../images1/place.svg';


const BesoinsListadmin = ({ besoins }) => {
  return (
    <div className="evenements-list">
      {besoins.map((besoin) => (
        <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between" key={besoin.id}>
          {(besoin.id % 2 === 1) ? (
           <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between"> 
          <div className="flex justify-start w-[100%] rounded mb-12 px-4">
            <img src={
              besoin.id % 3 === 1 ? image1 :
              besoin.id % 3 === 2 ? image2 :
              image3
            } alt="" />
          </div>
          <div className="px-8 mr-4 py-12 w-120">
            <h2 style={{ color: "#2E3840" }} className="text-5xl font-bold py-4">
              {besoin.title}
            </h2>
            
            <p className="font-bold py-2 flex"><img src={placeicon} alt="" className='px-3'  />{besoin.place}</p>
            <p className="font-black mb-4">{besoin.body}</p>
            <div className='flex justify-center mt-6'>
            <button style={{ backgroundColor: '#2E3840' }} className='cart-btn  font-extrabold transition duration-500 ease-in-out px-2 py-2  ml-4'>Faites Une Donation</button>
            <button  style={{ backgroundColor: '#2E3840' }}
              className="font-extrabold  cart-btn flex transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]">Voir Plus</button>
            <button  style={{ backgroundColor: '#2E3840' }}
              className="font-extrabold  cart-btn flex r transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]">Archiver</button>
              </div>          </div>
          </div>): null}
          {(besoin.id % 2 === 0) ? (
           <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between"> 
          
          <div className="px-8 mr-4 py-12 w-120">
            <h2 style={{ color: "#2E3840" }} className="text-5xl font-bold py-4">
              {besoin.title}
            </h2>
            <p className="font-bold py-2 flex"><img src={placeicon} alt="" className='px-3'  />{besoin.place}</p>
            <p className="font-black mb-4">{besoin.body}</p>
            <div className='flex justify-center mt-6'>
            <button style={{ backgroundColor: '#2E3840' }} className='cart-btn  font-extrabold transition duration-500 ease-in-out px-2 py-2  ml-4'>Faites Une Donation</button>
            <button  style={{ backgroundColor: '#2E3840' }}
              className="font-extrabold  cart-btn flex transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]">Voir Plus</button>
            <button  style={{ backgroundColor: '#2E3840' }}
              className="font-extrabold  cart-btn flex r transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]">Archiver</button>
              </div>
          </div>
          <div className="flex justify-end w-[100%] rounded mb-12 px-4">
            <img src={
              besoin.id % 3 === 1 ? image1 :
              besoin.id % 3 === 2 ? image2 :
              image3
            } alt="" />
          </div>
          </div>): null}
        </div>
      ))}
      <div className='flex justify-center'>
      <button  style={{ backgroundColor: '#2E3840' }}
              className="font-extrabold mt-6 cart-btn flex transition duration-500 ease-in-out px-2 py-2 w-4 self-center ml-[30%]">Ajouter</button>
    </div>
    </div>
  );
};

export default BesoinsListadmin;
