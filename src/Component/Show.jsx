import React, { useContext } from 'react';
import UserContext2 from '../Context2/Usercontext2';

function Show() {
    const { store, setStore, setData } = useContext(UserContext2);

    const Delete = (index) => {
        console.log("delete");
        const copy = [...store];
        copy.splice(index, 1);
        setStore(copy);
        setData({});
    };

    const update = (i) => {
        console.log("update");
        const copy = [...store];
        
        // Ensure index is valid
        if (copy[i]) {
            // Update the specific item at index `i`
            copy[i] = { ...copy[i], name: "" }; 
            setStore(copy);
        }

        Delete(i); 
    };

    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {store.map((ele, i) => (
                        <tr key={i}>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>
                                <button onClick={() => Delete(i)}>Delete</button>
                                <button onClick={() => update(i)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Show;
