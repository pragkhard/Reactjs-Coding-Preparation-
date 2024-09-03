import ChildB from "./ChildB";

function ChildA() {
    return (
        <div className="ChildA">
            <h1>ChildA</h1>
           <ChildB/>
        </div>
    );
}

export default ChildA;