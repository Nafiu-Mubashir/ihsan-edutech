import { Link } from "react-router-dom";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Firstname is required'),
  lastname: Yup.string().required('Lastname is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

const Registration = () => {
  return (
    <div className=" bg-yellow-500 flex justify-center items-center h-screen auth bg-repeat bg-center bg-cover">
      <div className="grid grid-cols-2 w-[70%] h-[85vh] m-auto">
        <div className="bg-white rounded-l-xl reg bg-repeat bg-center bg-cover">
          {/* <img src={loginImage} alt="" /> */}
        </div>
        <div className="backdrop-blur-sm bg-black/40 rounded-r-xl p-10">
          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              sex: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('Form Submitted:', values);
            }}
          >
            {({ errors, getFieldProps }) => (
              <Form className="space-y-4 text-white">
                <div>
                  <h2 className="text-[2.5rem] font-bold">Create Account</h2>
                  <p>Enter your personal details to create an account</p>
                </div>
              <div className="grid grid-cols-2 gap-2">
                  {/* Firstname Field */}
                  <Input
                    label="Firstname"
                    type="firstname"
                    name="firstname"
                    placeholder="Enter your firstname"
                    errors={errors}
                    {...getFieldProps('firstname')} // Use Formik's getFieldProps
                  />

                  {/* Lastname Field */}
                  <Input
                    label="Lastname"
                    type="lastname"
                    name="lastname"
                    placeholder="Enter your lastname"
                    errors={errors}
                    {...getFieldProps('lastname')} // Use Formik's getFieldProps
                  />
              </div>

                <div className="">
                 <div className="flex flex-col ">
                    <label htmlFor="sex">Sex</label>
                    {/* <label htmlFor="sex" className="text-sm">select your sex</label> */}
                 </div>
                  {/* Gender Field */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="appearance-none w-full backdrop-blur-sm  bg-white/10 shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent placeholder:text-white border-gray-400 flex items-center gap-1">
                      <input type="radio" name="sex" {...getFieldProps('sex')} value={'male'} /> <span className="text-sm">Male</span>
                    </div>
                    <div className="appearance-none w-full backdrop-blur-sm  bg-white/10 shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent placeholder:text-white border-gray-400 flex items-center gap-1">
                      <input type="radio" name="sex" {...getFieldProps('sex')} value={'female'} /> <span className="text-sm">Female</span>
                    </div>
                 </div>
                </div>
               <div className="">
                  {/* Email Field */}
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    errors={errors}
                    {...getFieldProps('email')} // Use Formik's getFieldProps
                  />

                  {/* Password Field */}
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    errors={errors}
                    {...getFieldProps('password')} // Use Formik's getFieldProps
                  />
               </div>

                <Button type={'submit'} value={'Login'} />
              </Form>
            )}
          </Formik>
          <p className="text-white text-center">
            Already have an account; <Link to='/auth/login' className="text-[#D13900] underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Registration