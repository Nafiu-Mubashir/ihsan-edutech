import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import Button from "../../../components/button";
import Input from "../../../components/input";
import { CaretLeft } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { emailVerificationAction } from "../../../lib/action/authAction";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  pin1: Yup.string()
    .length(1, 'Must be exactly 1 character')
    .required('Required'),
  pin2: Yup.string()
    .length(1, 'Must be exactly 1 character')
    .required('Required'),
  pin3: Yup.string()
    .length(1, 'Must be exactly 1 character')
    .required('Required'),
  pin4: Yup.string()
    .length(1, 'Must be exactly 1 character')
    .required('Required'),
});

const Verification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  return (
    <div className="flex justify-center items-center h-screen auth bg-repeat bg-center bg-cover">
      <div className="grid grid-cols-2 w-[70%] h-[85vh] m-auto">
        <div className="bg-white rounded-l-xl login bg-repeat bg-center bg-cover">
          {/* <img src={loginImage} alt="" /> */}
        </div>
        <div className="bg-glass rounded-r-xl p-10">
          <Formik
            initialValues={{
              pin1: '',
              pin2: '',
              pin3: '',
              pin4: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              const confirmation_code = `${values.pin1}${values.pin2}${values.pin3}${values.pin4}`;
              console.log(confirmation_code);
              const res = await dispatch(emailVerificationAction({ confirmation_code })); // Dispatch verification action
              console.log(res);

              if(res?.status === 200) {
                  navigate('/test/user-test');
              }
            }}
          >
            {({ errors, getFieldProps, isSubmitting }) => (
              <Form className="space-y-6 text-white">
                <div className="flex">
                  <Link to={'/auth/registration'}>
                    <CaretLeft size={26} color="white" className="mt-4" />
                  </Link>
                  <div className="text-center">
                    <h2 className="text-[2.5rem] font-bold">Email Verification</h2>
                    <p>
                      We have sent a code to your email for verification. Please note that the code will expire after <span className="text-[#D13900] font-bold">(10:00)</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <Input variant="pin" id="pin1" name="pin1" errors={errors} {...getFieldProps('pin1')} />
                  <Input variant="pin" id="pin2" name="pin2" errors={errors} {...getFieldProps('pin2')} />
                  <Input variant="pin" id="pin3" name="pin3" errors={errors} {...getFieldProps('pin3')} />
                  <Input variant="pin" id="pin4" name="pin4" errors={errors} {...getFieldProps('pin4')} />
                </div>
                <p className="text-white text-sm text-center underline cursor-pointer">
                  Resend code
                </p>
                <Button type={'submit'} value={isSubmitting ? "submitting...." : 'Verify'} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Verification;
