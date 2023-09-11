import picker from './assets/images/picker.png'

const Calender: React.FC = () => {
  return (
    <>
      <div>
        <img src={picker} alt="date-picker" className='w-100' />
      </div>
    </>
  );
};

export default Calender;
