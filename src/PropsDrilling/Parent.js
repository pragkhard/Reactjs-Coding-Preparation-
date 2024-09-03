import ChildA from "./ChildA";

function Parent() {
    const name = "Pragati"
    return (
        <>
            <h1>Parent</h1>
            <ChildA name={name} />
        </>
    );
}

export default Parent;
