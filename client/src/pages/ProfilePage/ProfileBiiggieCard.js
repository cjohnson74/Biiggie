import { FiThumbsUp } from 'react-icons/fi';
import { Link } from "react-router-dom";

const BiiggieCard = ({ biiggie }) => {
    const processHelpOptions = () => {
      let moneyRequestedTotal = 0;
      let moneyReceivedTotal = 0;
      let numOfPeopleReqTotal = 0;
      let registeredUsersTotal = 0;

      for (const option of biiggie.helpOptions) {
        if (option.numOfPeople) {
          numOfPeopleReqTotal += option.numOfPeople;
          if (!option.registeredUsers) {
            registeredUsersTotal = 0;
          } else {
            registeredUsersTotal += option.registeredUsers.length;
          }
        }

        if (option.moneyRequested) {
          moneyRequestedTotal += option.moneyRequested;
          moneyReceivedTotal += option.moneyReceived;
          if (!option.moneyReceived) {
            moneyReceivedTotal = 0;
          } else {
            moneyReceivedTotal += option.moneyReceived;
          }
        }
      }

      return { moneyRequestedTotal, moneyReceivedTotal, numOfPeopleReqTotal, registeredUsersTotal };
    };

    const helpOptionsTotals = processHelpOptions();
    console.log(biiggie._id)
  return (
    <Link to={`/biiggie/${biiggie._id}`}>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={biiggie.images[0]} alt="Biiggie" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{biiggie.title}</div>
          <p className="text-gray-700 text-base">{biiggie.description}</p>
        </div>
        <div className="bg-blue-secondary flex flex-row px-4 py-2 justify-between">
          <p className='font-bold'>15 <FiThumbsUp className='inline' /></p>
          <p className='font-bold'>
            {helpOptionsTotals.registeredUsersTotal} / {helpOptionsTotals.numOfPeopleReqTotal} Collaborators
          </p>
          <p className='font-bold'>
            ${helpOptionsTotals.moneyReceivedTotal} / ${helpOptionsTotals.moneyRequestedTotal}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Food
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Politics
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Education
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BiiggieCard;
