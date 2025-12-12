import { RiseLoader } from "react-spinners";
import "../assets/Styles.css"

function GlobalSpinner({ loading }) {
    if (!loading) return null;

    return (
        <div className="spinner-overlay">
            <RiseLoader
                size={20}
                color={"#4000ffff"}
                loading={loading}
            />
        </div>
    );
}

export default GlobalSpinner;