import { createContext } from "react";
import ChildC from "../PropsDrilling/ChildC";


const data = createContext();
function ParentB() {
    const name = "Pragati"
    return (
        <>
            <h1>Context API - </h1>

            <h3>Parent</h3>
            <data.Provider value={name}>
                <ChildC />
            </data.Provider>

        </>
    );
}

export default ParentB;
export { data };
