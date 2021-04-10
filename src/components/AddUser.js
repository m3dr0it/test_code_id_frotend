import {useState} from 'react'
import axios from 'axios'
import { backend_url } from '../backend-config'
import { useHistory } from 'react-router-dom'

const AddUser = () => {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const [fullname,setFullname] = useState()
    const [selectedGender,setSelectedGender] = useState(true)
    const [birtDate,setBirthDate] = useState()
    const [address,setAddress] = useState()
    const history = useHistory()

    const onChangeName = (e) => {
        setUsername(e.target.value)
    }

    const onChangePass = (e) => {
        setPassword(e.target.value)
    }

    const onChangeFullName = (e) => {
      setFullname(e.target.value)
    }

    const onChangeGender = (e) => {
      setSelectedGender(e.target.value)
    }

    const onChangeAddress = (e) => {
      setAddress(e.target.value)
    }

    const onSubmitRegister = async (e) => {
      e.preventDefault()
      try {
          let data = {
              username,
              password,
              fullname,
              address,
              gender:selectedGender,
              bird_date : birtDate
          }
          console.log(data)
          let result = await axios.post(backend_url+"/user",data)
          console.log(result)
          history.push('/login')
      } catch (error) {
          console.log(error)
      }
    }

    const onChangeBirthDate = (e) => {
      setBirthDate(e.target.value)
    }

    return(
    <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto">
            <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div class="text-center">
                    <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Register</h1>
                    <p class="text-gray-400 dark:text-gray-400">Fill up the form below.</p>
                </div>
                <div class="m-7">
                    <form onSubmit={onSubmitRegister} id="form">
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
                            <input type="text" value={username} onChange={onChangeName} name="name" id="name" placeholder="John" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div class="mb-6">
                            <label for="pasword" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <input type="password" value={password} onChange={onChangePass} name="email" id="email" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                            <input type="text" value={fullname} name="name" onChange={onChangeFullName} id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div class="mb-6">
                            <label for="address" class="text-sm text-gray-600 dark:text-gray-400">Birth Date</label>
                            <input type="date" value={birtDate} onChange={onChangeBirthDate} name="birth_date" id="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div class="mb-6">
                            <label for="address" class="text-sm text-gray-600 dark:text-gray-400">Gender</label>
                            <select value={selectedGender} onChange={onChangeGender}>
                                <option value={true}> Laki Laki</option>
                                <option value={false}> Perempuan</option>
                            </select>
                            </div>
                        <div class="mb-6">
                            <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Address</label>
                            <textarea value={address} onChange={onChangeAddress} rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                        </div>
                        <div class="mb-6">
                            <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                        </div>
                        <p class="text-base text-center text-gray-400" id="result">
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export {AddUser}