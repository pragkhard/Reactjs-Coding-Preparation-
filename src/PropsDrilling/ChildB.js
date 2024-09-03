import ChildC from "./ChildC";

function ChildB() {
    return (
        <div className="ParentC">
            <h1>ChildB</h1>
            <ChildC />
        </div>
    );
}

export default ChildB;