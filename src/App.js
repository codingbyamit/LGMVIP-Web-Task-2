import { useState } from "react";
import "./App.css";

function App() {
    const api = "https://reqres.in/api/users";
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadData() {
        setLoading(true);
        const data = await fetch(api);
        const resdata = await data.json();
        setUserData(resdata.data);
        setLoading(false);
    }
    return (
        <>
            <div className="App">
                <div id="navbar">
                    <nav>
                        <h2>Random Users</h2>
                        <button onClick={loadData}>Get Users</button>
                    </nav>
                </div>
                {loading ? (
                    <div id="loading"></div>
                ) : (
                    <div id="getUsers">
                        {userData.map((item) => (
                            <div id="userData" key={item.id}>
                                <div id="user">
                                    <div id="userImg">
                                        <img src={item.avatar} alt="" />
                                    </div>
                                    <div id="userName">
                                        <h3>{`${item.first_name} ${item.last_name}`}</h3>
                                    </div>
                                    <div id="userEmail">
                                        <h4>{item.email}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
