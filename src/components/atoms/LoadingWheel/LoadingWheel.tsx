import './style.css';

const LoadingWheel = () => {
    return(
        <div className="loading-wheel">
            <div className="loading-wheel__section">
                <div className="loading-wheel__dot"></div>
                <div className="loading-wheel__dot"></div>
            </div>
            <div className="loading-wheel__section">
                <div className="loading-wheel__dot"></div>
                <div className="loading-wheel__dot"></div>
            </div>
        </div>
    )
};

export default LoadingWheel;