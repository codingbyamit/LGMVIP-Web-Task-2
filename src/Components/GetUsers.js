import React, { useState } from "react";
function GetUsers() {
    const api = "https://reqres.in/api/users";
    const [userData, setUserData] = useState([]);

    async function loadData() {
        const data = await fetch(api);
        const resdata = await data.json();
        setUserData(resdata.data);
    }
    loadData();
    // useEffect(() => {
    //     axios.get(api).then((users) => {
    //         const randomUsers = users.data;
    //         setUserData(randomUsers.data);
    //     });
    // }, []);
    return (
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
    );
}

export default GetUsers;
