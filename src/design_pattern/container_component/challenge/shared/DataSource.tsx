import React, {useEffect, useState} from "react";

interface DataSourceProps {
    getDataFunc: () => Promise<any>,
    resourceName: string,
    children: React.ReactNode,
}

const DataSource = ({
    getDataFunc,
    resourceName,
    children,
}: DataSourceProps) => {
    const [state, setState] = useState<any>(null)
    const [error, setError] = useState<string|null>(null)
    
    useEffect(() => {
        (async () => {
            try {
                if (getDataFunc) {
                    const data = await getDataFunc();
                    setState(data)
                }
            }catch (err) {
                if (err instanceof Error) {
                    setError(err.message);        // ⬅️ error asli
                } else {
                    setError(String(err));        // ⬅️ fallback
                }
            }
        })()
    }, [getDataFunc]);
    
    return (
        <>
            {error ? (
                <p className="text-red-600">{error}</p>
            ): (
                React.Children.map(children, (child: React.ReactNode) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            [resourceName]: state,
                        })
                    }
                    
                    return child;
                })
            )}
        </>
    )
}
export default DataSource
