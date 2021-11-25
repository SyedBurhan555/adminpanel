import React, { useState , useEffect} from "react";

const Home = () => {
    const [username,setUsername] = useState("")
    const [show,setshow] = useState(false)
    
    const UserHome = async () => {
        try {
          const response = await fetch("/getdata", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          console.log(data);
          setshow(true)
          setUsername({...username, name: data.name})

        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        UserHome();
      }, []);
    return ( 
        <>
        <div className="container MyMargin">
            <h4 className="text-center text-primary">Welcome</h4>
            <h2 className="text-center display-3 font-weight-bold text-uppercase"> {username.name}</h2>
            <h4 className="text-center display-3 font-weight-bold">{ show ? "Happy To See Back":"We Are The MERN Developer"}</h4>
        </div>
        </>
     );
}
 
export default Home;