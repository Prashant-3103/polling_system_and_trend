import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import MainLayout from '../../components/MainLayout';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../services/index/users';
import { userActions } from '../../store/reducer/userReducer';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, voteChoice, date }) => {
      return signup({ name, email, voteChoice, date });
    },
    onSuccess: (data) => {
      toast.success("User is successfully registered")
      dispatch(userActions.setUserInfo(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate('/voters')
    }
  }, [navigate, userState.userInfo]);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      voteChoice: true,
      date: new Date().toISOString().split('T')[0], // Corrected the default date format
    },
    mode: 'onChange',
  });

  const submitHandler = (data) => {
    const { name, email, voteChoice, date } = data;
    mutate({ name, email, voteChoice, date });
  };

  return (
    <MainLayout>
        <section className='container mx-auto px-5 py-10'>
<div className='w-full max-w-sm mx-auto'>
    <h1 className='font-roboto text-2xl font-bold text-center text-dark-hard mb-8'>Sign up</h1>
<form onSubmit={handleSubmit(submitHandler)}>
    <div className='flex flex-col mb-6 w-full'>
<label htmlFor="name" className='text-[#5a7184] font-semibold block'>NAME</label>
<input type="text"  id="name" {...register("name",{
    minLength: {
        value: 1,
        message: "Name must be at least 1 character"
    },
    required: {
        value: true,
        message: "Name is required",
    }
})}  placeholder='Enter name' className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9] ${errors.name ? "border-red-500": "border-[#c3cad9]"}`}/>
{errors.name?.message&&(
    <p className={`text-red-500 mb-6 w-full `}>{errors.name?.message}</p>
)}
    </div>
    <div className='flex flex-col mb-6 w-full'>
<label htmlFor="email" className='text-[#5a7184] font-semibold block'>Email</label>
<input type="email" id="email"
 {...register("email",{
    pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email',
    },
    required:{
        value: true,
        message: "Email is required"
    },

 })}
  placeholder='Enter eamil' className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9] ${errors.email ? "border-red-500": "border-[#c3cad9]"}`}/>
  {errors.email?.message&&(
    <p className={`text-red-500 mb-6 w-full `}>{errors.email?.message}</p>
)}
    </div>

    <div className='flex flex-col mb-6 w-full items-center '>
  <label htmlFor="votingChoice" className='text-[#5a7184] font-semibold block mb-2'>Your Choice</label>
  <div className='flex items-center space-x-4'>
    <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
      <input
        type="radio"
        id="yes"
        value="true"
        {...register("voteChoice", {
          required: 'Voting choice is required'
        })}
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      />
      <span className='text-dark-hard'>Yes</span>
    </label>

    <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center items-center'>
      <input
        type='radio'
        id='no'
        value="true"
        {...register('voteChoice', {
          required: 'Voting choice is required'
        })}
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 align-middle'
      />
      <span className='text-dark-hard'>No</span>
    </label>
  </div>
  {errors.voteChoice && (
    <p className='text-red-500 mt-2'>{errors.voteChoice.message}</p>
  )}
</div>


    <div className='flex flex-col mb-6 w-full'>
<label htmlFor="date" className='text-[#5a7184] font-semibold block'>Date</label>
<input type="date" id="date"
 {...register("date",{
    pattern: {
        value: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, // YYYY-MM-DD format
        message: 'Please enter a valid date in the format YYYY-MM-DD',
      },
      required:{
        value: true,
        message: "Date is required"
    },
 })}
  placeholder='Enter the date' className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9] ${errors.date && errors.date.message ? "border-red-500": "border-[#c3cad9]"}`}/>
  {errors.date &&(
    <p className={`text-red-500 mb-6 w-full `}>{errors.date.message}</p>
)}
    </div>





<button type='submit' disabled={!isValid || isLoading} className='bg-primary font-bold text-white text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed' >Register</button>

</form>

</div>
        </section>
    </MainLayout>
  )
}

export default RegisterPage
