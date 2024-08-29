import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const MediaSetup = ({ onSetupComplete }) => {
    const [videoEnabled, setVideoEnabled] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const videoRef = useRef(null);

    const enableCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setVideoEnabled(true);
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                toast.success('Camera is enabled.')
            }
        } catch (err) {
            console.error('Error enabling camera:', err);
        }
    };

    const enableMicrophone = async () => {
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            setAudioEnabled(true);
            if (audioEnabled) {
                toast.success('Microphone is enabled.<')
            }
        } catch (err) {
            console.error('Error enabling microphone:', err);
        }
    };

    const handleContinue = () => {
        if (videoEnabled && audioEnabled) {
            onSetupComplete();
        } else {
            alert('Please enable both camera and microphone to continue.');
        }
    };

    return (
        <div className='w-[40%] bg-glass mx-auto text-white border mt-[50px p-10 rounded-lg'>
            <div className='border rounded-lg space-y-4 p-5 bg-ihsan'>
                <h2 className='text-center'>Setup your Camera and Microphone</h2>
                {!videoEnabled && (
                    <button className='appearance-none block w-1/2 blcok mx-auto cursor-pointer bg-gradient-to-t from-[#F84401] to-[#FE7A48] border-[#D13900] shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none' onClick={enableCamera}>Enable Camera</button>
                )}
                {videoEnabled && (
                    <div>
                        <video ref={videoRef} autoPlay playsInline width="300" className='block mx-auto'></video>
                        {/* <p>Camera is enabled.</p> */}
                    </div>
                )}
                {videoEnabled && !audioEnabled && (
                    <button className='appearance-none block w-1/2 blcok mx-auto cursor-pointer bg-gradient-to-t from-[#F84401] to-[#FE7A48] border-[#D13900] shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none' onClick={enableMicrophone}>Enable Microphone</button>
                )}
                {
                    videoEnabled && audioEnabled && (
                        <button className='appearance-none block w-1/2 blcok mx-auto cursor-pointer bg-gradient-to-t from-[#F84401] to-[#FE7A48] border-[#D13900] shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none' onClick={handleContinue}>Continue to Test</button>
                    )
                }
            </div>
        </div>
    );
};

MediaSetup.propTypes = {
    onSetupComplete: PropTypes.func.isRequired,
};

export default MediaSetup;
