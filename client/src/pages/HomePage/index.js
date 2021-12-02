import { useQuery } from '@apollo/client';
import { GET_BIIGIES } from '../../utils/queries.js';

const Home = (props) => {
  const { data, error } = useQuery(GET_BIIGIES);

  console.log(data?.biiggies);

  let mappedBs = data?.biiggies.map((item) => {
    return (
      <div className='flex flex-col gap-1'>
        <p className='text-2xl'>{item.title}</p>
        <p>{item.description}</p>
        <img src={item.images} alt="" />
        <p>{item.sources}</p>
        <p>Deadline: {new Date(item.deadline).toLocaleDateString()}</p>
        <div className='flex flex-col gap-1'>
          <h2 className='text-xl'>What can you do to help?</h2>
          {
            item.helpOptions?.map(option => {
              return (
                <div>
                  <p className='font-bold'>{option.name}</p>
                  <p>{option.description}</p>
                  <p>Number Required:{option.numOfPeople}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  });

  return (

    <div className='flex flex-col bg-body-background-blue'>
      <section className='flex flex-col gap-8 py-16 px-4'>
        <h2 className='text-center text-3xl font-semibold'>What's <em>your</em> <span className='font-extrabold text-orange-primary'>Biiggie</span> idea?</h2>
        <div className='text-center text-xl flex flex-col gap-2'>
          <p><span className='font-extrabold text-orange-primary'>Biiggie</span> is how dreams become reality.</p>
          <p>Find collaborators and funds for your idea.</p>
          <p>Support interests closets to your heart with your time, talents, and treasure. </p>
        </div>
        <div className='text-center'>
          <button className='bg-orange-primary text-white p-4 rounded-lg shadow font-semibold text-lg'>Build My <span className='font-extrabold'>Biggie</span> Now</button>
        </div>
      </section>
      <p>
        {error?.toString()}
      </p>
      <div>
        {mappedBs}
      </div>
    </div>
  );
};

export default Home;