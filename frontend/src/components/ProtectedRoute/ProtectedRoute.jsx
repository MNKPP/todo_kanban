import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addToken } from "../../store/member/member-slice.js";

const ProtectedRoute = ({ element }) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.MEMBER.userToken);

    useEffect(() => {
        const userToken = localStorage.getItem('token');
        if (userToken && !token) {
            dispatch(addToken(userToken));
        }
    }, [dispatch]);

    if (!token && !localStorage.getItem('token')) {
        return <Navigate to="/home-page" replace />;
    }

    return element;
}

export default ProtectedRoute;