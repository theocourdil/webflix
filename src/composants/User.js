import {Link, useMatch, useParams } from "react-router-dom";

function User() {
    const params = useParams();
    const match = useMatch("/Users/2");
    return (
    <div>   
        {params.id}
        <Link to="/">Back to Home</Link>
    </div>
    )
        
} 

export default User;