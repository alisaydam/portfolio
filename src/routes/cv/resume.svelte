<script>
	import html2pdf from 'html2pdf.js';
	import css from '../../cv.css';
	let active = false;
	let y;
	$: showScrollTopButton = y > 200 ? true : false;

	const removeNav = (e) => {
		if (e.target.localName === 'i' || e.target.localName === 'a') {
			active = false;
		}
	};

	// Boxicons used

	let themeIcon = 'moon';
	const toggleTheme = () => {
		window.document.body.classList.toggle('dark-theme');
		themeIcon = themeIcon === 'moon' ? 'sun' : 'moon';
	};
	const generateResume = () => {
		const areaCV = window.document.querySelector('#resume');
		let resumeNeme = themeIcon === 'moon' ? 'ali-saydam-light' : 'ali-saydam-dark';
		let opt = {
			filename: resumeNeme
		};
		html2pdf()
			.set(opt)
			.from(areaCV)
			.save()
			.then(() => {
				setTimeout(removeScale, 1500);
			});
	};
	const scaleCV = () => {
		window.document.body.classList.add('scale-cv');
	};
	const removeScale = () => {
		window.document.body.classList.remove('scale-cv');
	};
	const resumeDownload = () => {
		scaleCV();

		generateResume();
	};
</script>

