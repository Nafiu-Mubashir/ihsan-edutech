import axiosInterceptor from "../../../api";

export const getCoursesAction = () => async () => {
    try {
        const response = await axiosInterceptor.get('quizzes/');
        console.log(response);

        return response;
    } catch (error) {
        console.log(error);
    }
};