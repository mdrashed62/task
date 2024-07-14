
import ChatWindow from "../Components/ChatWindow";
import Sidebar from "../Components/Sidebar";


const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="col-span-1">
            <Sidebar></Sidebar>
            </div>
           <div className="col-span-3">
           <ChatWindow></ChatWindow>
           </div>
            </div>
        </div>
    );
};

export default Home;