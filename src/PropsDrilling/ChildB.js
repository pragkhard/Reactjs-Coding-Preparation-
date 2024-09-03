import ChildC from "./ChildC";

function ChildB() {
    return (
        <div className="ChildB">
            <h1>ChildB</h1>
            <ChildC />
        </div>
    );
}

export default ChildB;