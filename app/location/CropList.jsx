import CropCard from './CropCard'
import { CerealDatas } from '../utils/cerealData';

function CropList () {
  return (
    <div className='grid grid-cols-2 md:grid-cols-6 place-items-center text-grey-300'>
        {CerealDatas.map((CerealData) => (
            <CropCard key={CerealData.id} CerealData={CerealData} />
        ))}
    </div>
  );
};

export default CropList
