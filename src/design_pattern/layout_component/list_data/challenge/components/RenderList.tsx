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
        <div className="product-list">
            {data.map((item, index) => {
                return <ItemComponent key={index} {...{[resourceName]: item}} />
            })}
        </div>
    )
}
export default RenderList
