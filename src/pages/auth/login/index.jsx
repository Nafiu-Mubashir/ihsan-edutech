import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { loginAction } from "../../../lib/action/authAction";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="flex justify-center items-center h-screen auth bg-repeat bg-center bg-cover">
      <div className="grid grid-rows-1 md:grid-cols-2 md:w-[70%] h-[85vh] m-auto p-3">
        <div className="bg-white rounded-l-xl login bg-repeat bg-center bg-cover hidden md:block">
          {/* <img src={loginImage} alt="" /> */}
        </div>
        <div className="bg-glass rounded-r-xl p-5 md:p-10">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              console.log(values)
              const res = await dispatch(loginAction({ email: values.email, password: values.password })); // Dispatch login action
              console.log(res)

              if (isAuthenticated) {
                navigate('/test/user-test');
              }
            }}
          >
            {({ errors, getFieldProps, isSubmitting }) => (
              <Form className="space-y-6 text-white">
                <div>
                  <h2 className="text-[2.5rem] font-bold">Login</h2>
                  <p>Enter your email and password to login to your Classroom.</p>
                </div>
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

                <Button type={'submit'} value={isSubmitting ? "submitting...." : 'Login'} />
              </Form>
            )}
          </Formik>
          <p className="text-white text-center">
            I do not have an account; <Link to='/auth/registration' className="text-[#D13900] underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
