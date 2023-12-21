import { Button } from '@ui/Button';
import { Container } from '@ui/Container';
import { Text } from '@ui/Text';

export function Home() {
	return (
		<Container className="dark:bg-red-600">
			<Text typography="large/bold" align="center" className="my-8">
				Developing a design system with tailwindcss and cva
			</Text>

			<Button fullWidth intent="secondary">
				Click Here
			</Button>
		</Container>
	);
}
