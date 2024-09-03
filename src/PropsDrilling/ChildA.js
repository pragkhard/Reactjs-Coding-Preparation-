import ChildB from "./ChildB";

function ChildA({ name }) {
    return (
        <>
            <h3>ChildA</h3>
            <ChildB name={name} />
        </>
    );
}

export default ChildA;