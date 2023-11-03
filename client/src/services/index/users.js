import axios from 'axios'

export const signup = async({name,email, voteChoice, date})=>{
    try {
        const response = await axios.post("http://localhost:5000/api/users/register",{
            name,
            email,
            voteChoice: voteChoice,
            date
        })

return response.data;

    } catch (error) {
if(error.response && error.response.data.message)
 throw new Error(error.response.data.message)
throw new Error(error.message)
    }
}






