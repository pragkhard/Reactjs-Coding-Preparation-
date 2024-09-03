import ChildA from "./ChildA";

function ParentA() {
    const name = "Pragati"
    return (
        <>
            <h1>PropsDrilling - </h1>
            <h3>Parent</h3>
            <ChildA name={name} />
        </>
    );
}

export default ParentA;
