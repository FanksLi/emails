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

const baseUrl = 'https://cloud.zno.com.d';

export const VercelInviteUserEmail = ({
	invitedByUsername = "bukinoshita",
}: VercelInviteUserEmailProps) => {
	return (
		<Html>
			<Head>
				<style>
					{`* {
						font-family: sans-serif, Verdana, -apple-system, Arial,
					BlinkMacSystemFont, 'PingFang SC', 苹方-简, 'Microsoft YaHei',
					微软雅黑;
					}`}
				</style>
			</Head>
			<Tailwind>
				<Section className="bg-white my-auto mx-auto max-w-[750px] w-[740px] font-sans" align="center">
					<Container style={{ fontFamily: 'Gotham, sans-serif', maxWidth: '100%' }}>
						<Section className="h-[727px]" style={{ backgroundImage: `url(${baseUrl}/clientassets/mailMatrials/ZI/531/01.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
						</Section>
						<div style={{ backgroundImage: `url(${baseUrl}/clientassets/mailMatrials/ZI/531/02.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
							<Section>
								<Row>
									<Column colSpan={24} className="font-normal text-[26px] text-[#1D596A] leading-[38px] px-[32px]">
										Thank you for choosing Zno Instant! Getting started is easy—just follow these two steps to set up your event and start sharing photos in real time.
									</Column>
								</Row>
								<Row className="mt-[68px]">
									<Column colSpan={24} className="font-bold text-[30px] text-white leading-[27px] text-center">
										Two Quick Start Videos
									</Column>
								</Row>
							</Section>
							<Section className="mt-[94px] w-[556px] mx-auto">
								<Row>
									<Column className="text-[26px] text-[#1D596A] leading-[40px] font-black whitespace-nowrap">
										<span className="text-[22px] mr-[10px] leading-[26px]">✅</span>Step One: Connect Camera To Phone
									</Column>
								</Row>
								<Row className="mt-[16px]">
									<Column className="font-normal text-[26px] text-[#1D596A] leading-[40px] pl-[6px]">
										Click to watch how to connect your camera to the Zno Instant app
									</Column>

								</Row>
								<Row className="w-[532px] h-[300px] mt-[32px]">
									<Column>
										<Link className="block h-full w-full" href="https://youtu.be/PDdnBZyThz4"></Link>
									</Column>
								</Row>
							</Section>
							<Section className="mt-[103px] w-[521px] mx-auto">
								<Row>
									<Column className="text-[26px] text-[#1D596A] leading-[40px] font-black whitespace-nowrap">
										<span className="text-[22px] mr-[10px] leading-[26px]">✅</span>Step Two: Create Instant Gallery
									</Column>

								</Row>
								<Row className="mt-[16px]">
									<Column className="font-normal text-[28px] text-[#1D596A] leading-[40px] pl-[6px]">
										Click to watch how to create an Instant Gallery on desktop & customize features
									</Column>

								</Row>
								<Row className="w-[532px] h-[300px] mt-[54px]">
									<Column>
										<Link className="block h-full w-full" href="https://youtu.be/PDdnBZyThz4"></Link>
									</Column>
								</Row>
							</Section>
							<Section className="mt-[140px]">
								<Row>
									<Column className="font-normal text-[26px] text-[#1D596A] leading-[40px] px-[28px] pb-[48px]">
										Once you've completed these steps, you're all set for your first event! With Zno Instant, delivering and sharing photos in real time has never been easier!
									</Column>
								</Row>
							</Section>

						</div>
						<Section className="h-[395px]" style={{ backgroundImage: `url(${baseUrl}/clientassets/mailMatrials/ZI/531/03.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
							<Row className="mt-[40px]">
								<Column className="font-[500] text-[26px] text-[#1D596A] leading-[56px] text-center">
									If you have any questions, we're here to help!
								</Column>
							</Row>
							<Row className="w-[486px] h-[81px] bg-[#0ABAB5] text-[30px] text-white leading-[41px] rounded-lg mt-[34px]">
								<Column className="text-center">
									<Link href="https://calendly.com/d/cs9h-8c5-96w/zno-instant-demo" className="block text-white">
										Request 1-on-1 Support
									</Link>
								</Column>
							</Row>
							<Row className="w-[486px] h-[81px] bg-[#0ABAB5] text-[30px] text-white leading-[41px] rounded-lg mt-[34px] ">
								<Column className="text-center">
									<Link href="https://help.zno.com/hc/en-us/categories/23885511888535-Zno-Instant" className="block text-white">
										View FAQs
									</Link>
								</Column>
							</Row>


						</Section>
					</Container>
				</Section>
			</Tailwind>
		</Html>
	);
};

export default VercelInviteUserEmail;
