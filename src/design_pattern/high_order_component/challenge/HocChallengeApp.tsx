import {withAccessControl} from "./utils/withAccessControl.tsx";
import MyComponent from "./components/MyComponent.tsx";
import NotAuthorized from "./components/NotAuthorized.tsx";

const MyComponentWithAccessControl = withAccessControl(MyComponent)

const HocChallengeApp = () => {
    return (
        <div>
            <MyComponentWithAccessControl
                roles={["admin", "manager"]}
                // roles={["user", "guest"]}
                fallbackComponent={NotAuthorized}
                message={"Hello, Admin"}
                injectedProps={{
                    userName: "Lauren",
                    userPermissions: ['index', 'create', 'show', 'update', 'delete']
                }}
            />
        </div>
    )
}
export default HocChallengeApp
