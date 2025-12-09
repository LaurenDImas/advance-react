import React, {Children, cloneElement, isValidElement, type ReactNode, useEffect, useState} from "react";

interface DataSourceProps {
    getDataFunc?: () => Promise<any>,
    resourceName: string,
    children?: React.ReactNode,
}

const DataSource = ({
    getDataFunc,
    resourceName,
    children,
}: DataSourceProps) => {
    const [state, setState] = useState<any>(null)
    
    useEffect(() => {
        (async () => {
            if (getDataFunc) {
                const data = await getDataFunc();
                setState(data)
            }
        })()
    }, [getDataFunc]);
    
    return (
        <>
            
            {Children.map(children, (child: ReactNode) => {
                if(isValidElement(child)){
                    return cloneElement(child, {
                        [resourceName]: state
                    });
                }
                return child;
            })}
        </>
    )
}
export default DataSource
