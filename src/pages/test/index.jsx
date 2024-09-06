import { useState } from 'react';
import MediaSetup from './media';
import CBTTest from './cbt';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { completeTestAction } from '../../lib/action/authAction';

const Test = () => {
    const [isSetupComplete, setIsSetupComplete] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)


    const handleFinish = async () => {
        const res = await dispatch(completeTestAction(user?.user_id));
        if (res?.status === 200) {            
            navigate('/')
        }

    };

    return (
        <div className="dash h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center">
            {!isSetupComplete ? (
                <MediaSetup onSetupComplete={() => setIsSetupComplete(true)} />
            ) : (
                <CBTTest onFinish={handleFinish} />
            )}
        </div>
    );
};

export default Test;
