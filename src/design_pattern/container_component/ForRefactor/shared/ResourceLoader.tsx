import {Children, cloneElement, isValidElement, type ReactNode, useEffect, useState} from "react";
import axios from "axios";

interface ResourceLoaderProps {
    resourceUrl: string;
    resourceName: string;
    children: ReactNode;
}

const ResourceLoader = ({
    resourceUrl,
    resourceName,
    children,
}: ResourceLoaderProps) => {
    const [state, setState] = useState<any>(null)
    
    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceUrl}`);
            
            setState(response.data);
        })()
    }, [resourceUrl]);
    
    return (
        <>
            {Children.map(children, (child: ReactNode) => {
                if(isValidElement(child)){
                    return cloneElement(child, {
                        [resourceName]: state
                    });
                }
            })}
        </>
    )
}
export default ResourceLoader
