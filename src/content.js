export const turkishContent = {
	navbar: {
		techStack: 'Teknolojiler',
		projects: 'Projeler',
		theme: 'Tema',
		contact: 'İtelişim',
		themes: {
			light: 'açık',
			dark: 'koyu',
			solarize: 'solarize',
			noemalize: 'normal'
		}
	},
	header: {
		hello: 'Merhaba, ben',
		about:
			'Siteme hoşgeldiniz. Ben Antalya yaşayan JavaScript ve web odaklı teknolojiler konusunda sürekli yeni şeyler öğrenip kendini geliştiren bir web geliştiriciyim. Kodlama dünyasında yeni olsamda kendimi kısa sürede yetiştirdiğime inanıyorum. ',
		cv: "CV'me git"
	},
	techStack: 'Teknolojiler',
	footer: 'Bana ulaş : ',
	projects: {
		title: 'Projeler',
		projectTabs: { overview: 'Hakkında', usedTech: 'Teknolojiler' },
		projects: [
			{
				name: 'Geyix',
				preview: 'https://geyix.org',
				gitHub: 'https://github.com/alisaydam/geyix---project',
				overview:
					'Bu proje bana programlama öğrenmeye başlatan proje oldu. İnsanların mizahi içerik paylaşması için bir platform oluşturmak istiyorum. Henüz bitmiş değil ve daha eklenecen bir sürü özellik var.',
				usedTech: {
					backend: [
						'Node.js',
						'Express',
						'Nodemailer',
						'Validator',
						'MongoDB',
						'Jwt',
						'Firebase Storage',
						'Bcrypt',
						'Heroku'
					],
					frontend: [
						'SvelteKit',
						'aovi-svelte',
						'Firebase',
						'Image-conversation',
						'Fetch Api',
						'Netlify',
						'Google Domains'
					]
				}
			},
			{
				name: 'Popcorn Movie',
				preview: 'https://elated-goldwasser-002062.netlify.app',
				gitHub: 'https://github.com/alisaydam/mega-movie',
				overview:
					'Patika.dev Node bootcampinin sonunda yaptığım final proje. Proje ücretsiz TheMovieDB apisi kullanarak anasayfaya 20 populer film listeliyor. Kullanıcılar favori film ekleyip, çıkarabiliyor ve hangi filmleri diğer üyeleirn görebileceğini seçiyorlar.',
				usedTech: {
					backend: [
						'Node.js',
						'TypeScript',
						'Express',
						'MySQL',
						'TypeORM',
						'Jwt',
						'Bcrypt',
						'Heroku',
						'Google Auth'
					],
					frontend: ['SvelteKit', 'Fetch Api', 'Netlify', 'TheMovieDB', 'Fetch']
				}
			},
			{
				name: 'SmartEdu',
				preview: 'https://a-smart-edu.herokuapp.com/',
				gitHub: 'https://github.com/alisaydam/SmarteduProject',
				overview:
					'Node.js öprenirken hazırladığım bir demo app. Node öğrenirken çok yardımı oldu. Tam kapsamlı bir web uygulamasının tüm gerekli bileşenlerini temel düzeyde öpreten bir demo oldu benim için.',
				usedTech: {
					backend: ['Node.js', 'Express', 'NodeMailer', 'MongoDB', 'Bcrypt', 'Heroku'],
					frontend: ['Ejs template engine']
				}
			},
			{
				name: 'CleanBlog',
				preview: 'https://clean-blog-site.herokuapp.com/',
				gitHub: 'https://github.com/alisaydam/cleanblogsite',
				overview: 'Blog sitesi demo projesi. CRUD operasyonlarını içeren bir demo proje.',
				usedTech: {
					backend: ['Node.js', 'Express', 'MongoDB', 'Heroku'],
					frontend: ['Ejs template engine']
				}
			},

			{
				name: 'PCat',
				preview: 'https://pcat-patika-app.herokuapp.com/',
				gitHub: 'https://github.com/alisaydam/pcat',
				overview: 'Kullanıcıdan fotoğraf alan bir demo uygulama. ',
				usedTech: {
					backend: ['Node.js', 'Express', 'MongoDB', 'Heroku'],
					frontend: ['Ejs template engine']
				}
			},
			{
				name: 'FireBlogs',
				preview: 'https://fire-blogs.netlify.app/',
				gitHub: 'https://github.com/alisaydam/Vue.js-CodeHouse-Blog',
				overview:
					'Vue.js öğrenmek için Traversy Media kanalından faydalanarak yaptığım Firebase Faas kullanan blog projesi.',
				usedTech: {
					backend: ['Firebase as FaaS'],
					frontend: ['Vue.js', 'Vuex', 'Sass']
				}
			}
		]
	}
};
export const englishContent = {
	navbar: {
		techStack: 'Tech Stack',
		projects: 'Projects',
		contact: 'Contact',
		theme: 'Theme',
		themes: {
			light: 'light',
			dark: 'dark',
			solarize: 'solarize',
			noemalize: 'normalize'
		}
	},
	header: {
		hello: 'Hi there, I am',
		about:
			'Hi, I am Ali Saydam. I am a fullstack developer located in Turkey. I am excited about web technologies and contstantly learning new things. ',
		cv: 'Go to my CV'
	},
	techStack: 'Tech Stack',
	footer: 'Find me at :',
	projects: {
		title: 'Projects',
		projectTabs: { overview: 'Overview', usedTech: 'Used Tech' },
		projects: [
			{
				name: 'Geyix',
				preview: 'https://geyix.org',
				gitHub: 'https://github.com/alisaydam/geyix---project',
				overview:
					'This project is the main reason why I started to learn code. I wanted to create a platform that people can share funny memes, gifs or humorous content. It is not finished yet. Still have tons of features to add.',
				usedTech: {
					backend: [
						'Node.js',
						'Express',
						'Nodemailer',
						'Validator',
						'MongoDB',
						'Jwt',
						'Firebase Storage',
						'Bcrypt',
						'Heroku'
					],
					frontend: [
						'SvelteKit',
						'aovi-svelte',
						'Firebase',
						'Image-conversation',
						'Fetch Api',
						'Netlify',
						'Google Domains'
					]
				}
			},
			{
				name: 'Popcorn Movie',
				preview: 'https://elated-goldwasser-002062.netlify.app',
				gitHub: 'https://github.com/alisaydam/mega-movie',
				overview:
					'This is my Node.js bottcamp final project. It shows users` 20 popular movies and users also can search for movies and add them to their favorites and share their collection with other users. I used free TheMovieDB api for this project.',
				usedTech: {
					backend: [
						'Node.js',
						'TypeScript',
						'Express',
						'MySQL',
						'TypeORM',
						'Jwt',
						'Bcrypt',
						'Heroku',
						'Google Auth'
					],
					frontend: ['SvelteKit', 'Fetch Api', 'Netlify', 'TheMovieDB', 'Fetch']
				}
			},
			{
				name: 'SmartEdu',
				preview: 'https://a-smart-edu.herokuapp.com/',
				gitHub: 'https://github.com/alisaydam/SmarteduProject',
				overview:
					'A demo app I build while learning Node.js. It helped me a lot while learning Node.js. It uses all the features to create a full fledged web app in a basic level. ',
				usedTech: {
					backend: ['Node.js', 'Express', 'NodeMailer', 'MongoDB', 'Bcrypt', 'Heroku'],
					frontend: ['Ejs template engine']
				}
			},
			{
				name: 'CleanBlog',
				preview: 'https://clean-blog-site.herokuapp.com/',
				gitHub: 'https://github.com/alisaydam/cleanblogsite',
				overview:
					'Another demo app that learn about how to make a blogging website. I basically helped me to learn CRUD operations. ',
				usedTech: {
					backend: ['Node.js', 'Express', 'MongoDB', 'Heroku'],
					frontend: ['Ejs template engine']
				}
			},

			{
				name: 'PCat',
				preview: 'https://pcat-patika-app.herokuapp.com/',
				gitHub: 'https://github.com/alisaydam/pcat',
				overview:
					'This is also a demo app that people can upload and share their photos. Here I learned about paginating the pages. ',
				usedTech: {
					backend: ['Node.js', 'Express', 'MongoDB', 'Heroku'],
					frontend: ['Ejs template engine']
				}
			},
			{
				name: 'FireBlogs',
				preview: 'https://fire-blogs.netlify.app/',
				gitHub: 'https://github.com/alisaydam/Vue.js-CodeHouse-Blog',
				overview:
					'A  blog project that get my feet wet with Vue.js. Is uses Firebase for auth and storage. ',
				usedTech: {
					backend: ['Firebase as FaaS'],
					frontend: ['Vue.js', 'Vuex', 'Sass']
				}
			}
		]
	}
};

export const techStacks = [
	{
		name: 'JavaScript',
		src: 'js.png'
	},
	{ name: 'Node.js', src: 'node.png' },
	{ name: 'TypeScript', src: 'ts.png' },
	{ name: 'HTML', src: 'html.png' },
	{ name: 'CSS', src: 'css.png' },
	{ name: 'Svelte.js', src: 'svelte.png' },
	{ name: 'Vue.js', src: 'vue.png' },
	{ name: 'git', src: 'git.png' },
	{ name: 'npm', src: 'npm.png' },
	{ name: 'MongoDB', src: 'mongo.png' }
];
