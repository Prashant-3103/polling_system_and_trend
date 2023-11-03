import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import LineChart from '../stats/line/LineChart';
import BarChart from '../stats/bar/BarChart';

const VoterList = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({ labels: [], voted: [] });

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/profile')
      .then(res => {
        toast.success("Users list is successfully rendered");
        console.log(res.data);
        const formattedUsers = res.data.map(userItem => {
          return {
            ...userItem,
            date: new Date(userItem.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
            }),
          };
        });

        const newChartData = {
          labels: formattedUsers.map((userItem) => userItem.date),
          voted: formattedUsers.map((userItem) => userItem.voteChoice),
        };
console.log(newChartData);
        setChartData(newChartData);
        setUser(formattedUsers);
        setIsLoading(false);
      })
      .catch(err => {
        toast.error(err.message);
        console.error(err);
      });
  }, []);

  // Preprocess data to count true and false votes for each day
  const processedChartData = chartData.labels.map((date) => {
    const trueVotes = chartData.voted.filter((vote) => vote === true && date === vote.date).length;
    const falseVotes = chartData.voted.filter((vote) => vote === false && date === vote.date).length;
    return { date, trueVotes, falseVotes };
  });


    return (
        <div className="px-4 py-4  -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 bg-[#E6E6FA]">
            {isLoading && <p className='text-dark-light mt-3 text-sm md:text-lg text-center' >Wait, users are being rendered...</p>}
           {!isLoading && <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
               <button className='border-2 mx-2 mb-2 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> <Link to='/register' >Register USER</Link></button>
               <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> <Link to='/' >BACK TO HOME</Link></button>
                <table className='min-w-full leading-normal bg-[#8467D7]'>
                    <thead>
                        <tr>
                            <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-[#8467D7] border-b border-gray-200">Name</th>
                            <th className="px-5 mx-2  py-3 text-sm font-normal text-left text-gray-800 uppercase bg-[#8467D7] border-b border-gray-200">Email</th>
                            <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-[#8467D7] border-b border-gray-200">Voting Choice</th>
                            <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-[#8467D7] border-b border-gray-200">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && user.length > 0 &&
                            user.map((userItem, userIndex) => (
                                <tr key={userItem._id}>
                                    <td className="px-5 py-5 text-sm bg-[#E6E6FA] border-b border-gray-200">{userItem.name}</td>
                                    <td className="px-5 py-5 text-sm bg-[#E6E6FA] border-b border-gray-200">{userItem.email}</td>
                                    <td className="px-5 py-5 text-sm bg-[#E6E6FA] border-b border-gray-200">{userItem.voteChoice}</td>
                                    <td className="px-5 py-5 text-sm bg-[#E6E6FA] border-b border-gray-200">{userItem.date}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>



                <button className='border-2 m-2 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> Line</button>

                <LineChart data={chartData} />
                <button className='border-2 m-2 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> BAR CHART</button>
                <BarChart data={chartData}/>
                </div>


            }

        </div>
    );
}

export default VoterList;
