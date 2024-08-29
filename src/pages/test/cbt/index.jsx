import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const questions = [
    {
        question: "What is the first pillar of Islam?",
        options: ["Salat", "Zakat", "Shahada", "Hajj"],
        answer: "Shahada",
    },
    {
        question: "How many times do Muslims pray each day?",
        options: ["Three", "Five", "Seven", "Two"],
        answer: "Five",
    },
    {
        question: "What is the holy book of Islam?",
        options: ["Bible", "Torah", "Quran", "Vedas"],
        answer: "Quran",
    },
    {
        question: "Who is the last prophet in Islam?",
        options: ["Prophet Isa", "Prophet Musa", "Prophet Ibrahim", "Prophet Muhammad"],
        answer: "Prophet Muhammad",
    },
    {
        question: "What is the name of the fasting month in Islam?",
        options: ["Hajj", "Ramadan", "Eid", "Muharram"],
        answer: "Ramadan",
    },
    {
        question: "Which city is considered the holiest in Islam?",
        options: ["Medina", "Jerusalem", "Mecca", "Baghdad"],
        answer: "Mecca",
    },
    {
        question: "How many chapters are there in the Quran?",
        options: ["99", "30", "114", "200"],
        answer: "114",
    },
    {
        question: "What is the second pillar of Islam?",
        options: ["Salat", "Zakat", "Shahada", "Hajj"],
        answer: "Salat",
    },
    {
        question: "What does 'Zakat' mean in Islam?",
        options: ["Charity", "Prayer", "Pilgrimage", "Fasting"],
        answer: "Charity",
    },
    {
        question: "What is the Islamic declaration of faith?",
        options: ["La ilaha illallah", "Subhanallah", "Alhamdulillah", "Bismillah"],
        answer: "La ilaha illallah",
    },
];

const CBTTest = ({ onFinish }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
    

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        if (timeLeft === 0) {
            clearInterval(timer);
            handleFinishTest();
        }

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleAnswerOptionClick = (option) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestion] = option;
        setSelectedAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const allQuestionsAnswered = selectedAnswers.every(answer => answer !== null);

    const calculateScore = () => {
        let score = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === questions[index].answer) {
                score += 1;
            }
        });
        setScore(score);
    };

    const handleFinishTest = () => {
        calculateScore();
        setShowScore(true);
        
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    // Determine the color of the progress bar based on the current question index
    const getProgressColor = () => {
        if (currentQuestion + 1 < 5) {
            return '#D42620';
        } else if (currentQuestion + 1 < 8) {
            return '#F5B546';
        } else {
            return '#0F973D';
        }
    };

    return (
        <div className='w-[50%] bg-glass mx-auto text-white border mt-[50px p-10 rounded-lg'>
            <div className='border rounded-lg space-y-4 p-5 bg-ihsan'>
                <h1 className='font-bold text-center'>IHSAN TEST</h1>
                {showScore ? (
                    <div className="text-center space-y-4">
                        <p>You scored {score} out of {questions.length}</p>
                        {/* <button onClick={() => setShowScore(false)}>Show Score</button> */}
                        <button onClick={onFinish} className='appearance-none block w-1/2 blcok mx-auto cursor-pointer bg-gradient-to-t from-[#F84401] to-[#FE7A48] border-[#D13900] shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none'>Proceed to Dashboard</button>
                    </div>
                ) : (
                    <div className='space-y-3'>
                        <div className='w-full border border-gray-300 rounded-full'>
                            <div className="rounded-full" style={{ width: `${progress}%`, height: '10px', backgroundColor: getProgressColor() }}></div>
                        </div>
                        <div className="flex justify-between items-center full">
                            <h2>Alloted Time: 15 min</h2>
                            <h2>Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</h2>
                        </div>
                        <div className="flex justify-center space-y-3">
                            <div>
                                <div className="text-center">
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className="question-text">{questions[currentQuestion].question}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {questions[currentQuestion].options.map((option, index) => (
                                <div key={index} className="appearance-none w-full backdrop-blur-sm  bg-white/10 shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent placeholder:text-white border-gray-400 flex items-center gap-1">
                                    <input
                                        id='default-checkbox'
                                        type="checkbox"
                                        className=' indeterminate:bg-gray-300 cursor-pointer'
                                        checked={selectedAnswers[currentQuestion] === option}
                                        onChange={() => handleAnswerOptionClick(option)}
                                    />
                                    <label htmlFor='default-checkbox'>{option}</label>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between gap-5">
                            <button className='appearance-none block w-full cursor-pointer border-gradient-to-t from-[#F84401] to-[#FE7A48] border-[#D13900] shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none' onClick={handlePrevious} disabled={currentQuestion === 0}>
                                Previous
                            </button>

                            <button className='appearance-none block w-full cursor-pointer bg-gradient-to-t from-[#F84401] to-[#FE7A48] border-[#D13900] shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none' onClick={allQuestionsAnswered ? handleFinishTest : handleNext}>
                                {allQuestionsAnswered ? 'Finish Test' : 'Next'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

CBTTest.propTypes = {
    onFinish: PropTypes.func.isRequired,
};

export default CBTTest;
