import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const VoterList = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users/profile')
            .then(res => {
                toast.success("Users list is successfully rendered");
                console.log(res.data);
                // Format createdAt date before setting it in the state
                const formattedUsers = res.data.map(userItem => {
                    return {
                        ...userItem,
                        createdAt: new Date(userItem.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric'
                        }),

                    };
                });
                setUser(formattedUsers);
            })
            .catch(err => {
                toast.error(err.message);
                console.error(err);
            });
    }, []);

    return (
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
               <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> <Link to='/register' >Register USER</Link></button>
               <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> <Link to='/' >BACK TO HOME</Link></button>
                <table className='min-w-full leading-normal'>
                    <thead>
                        <tr>
                            <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Name</th>
                            <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Email</th>
                            <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Voting Choice</th>
                            <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && user.length > 0 &&
                            user.map((userItem, userIndex) => (
                                <tr key={userItem._id}>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">{userItem.name}</td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">{userItem.email}</td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">{userItem.voteChoice}</td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">{userItem.createdAt}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> <Link to='/' >BACK TO HOME</Link></button>
            </div>
        </div>
    );
}

export default VoterList;
