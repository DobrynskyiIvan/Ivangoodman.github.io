import React from "react";

export default function Redux() {
    return {
        connect: () => BaseComponent => props => (
            <BaseComponent
                {...props}
                dispatch={({ type }) => console.log(type, " dispatched")}
            />
        )
    };
}
