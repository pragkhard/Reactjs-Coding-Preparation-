import ChildB from "./ChildB";

function ChildA() {
    return (
        <div className="ParentB">
            <h1>ChildA</h1>
           <ChildB/>
        </div>
    );
}

export default ChildA;