import Footer from "@/components/dashboard/Footer";
import BrowseJobsButton from "@compontnets/dashboard/BrowsJobsButton";
import Image from 'next/image'

interface FeatureCardProps {
	iconSrc: string;
	altText: string;
	title: string;
	description: string;
}

export default async function Home() {
  return (<>
      <div className="h-16 w-full content-center bg-[#F1F2F4]">
        <div className="mx-12">
          <h1 className="text-2xl font-bold text-black">Hirehub</h1>
        </div>
      </div>

      <section
				className="xl:px-18 md:16 w-full p-10 sm:h-[50vh] sm:px-10 md:h-[60vh] lg:h-[65vh] lg:px-16 xl:h-[80vh] 2xl:px-20"
				style={{
					backgroundImage: `url(${"images/bgHeader.png"})`,
					backgroundSize: "cover",
					backgroundPosition: "left bottom",
					backgroundAttachment: "scroll",
					minHeight: "inherit",
				}}
			>
				<div className="flex h-full flex-col mt-48 text-white sm:gap-y-1 sm:pb-6 md:gap-y-1.5 md:pb-8 lg:w-full lg:gap-y-2.5 lg:pb-8 xl:w-10/12 xl:gap-y-4 xl:pb-12 2xl:pb-20">
					<h1 className="font-inter font-bold sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
						Elevate your Career <br /> with{" "}
						<span className="font-black text-[#F1C543] font-inter">CIT-U!</span>
					</h1>
					<div className="sm:w-9/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12">
						<p className="sm:text-xs lg:text-base xl:text-lg 2xl:text-xl font-roboto">
							Whether you&apos;re seeking a role in faculty, office administration, or
							departmental services, we invite dedicated individuals to join us in our
							mission of providing quality education.
						</p>
					</div>
					<BrowseJobsButton />
				</div>
			</section>

      <section className="mx-16 my-28 grid grid-cols-3 gap-20">
				<FeatureCard
					iconSrc="/images/icons/career.png"
					altText="career"
					title="Growth Opportunities"
					description="CIT fosters professional development and advancement opportunities for its employees."
				/>
				<FeatureCard
					iconSrc="/images/icons/inclusive.png"
					altText="inclusive"
					title="Inclusive Workplace"
					description="CIT prioritizes diversity and teamwork, fostering a supportive environment for all employees."
				/>
				<FeatureCard
					iconSrc="/images/icons/benefits.png"
					altText="benefits"
					title="Comprehensive Benefits"
					description="CIT offers company insurance and others, ensuring employee satisfaction and well-being."
				/>
			</section>
      
      <section className="bg-[#F1F2F4] flex w-full flex-col items-center justify-center bg-gray px-10 py-20">
				<div className="flex w-full items-center justify-center text-center">
					<h1 className="my-10 flex font-inter font-medium sm:text-4xl">
						How&nbsp;<p className="font-bold font-inter text-jobdetails">HIREHUB</p>&nbsp;works
					</h1>
				</div>
				<div>
					<img
						src="/images/randomphotos/hh-wrk/hh-wrk.png"
						alt="hh-wrk"
						className="h-auto w-[1020px]"
					/>
				</div>
				<div className="grid w-full grid-cols-4 justify-center text-center">
					<div className="flex flex-col content-center justify-center">
						<h2 className="text-l font-bold">Find suitable job</h2>
						<p className="my-5 text-sm text-darkGray">
							Browse and discover job opportunities that match your interests and
							skills.
						</p>
					</div>

					<div className="min-h-224 items- m-5 basis-1/4 flex-col place-content-center text-center align-middle">
						<h2 className="text-l font-bold">Fill-in personal information</h2>
						<p className="my-5 text-sm text-darkGray">
							Provide your personal details to complete your profile.
						</p>
					</div>

					<div className="min-h-224 items- m-5 basis-1/4 flex-col place-content-center text-center align-middle">
						<h2 className="text-l font-bold">Upload CV/Resume & Letter</h2>
						<p className="my-5 text-sm text-darkGray">
							Attach your CV and cover letter to support your application.
						</p>
					</div>

					<div className="min-h-224 items- m-5 basis-1/4 flex-col place-content-center text-center align-middle">
						<h2 className="text-l font-bold">Apply job</h2>
						<p className="my-5 text-sm text-darkGray">
							Submit your application for the desired position.
						</p>
					</div>
				</div>
			</section>

      <section
				id="joblisting"
				className="flex-col-2 flex w-full gap-10 items-center justify-center text-center text-black sm:h-[350px] sm:gap-y-1.5 md:h-[400px] md:gap-y-2 lg:h-[500px] xl:h-[550px] xl:gap-y-2.5 2xl:gap-y-3"
			>
				<Image src="/images/Illustration.png" alt="icon" width={309} height={240} />
				<div className="flex-rows text-left">
					<h1 className="my-3 text-5xl font-bold font-roboto">Careers in CIT-U</h1>
					<p className="text-xl">Browse for a job that matches your interests and skills.</p>
				</div>
			</section>

      <div className="flex flex-col items-center justify-center mb-32">
								<div>
									<svg
										width="189"
										height="181"
										viewBox="0 0 189 181"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clip-path="url(#clip0_1671_7215)">
											<path
												opacity="0.2"
												d="M94.5002 107.469C69.6186 107.506 45.1691 101.242 23.631 89.3112V147.063C23.631 147.806 23.7837 148.541 24.0806 149.227C24.3774 149.914 24.8124 150.537 25.3609 151.062C25.9093 151.588 26.5604 152.004 27.277 152.288C27.9936 152.573 28.7616 152.719 29.5372 152.719H159.475C160.25 152.719 161.018 152.573 161.735 152.288C162.452 152.004 163.103 151.588 163.651 151.062C164.2 150.537 164.635 149.914 164.931 149.227C165.228 148.541 165.381 147.806 165.381 147.063V89.3047C143.84 101.24 119.386 107.506 94.5002 107.469Z"
												fill="#505050"
											/>
											<path
												d="M159.475 50.9062H29.5372C26.2753 50.9062 23.631 53.4386 23.631 56.5625V147.063C23.631 150.186 26.2753 152.719 29.5372 152.719H159.475C162.737 152.719 165.381 150.186 165.381 147.063V56.5625C165.381 53.4386 162.737 50.9062 159.475 50.9062Z"
												stroke="#3E3B3B"
												stroke-width="5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M124.031 50.9062V39.5938C124.031 36.5935 122.787 33.7161 120.571 31.5946C118.356 29.4731 115.352 28.2813 112.219 28.2812H76.7812C73.6484 28.2813 70.6438 29.4731 68.4286 31.5946C66.2133 33.7161 64.9688 36.5935 64.9688 39.5938V50.9062"
												stroke="#3E3B3B"
												stroke-width="5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M165.381 89.3047C143.84 101.24 119.386 107.506 94.5 107.469C69.6181 107.506 45.1682 101.242 23.6299 89.3107"
												stroke="#3E3B3B"
												stroke-width="4"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M85.6406 84.8438H103.359"
												stroke="#505050"
												stroke-width="6"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M182.187 147.773C182.187 159.001 173.037 168.103 161.749 168.103C150.461 168.103 141.31 159.001 141.31 147.773C141.31 136.545 150.461 127.443 161.749 127.443C173.037 127.443 182.187 136.545 182.187 147.773Z"
												fill="#FFE6E6"
											/>
											<path
												d="M170.832 138.738L152.665 156.808M152.665 138.738L170.833 156.808M182.187 147.773C182.187 159.001 173.037 168.103 161.749 168.103C150.461 168.103 141.31 159.001 141.31 147.773C141.31 136.545 150.461 127.443 161.749 127.443C173.037 127.443 182.187 136.545 182.187 147.773Z"
												stroke="#7F0000"
												stroke-width="4.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</g>
										<defs>
											<clipPath id="clip0_1671_7215">
												<rect width="189" height="181" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</div>
								<p>No job vacancy available at the moment.</p>
							</div>
              
      <section className="flex w-full flex-col items-center justify-center bg-[#F1F2F4] text-center text-black sm:h-[350px] sm:gap-y-1.5 md:h-[400px] md:gap-y-2 lg:h-[500px] xl:h-[550px] xl:gap-y-2.5 2xl:gap-y-3">
				<div className="flex flex-col gap-y-1">
					<h1 className="font-roboto font-bold sm:text-2xl md:text-4xl xl:text-3xl 2xl:text-4xl">
						Have a question?
					</h1>
					<span className="font-roboto font-extrabold sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
						Connect with CIT-U!
					</span>
				</div>
				<p className="sm:w-full sm:px-14 sm:text-sm md:w-8/12 md:text-sm xl:text-base 2xl:text-xl">
					Should you have any questions or need assistance, please don&apos;t hesitate to
					contact us. We&apos;re available to provide the support you require. Your
					inquiries are valuable to us, and we aim to address them promptly and
					effectively. We look forward to hearing from you!
				</p>
				<div className="flex flex-row items-center sm:gap-x-1.5 sm:py-1 md:gap-x-1.5 xl:gap-x-3 2xl:gap-x-4">
					<a href="mailto:francegieb.mier@cit.edu">
						<img
							src="/images/icons/email.png"
							alt="Email us"
							className="hover:scale-95 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12"
						/>
					</a>

					<a href="tel:(032)4112000">
						<img
							src="/images/icons/tel.png"
							alt="Call us"
							className="hover:scale-95 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12"
						/>
					</a>
					<a href="https://www.facebook.com/CITUniversity">
						<img
							src="/images/icons/facebook.png"
							alt="Message us"
							className="hover:scale-95 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12"
						/>
					</a>
				</div>
			</section>
			<Footer />          
  </>)
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, altText, title, description }) => {
	return (
		<div className="inline-block items-center justify-center">
			<div className="flex h-72 w-auto flex-col items-center justify-center rounded-3xl px-7 text-black shadow-lg drop-shadow-lg">
				<Image src={iconSrc} alt={altText} height={48} width={48} />
				<div className="mt-4 flex w-full flex-col justify-center gap-y-1 text-center">
					<h1 className="font-inter font-bold sm:text-2xl md:text-base lg:text-lg 2xl:text-xl">
						{title}
					</h1>
					<p className="font-inter mt-4 sm:text-lg md:text-xs lg:text-sm 2xl:text-sm">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};