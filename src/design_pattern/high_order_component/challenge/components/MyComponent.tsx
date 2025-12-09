import type {WrappedComponentProps} from "../types/access-control.types.ts";

const MyComponent = ({
     message,
     userName,
     userPermissions
}: WrappedComponentProps) => {
    return (
        <div>
            <h1>{message}</h1>
            <p>Welcome, {userName}</p>
            <p>Your permission: {userPermissions?.join(", ")}</p>
        </div>
    )
}
export default MyComponent
