import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <div className="page-wrapper">
                <div className="header">
                    <div className="card">
                        <div className="balance">#50,000</div>
                        <div className="user-account">3156478951</div>
                        <div className="user-name">John Doe</div>
                    </div>
                </div>

                <div className="action-list">
                   <div className="action orange"> <Link to="../make-payment">Send Money</Link></div>
                    <div className="action green"> <Link to="../home"> Recieve Money</Link></div>
                    <div className="action blue"> <Link to="../home"> Airtime</Link></div>
                    <div className="action pink"> <Link to="../home"> Bill Payment</Link></div>
                </div>

            </div>
        </>
    )
}

export default Home;