<svelte:window bind:scrollY={y} />
<body>
	<header class="l-header" id="header">
		<nav class="nav bd-container">
			<a href="#" class="nav__logo">Smith</a>
			<div on:click={removeNav} class:show-menu={active} class="nav__menu" id="nav-menu">
				<ul class="nav__list">
					<li class="nav__item">
						<a href="#home" class="nav__link" class:active-link={y < 50} id="nav-item">
							<i class="bx bx-home nav__icon" />Home
						</a>
					</li>
					<li class="nav__item">
						<a href="#profile" class="nav__link">
							<i class="bx bx-user nav__icon" />Profile
						</a>
					</li>
					<li class="nav__item">
						<a href="#education" class="nav__link">
							<i class="bx bx-book nav__icon" />Education
						</a>
					</li>
					<li class="nav__item">
						<a href="#skills" class="nav__link">
							<i class="bx bx-receipt nav__icon" />Skills
						</a>
					</li>
					<li class="nav__item">
						<a href="#experience" class="nav__link">
							<i class="bx bx-briefcase-alt nav__icon" />Experience
						</a>
					</li>
					<li class="nav__item">
						<a href="#certificates" class="nav__link">
							<i class="bx bx-award nav__icon" />Certificates
						</a>
					</li>
					<li class="nav__item">
						<a href="#refrences" class="nav__link">
							<i class="bx bx-link-external nav__icon" />Refrences
						</a>
					</li>
					<li class="nav__item">
						<a href="https://www.alisaydam.one" class="nav__link">
							<i class="bx bxs-left-arrow-circle nav__icon" />Go Back
						</a>
					</li>
				</ul>
			</div>
			<div class="nav__toggle" id="nav-toggle" on:click={() => (active = active ? false : true)}>
				<i class="bx bx-grid-alt" />
			</div>
		</nav>
	</header>
	<main class="l-main bd-container">
		<div class="resume" id="resume">
			<div class="resume__left">
				<!-- Home -->
				<secttion class="home section" id="home">
					<div class="home__container section bd-grid">
						<div class="home__data bd-grid">
							<!-- <img src="/js.png" alt="" class="home__img" /> -->

							<h1 class="home__title">ALI <b>SAYDAM</b></h1>
							<h3 class="home__profession">Web developer</h3>

							<!-- Download Button -->
							<div>
								<a download="" href="/ali-saydam-light.pdf" class="home__button-movil">Download</a>
							</div>
						</div>

						<div class="home__address bd-grid">
							<span class="home__information">
								<i class="bx bx-map home__icon" />Alanya 7400 Antalya/Turkey
							</span>
						</div>
						<div class="home__address bd-grid">
							<span class="home__information">
								<i class="bx bx-envelope home__icon" />
								<a href="mailto: alsydm091@gmail.com">alsydm091@gmail.com </a>
							</span>
						</div>
						<div class="home__address bd-grid">
							<span class="home__information">
								<i class="bx bx-phone home__icon" />+90 543 355 27 94
							</span>
						</div>
						<i class="bx bx-{themeIcon} change-theme" title="Theme" on:click={toggleTheme} />
						<i
							class="bx bx-download generate-pdf"
							title="Generate PDF"
							id="resume-button"
							on:click={resumeDownload}
						/>
					</div>
					<!-- Theme change button -->
				</secttion>

				<!-- Generate and download CV -->

				<!-- Social -->
				<section class="social section">
					<h2 class="section-title">SOCIAL</h2>

					<div class="social__container bd-grid">
						<a href="" target="_blank" class="social__link">
							<i class="bx bxl-linkedin-square social__icon" /><a
								target="_blank"
								href="https://www.linkedin.com/in/alisaydam/">@alisaydam</a
							>
						</a>
						<a href="" target="_blank" class="social__link">
							<i class="bx bxl-github social__icon" /><a
								target="_blank"
								href="https://github.com/alisaydam">@alisaydam</a
							>
						</a>
					</div>
				</section>
				<!-- Profile -->
				<section class="profile section" id="profile">
					<h2 class="section-title">Profile</h2>

					<p class="profile__description">
						I am a hardworking and ambitious individual with a great passion for the web
						technologies.
					</p>
				</section>
				<section class="education section" id="education">
					<h2 class="section-title">Education</h2>
					<div class="education__container bd-grid">
						<div class="education__content">
							<div class="education__time">
								<span class="education__rounder" />
								<span class="education__line" />
							</div>
							<div class="education__data bd-grid">
								<h3 class="education__title">English Language Teaching</h3>
								<span class="education__studies">Alaaddin Keykubat University</span>
								<span class="education__year">2018-2022</span>
							</div>
						</div>

						<div class="education__content">
							<div class="education__time">
								<span class="education__rounder" />
								<span class="education__line" />
							</div>
							<div class="education__data bd-grid">
								<h3 class="education__title">Web Development</h3>
								<span class="education__studies">The Odin Project</span>
								<span class="education__year">2021-2022</span>
							</div>
						</div>

						<div class="education__content">
							<div class="education__time">
								<span class="education__rounder" />
								<!-- <span class="education__line"></span> -->
							</div>
							<div class="education__data bd-grid">
								<h3 class="education__title">Node.js Bootcamp</h3>
								<span class="education__studies">patika.dev</span>
								<span class="education__year">2021-2022</span>
							</div>
						</div>
					</div>
				</section>
				<!-- Skills -->
				<section class="skills section" id="skills">
					<h2 class="section-title">Skills</h2>
					<div class="skills__content bd-grid">
						<ul class="skills__data">
							<li class="skills__name">
								<span class="skills__circle" />JavaScript
							</li>
							<li class="skills__name">
								<span class="skills__circle" />HTML
							</li>
							<li class="skills__name">
								<span class="skills__circle" />Css
							</li>
							<li class="skills__name">
								<span class="skills__circle" />Sass
							</li>
							<li class="skills__name">
								<span class="skills__circle" />Git/Github
							</li>
							<li class="skills__name">
								<span class="skills__circle" />npm
							</li>
						</ul>
						<ul class="skills__data">
							<li class="skills__name">
								<span class="skills__circle" />Node
							</li>
							<li class="skills__name">
								<span class="skills__circle" />TypeScript
							</li>
							<li class="skills__name">
								<span class="skills__circle" />Svelte
							</li>
							<li class="skills__name">
								<span class="skills__circle" />SvelteKit
							</li>
							<li class="skills__name">
								<span class="skills__circle" />Vue
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div class="resume__right">
				<section class="experience section" id="experience">
					<h2 class="section-title">Experience</h2>

					<div class="experience__container bd-grid">
						<div class="experience__content">
							<div class="experience__time">
								<span class="experience__rounder" />
								<span class="experience__line" />
							</div>
							<div class="experience__data bd-grid">
								<h3 class="experience__title">BUSINESS MANAGER</h3>
								<span class="experience__company"
									>From 2005 to 2015 | Grocery Store - Family Business</span
								>
								<p class="experience__description">
									I have worked in my family business for long years untill I decided to change my
									career for a more challenging one.
								</p>
							</div>
						</div>

						<div class="experience__content">
							<div class="experience__time">
								<span class="experience__rounder" />
							</div>
							<div class="experience__data bd-grid">
								<h3 class="experience__title">RECEPTIONIST</h3>
								<span class="experience__company">From 2018 to 2019 | Receptionist</span>
								<p class="experience__description">
									I worked as receptionist at a boutique hotel in Alanya which is a turistic city.
									My duty was doing usual ckeck-in/check-out of guests.
								</p>
							</div>
						</div>

						<!-- Certificates -->
						<section class="certificate section" id="certificates">
							<h2 class="section-title">Certificates & Resources</h2>

							<div class="certificate__container bd-grid">
								<div class="certificate__content">
									<h3 class="certificate__title">The Odin Project</h3>
									<p class="certificate__description">
										The Odin Project provides an oline free open source coding curriculum that helped me to learn wen development technologies like JS, HTML, CSS.  
									</p>
								</div>
								<div class="certificate__content">
									<h3 class="certificate__title">patika.dev</h3>
									<p class="certificate__description">
										patika.dev is a udemy-like Turkish plarform provides free bootcamps & learning sources to its students. I learned Node.js from one of their many bootcamps. <br>  <a target="_blank" href="https://verified.cv/en/verify/88990993332764">Click to see my certificate</a>
									</p>
								</div>
								<div class="certificate__content">
									<h3 class="certificate__title">Svelte.dev</h3>
									<p class="certificate__description">
										I raelly loved learn svelte from their official website. It is a great joy working with Svelte. 
									</p>
								</div>
							</div>
						</section>

						<!-- Refrences -->
						<section class="references sections" id="references">
							<h2 class="section-title">References</h2>

							<div class="references__container bd-grid">
								<div class="references__content bd-grid">
									<span class="references__subtitle">Snr. Enginer</span>
									<h3 class="references__title">Mr. Metin Kahveci</h3>
									<ul class="references__contact">
										<li>Occupation: Software Enginer</li>
										<li>Email: kahvecimetinn@gmail.com</li>
									</ul>
								</div>
							</div>
						</section>

						<section class="languages section">
							<h2 class="section-title">Languages</h2>

							<div class="languages__container">
								<ul class="languages__content bd-grid">
									<li class="languages__name">
										<span class="languages__circle" />Turkish
									</li>
									<li class="languages__name">
										<span class="languages__circle" />English
									</li>
									<li class="languages__name">
										<span class="languages__circle" />Kurdish
									</li>
								</ul>
							</div>
						</section>

						<!-- Interests -->
						<section class="interensts section">
							<h2 class="section-title">Interests</h2>

							<div class="interests__container bd-grid">
								<div class="interests__content">
									<i class="bx bx-headphone interests__icon" />
									<span class="interests__name">Music</span>
								</div>

								<div class="interests__content">
									<i class="bx bxs-plane-alt interests__icon" />
									<span class="interests__name">Travel</span>
								</div>

								<div class="interests__content">
									<i class="bx bx-book-alt interests__icon" />
									<span class="interests__name">Reading</span>
								</div>

								<div class="interests__content">
									<i class="bx bx-book-alt interests__icon" />
									<span class="interests__name">Fitness</span>
								</div>
								<div class="interests__content">
									<i class="bx bx-swim interests__icon" />
									<span class="interests__name">Swimming</span>
								</div>
								<div class="interests__content">
									<i class="bx bxs-file-js interests__icon" />
									<span class="interests__name">JavaScript</span>
								</div>
								<div class="interests__content">
									<i class="bx bx-joystick interests__icon" />
									<span class="interests__name">Video Games</span>
								</div>
								<div class="interests__content">
									<i class="bx bx-atom interests__icon" />
									<span class="interests__name">Science-fiction</span>
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>
		</div>
	</main>

	<!-- Scroll Top -->
	<a href="#top" class="scrolltop" id="scroll-top" class:show-scroll={showScrollTopButton}>
		<i class="bx bx-up-arrow-alt scrolltop__icon" />
	</a>
</body>
