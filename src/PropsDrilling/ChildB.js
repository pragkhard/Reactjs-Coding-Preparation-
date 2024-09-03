import ChildC from "./ChildC";

function ChildB({name}) {
    return (
        <>
            <h1>ChildB</h1>
            <ChildC name={name} />
        </>
    );
}

export default ChildB;