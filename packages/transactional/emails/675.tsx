import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Text,
	Hr,
	Html,
	Img,
	Link,
	Row,
	Section,
	Tailwind,
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
				<Body className="bg-white">
					<Container className="my-auto mx-auto max-w-[750px] w-[750px] font-sans" style={{ fontFamily: 'Gotham, sans-serif', maxWidth: '100%' }} align="center">
						<Section style={{
							fontSize: 0,
							lineHeight: 0,
						}}>
							Explore the tools available in your account.
						</Section>
						{/* Header Section */}
						<Section className="px-10">
							<Section>
								<Img
									src={`${baseUrl}/clientassets/cloud/email/base/logo.png`}
									alt="Zno Cloud Logo"
									width={230}
									style={{ display: 'block', margin: 'auto', marginTop: '32px' }}
								/>
							</Section>

							{/* Photo Wall Section */}
							<Section style={{ backgroundImage: `url(${baseUrl}/clientassets/cloud/email/675/1.jpg)` }} className="mt-[24px] w-full h-[351px] mx-auto bg-contain bg-no-repeat">
							</Section>
							{/* Welcome Message */}
							<Section align="center" className="pb-[73px]">
								<Text className="m-0 p-0 font-medium text-[40px] text-[#222222] leading-[50px] text-center">Welcome to your all-in-one photography platform.</Text>
								<Text className="m-0 p-0 font-normal text-[26px] text-[#232323] leading-[42px] mt-[32px] text-center">
									Level up the way you share, showcase, and manage your work with tools made for the modern photographer. Choose a Zno tool below to get started.
								</Text>
							</Section>
							<Hr />
						</Section>


						{/* Features Section */}
						<Section>
							<Row style={{ backgroundImage: `url(${baseUrl}/clientassets/cloud/email/675/2.jpg)` }} className="w-full h-[310px] mx-auto bg-contain bg-no-repeat mt-[76px]">
								<Column className="align-top">
									<Section className="w-[350px] text-center" align="left">
										<Text className="m-0 p-0 w-[158px] h-[42px] bg-[#EFEFEF] rounded-[17px] leading-[42px] mx-auto font-medium text-[21px] text-[#222222]">Zno Gallery</Text>
										<Text className="m-0 p-0 mt-[18px] font-medium text-[28px] text-[#222222] leading-[42px]">Elevate your delivery.</Text>
										<Text className="m-0 p-0 mt-[23px] font-normal text-[26px] text-[#232323] leading-[42px]">Share your photos in a modern, beautiful viewing experience.</Text>
										<Link href={`${baseUrl}/software/gallery/collection`} target="__blank" className="underline mt-2 font-normal text-[22px] text-[#0ABAB5] leading-[42px] h-[42px] inline-block">Create your gallery</Link>
									</Section>

								</Column>
							</Row>
							<Row style={{ backgroundImage: `url(${baseUrl}/clientassets/cloud/email/675/3.jpg)` }} className="w-full h-[310px] mx-auto bg-contain bg-no-repeat mt-[76px]">
								<Column className="align-top">
									<Section className="w-[350px] text-center" align="right">
										<Text className="m-0 p-0 w-[158px] h-[42px] bg-[#EFEFEF] rounded-[17px] leading-[42px] mx-auto font-medium text-[21px] text-[#222222]">Zno Website</Text>
										<Text className="m-0 p-0 mt-[18px] font-medium text-[28px] text-[#222222] leading-[42px]">Attract more clients</Text>
										<Text className="m-0 p-0 mt-[23px] font-normal text-[26px] text-[#232323] leading-[42px]">Build a professional website that fits your style in just a few clicks.</Text>
										<Link href={`${baseUrl}/software/website`} target="__blank" className="underline mt-2 font-normal text-[22px] text-[#0ABAB5] leading-[42px] h-[42px] inline-block">Create your website</Link>
									</Section>

								</Column>
							</Row>
							<Row style={{ backgroundImage: `url(${baseUrl}/clientassets/cloud/email/675/4.jpg)` }} className="w-full h-[310px] mx-auto bg-contain bg-no-repeat mt-[76px] mb-[60px]">
								<Column className="align-top">
									<Section className="w-[350px] text-center" align="left">
										<Text className="m-0 p-0 w-[158px] h-[42px] bg-[#EFEFEF] rounded-[17px] leading-[42px] mx-auto font-medium text-[21px] text-[#222222]">Zno Manager</Text>
										<Text className="m-0 p-0 mt-[18px] font-medium text-[28px] text-[#222222] leading-[42px]">Manage bookings effortlessly</Text>
										<Text className="m-0 p-0 mt-[23px] font-normal text-[26px] text-[#232323] leading-[42px]">Bookings, documents, payments, and clients all in one place.</Text>
										<Link href={`${baseUrl}/software/manager`} target="__blank" className="underline mt-2 font-normal text-[22px] text-[#0ABAB5] leading-[42px] h-[42px] inline-block">Set up your manager</Link>
									</Section>

								</Column>
							</Row>

						</Section>
						<Hr />
						<Section>
							<Text className="p-0 m-0 text-center mt-[28px] font-medium text-[26px] text-[#232323] leading-[42px]">Need support? Contact <Link href="mailto:support@zno.com" className="text-[#0ABAB5]">support@zno.com</Link>.</Text>
						</Section>
						{/* Footer Section */}
						<Section className="bg-[#0ABAB5] mt-10 text-white">
							<Row>
								<Column className="px-[47px] py-[28px]">
									<Img
										src={`${baseUrl}/clientassets/cloud/email/base/logo-white.png`}
										alt="Zno Cloud Logo"
										width={230}
										style={{ display: 'block', marginTop: '28px' }}
									/>
									<Text className="m-0 p-0 mt-6 font-normal text-[22px] text-white leading-[34px]">2841 Junction Ave,#101, San Jose, CA 95134 USA</Text>
									<Text className="m-0 p-0 font-normal text-[22px] text-white leading-[34px]">@ 2012-2025 Zno Inc. All rights reserved.</Text>
									<Text className="mt-[30px]"><Link href={`${baseUrl}/unsubscribe-email.html?email=/#email#/`} className="font-normal text-[22px] text-white leading-[26px] underline">Unsubscribe</Link></Text>
								</Column>
							</Row>

						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default VercelInviteUserEmail;
