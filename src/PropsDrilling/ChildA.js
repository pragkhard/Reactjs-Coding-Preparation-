import ChildB from "./ChildB";

function ChildA({name}) {
    return (
        <>
            <h1>ChildA</h1>
            <ChildB name={name} />
        </>
    );
}

export default ChildA;