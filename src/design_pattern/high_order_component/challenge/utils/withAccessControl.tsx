import type {AccessControlProps, InjectedProps} from "../types/access-control.types.ts";
import React from "react";

const currentUserRole = "admin";

export const withAccessControl = <P extends object>(
    WrappedComponent: React.ComponentType<P & InjectedProps>,
) => {
    return (props: P & AccessControlProps) => {
        const {
            roles,
            fallbackComponent: Fallback,
            injectedProps = {},
            ...restProps
        } = props;
        
        const hasAccess = roles.includes(currentUserRole)
        if (!hasAccess) {
            return <Fallback />
        }
        
        const mergedProps = {
            ...(restProps as P),
            ...injectedProps
        }
        
        return <WrappedComponent {...(mergedProps as P & InjectedProps)} />
    }
}