interface RenderListProps {
    data: any[],
    resourceName: string,
    dataToRender: any,
}

const RenderList = ({
    data,
    resourceName,
    dataToRender: ItemComponent,
}: RenderListProps) => {
    return (
        <div>
            {data.map((item, index) => (
                <ItemComponent key={index} {...{[resourceName]: item}} />
            ))}
        </div>
    )
}
export default RenderList
