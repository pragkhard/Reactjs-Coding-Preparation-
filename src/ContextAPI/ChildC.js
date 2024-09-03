import { data } from './ParentB'

function ChildC() {
    return (
        <>
            <h3>ChildC</h3>
            <data.Consumer>
                {
                    (name) => {
                        return (
                            <h3>This is consumer {name}</h3>
                        )
                    }
                }
            </data.Consumer>
        </>
    );
}

export default ChildC;