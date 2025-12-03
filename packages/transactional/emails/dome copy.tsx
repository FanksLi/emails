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
						font-family: Gotham, Gotham-Book, Verdana, -apple-system, Arial,
					BlinkMacSystemFont, 'PingFang SC', 苹方-简, 'Microsoft YaHei',
					微软雅黑, sans-serif;
					letter-spacing: 1px;
      }`}
				</style>
			</Head>
			<Tailwind>
				<Section className="bg-white my-auto mx-auto max-w-[750px] w-[740px]" align="center">
					<Container style={{ fontFamily: 'Gotham, sans-serif'}} align="center">
						<Section className="h-[589px]" style={{ backgroundImage: `url(${baseUrl}/clientassets/mailMatrials/ZI/531/01.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
						</Section>
						<div className="h-[1374px] " style={{ backgroundImage: `url(${baseUrl}/clientassets/mailMatrials/ZI/531/02.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
							<Section>
								<Row>
									<Column colSpan={24} className="font-normal text-[18px] text-[#1D596A] leading-[31px] px-[26px]">
										Thank you for choosing Zno Instant! Getting started is easy—just follow these two steps to set up your event and start sharing photos in real time.
									</Column>
								</Row>
								<Row className="mt-[54px]">
									<Column colSpan={24} className="font-bold text-[22px] text-white leading-[22px] text-center">
										Two Quick Start Videos
									</Column>
								</Row>
							</Section>
							<Section>
								<Row className="mt-[72px] w-[426px] mx-auto">
									<Column className="text-[18px] text-[#1D596A] leading-[31px] font-black whitespace-nowrap">
										<span className="text-[22px]">✅</span>Step One: Connect Camera To Phone
									</Column>
								</Row>
								<Row className="mt-[16px] w-[426px]">
									<Column className="text-[18px] text-[#1D596A] leading-[31px] pl-[6px]">
										Click to watch how to connect your camera to the Zno Instant app
									</Column>

								</Row>
								<Row className="w-[426px] h-[240px] mt-[26px]">
									<Column>
										<Link className="block h-full w-full" href="https://youtu.be/PDdnBZyThz4"></Link>
									</Column>
								</Row>
							</Section>
							<Section>
								<Row className="mt-[83px] w-[433px] mx-auto">
									<Column className="text-[21px] text-[#1D596A] leading-[34px] font-black whitespace-nowrap">
										<span className="text-[22px]">✅</span>Step Two: Create Instant Gallery
									</Column>

								</Row>
									<Row className="mt-[13px] w-[433px] mx-auto">
									<Column className="text-[21px] text-[#1D596A] leading-[34px] pl-[6px]">
										Click to watch how to create an Instant Gallery on desktop & customize features
									</Column>

								</Row>
								<Row className="w-[426px] h-[240px] mt-[40px] mx-auto">
									<Column>
										<Link className="block h-full w-full" href="https://youtu.be/PDdnBZyThz4"></Link>
									</Column>
								</Row>
							</Section>
							<Section>
								<Row className="mt-[112px]">
									<Column className="font-normal text-[18px] text-[#1D596A] leading-[31px] px-[26px]">
										Once you’ve completed these steps, you’re all set for your first event! With Zno Instant, delivering and sharing photos in real time has never been easier!
									</Column>
								</Row>
							</Section>

						</div>
						<Section className="h-[316px]" style={{ backgroundImage: `url(${baseUrl}/clientassets/mailMatrials/ZI/531/03.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
							<Row className="mt-[34px]">
								<Column className="font-[500] text-[19px] text-[#1D596A] leading-[43px] text-center">
									If you have any questions, we’re here to help!
								</Column>
							</Row>
							<Row className="w-[389px] h-[65px] bg-[#0ABAB5] font-medium text-[24px] text-white leading-[32px] mt-[28px] rounded-md">
								<Column className="text-center">
									<Link href="https://calendly.com/d/cs9h-8c5-96w/zno-instant-demo" className="block text-white">
										Request 1-on-1 Support
									</Link>
								</Column>
							</Row>
							<Row className="w-[389px] h-[65px] bg-[#0ABAB5] font-medium text-[24px] text-white leading-[32px] mt-[28px] rounded-md">
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
/***
 你是一名资深的前端开发工程师，根据我提供的内容，完成一下的任务：
 1. 根据我提供的css属性，帮我转换成tailwindcss属性
 
 准备好了，请说好的
 
 */
