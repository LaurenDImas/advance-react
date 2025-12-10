import Card from "./components/Card.tsx";

const CompoundExampleApp = () => {
	return (
		<>
			<Card>
				<Card.Title>Something Cool</Card.Title>
				<Card.Content>Amazing Stuff</Card.Content>
				<Card.Footer>Footer</Card.Footer>
			</Card>
			<Card>
				<Card.Title>Something Cool</Card.Title>
				<Card.Content>Amazing Stuff</Card.Content>
				<Card.Footer>Footer</Card.Footer>
			</Card>
		</>
	)
}
export default CompoundExampleApp
