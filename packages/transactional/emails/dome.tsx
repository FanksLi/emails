import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

interface VercelInviteUserEmailProps {
	invitedByUsername?: string;
}

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";

export const VercelInviteUserEmail = ({
	invitedByUsername = "bukinoshita",
}: VercelInviteUserEmailProps) => {
	const previewText = `Join ${invitedByUsername} on Vercel`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[375px]">
						<Section className="mt-[32px]">
							<Img
								src={`${baseUrl}/static/vercel-logo.png`}
								width="40"
								height="37"
								alt="Vercel"
								className="my-0 mx-auto"
							/>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default VercelInviteUserEmail;
