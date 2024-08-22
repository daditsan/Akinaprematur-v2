import NavbarAboutPage from "../../components/Navbar/NavbarAboutPage/NavbarAboutPage";

// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import Link from "next/link"

import { Link } from "react-router-dom";

export default function AboutPage() {
	return (
		<>
			<NavbarAboutPage />
			<div className='flex flex-col'>
				<main className='flex-1 mt-10'>
					<section className='w-full pt-12 md:pt-24 lg:pt-32 mt-14'>
						<div className='container space-y-10 xl:space-y-16 mt-10'>
							<div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16'>
								<div>
									<h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
										About Akinaprematur.
									</h1>
								</div>
								<div className='flex flex-col items-start space-y-4'>
									<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
										An AI driven guessing game where the AI
										acts as the guesser and user provides
										the game topics. This is my first full stack
										project for Individual Project Challenge
										in&nbsp;
										<a
											href='https://www.hacktiv8.com/impact'
											className='rounded-lg bg-gray-300 px-1'
										>
											Hacktiv8
										</a>
										.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className='w-full py-12 md:py-24 lg:py-32 mt-4 content-center'>
						<div className='container px-4 md:px-6'>
							<div className='grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]'>
								<iframe
									width='380px'
									height='300px'
									src='https://www.youtube.com/embed/VIDEO_ID'
									frameBorder='0'
									allowfullscreen
								>
									Demo
								</iframe>
							</div>
						</div>
					</section>

					<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-300 mt-4'>
						<div className='container px-4 md:px-6'>
							<div className='grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]'>
								<div className='space-y-2'>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
										Implementing accuracy, fast and
										intelligence to determine the correct
										guess by an AI.
									</h2>
									<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										My mission is to deliver a glimpse of
										what an AI can do to achieve something
										that was complicated to do a long time
										ago that now we can achieve easily.
									</p>
								</div>
								<div className='flex flex-col justify-center space-y-4'>
									<div className='space-y-2'>
										<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
											Innovation, Simplicity (Less is
											More), There&apos;s always room for
											improvement.
										</h2>
										<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
											I strive to continuously push the
											boundaries of what&apos;s possible.
											I find joy with simplicity that can
											give more impact. As the technology
											grows fast, I will always try to
											keep up with the latest technoglogy.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className='w-full py-12 md:py-24 lg:py-32'>
						<div className='container px-4 md:px-6'>
							<div className='flex flex-col items-center justify-center space-y-4 text-center'>
								<div className='space-y-2'>
									<div className='inline-block rounded-lg bg-gray-300 px-3 py-1 text-sm'>
										About Me
									</div>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
										Adytia Isanda Putra
									</h2>
									<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										I dedicated my time to finish and get
										the Akinaprematur into this stage. Each
										instructors of the&nbsp;
										<a
											href='https://www.hacktiv8.com/impact'
											className='rounded-lg bg-gray-300 px-1'
										>
											Hacktiv8
										</a>{" "}
										have bring a unique set of their
										guidance and assistance for me during
										developing the project.
									</p>
								</div>
							</div>
							<div className='mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3'>
								<div className='grid gap-4'>
									<div className='flex items-center gap-4'>
										<img
											src='https://i.ibb.co.com/HXQ2q4z/Dadit.png'
											alt='Adytia Isanda'
											className='rounded-lg'
											style={{
												width: "100px",
												height: "100px",
											}}
										/>
										<div>
											<h3 className='text-lg font-bold'>
												Adytia Isanda
											</h3>
											<p className='text-sm text-muted-foreground'>
												Developer
											</p>
										</div>
									</div>
									<p className='text-muted-foreground'>
										Adytia is the full stack developer of
										Akinaprematur, developing the
										project&apos;s strategic direction and
										fostering a culture of innovation and
										excellence.
									</p>
								</div>
								{/* <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    this supposed to be avatar
                    <div>
                      <h3 className="text-lg font-bold">Jane Appleseed</h3>
                      <p className="text-sm text-muted-foreground">CTO</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Jane is the technical mastermind behind Acme Inc., leading
                    the engineering team and driving innovation in our product
                    offerings.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    this supposed to be avatar
                    <div>
                      <h3 className="text-lg font-bold">Sarah Anderson</h3>
                      <p className="text-sm text-muted-foreground">CMO</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Sarah is the marketing powerhouse of Acme Inc., spearheading
                    our branding and customer engagement strategies to drive
                    growth and success.
                  </p>
                </div> */}
							</div>
						</div>
					</section>
				</main>

				<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
					<p className='text-xs text-muted-foreground'>
						&copy; 2024 Adytia Isanda Putra. All rights reserved.
					</p>
					{/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              to={"#"}
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              to={"#"}
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy
            </Link>
          </nav> */}
				</footer>
			</div>
		</>
	);
}
