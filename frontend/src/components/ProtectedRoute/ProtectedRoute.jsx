import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const token = useSelector(state => state.MEMBER.userToken);

    if (!token) {
        return <Navigate to="/home-page" />
    }

    return element;
}

export default ProtectedRoute;