import React from "react";

export default function withPermission(Component, status) {
    return function WrappedWthPermission(props) {
        const user = JSON.parse(localStorage.getItem("user"));

        return user && user.status !== "admin" && status === "admin" ? null : (
            <Component />
        );
    };
}
