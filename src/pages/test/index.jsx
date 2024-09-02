import { useState } from 'react';
import MediaSetup from './media';
import CBTTest from './cbt';
// import { useDispatch } from 'react-redux';
// import { setTestStatus } from '../../lib/slice/authSlice';

const Test = () => {
    const [isSetupComplete, setIsSetupComplete] = useState(false);
    // const dispatch = useDispatch();


    const handleFinish = () => {
        // dispatch(setTestStatus(true));
        
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
