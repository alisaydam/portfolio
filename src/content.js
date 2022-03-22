export const turkishContent = {
	navbar: {
		about: 'Hakkında',
		techStack: 'Teknolojiler',
		projects: 'Projeler',
		theme: 'Tema',
		themes: {
			light: 'açık',
			dark: 'koyu',
			solarize: 'solarize',
			noemalize: 'normal'
		}
	},
	header: {
		about:
			'Hi, I am Ali Saydam. I am a fullstack developer located in Turkey. I am excited about web technologies and contstantly learning new things. '
	},
	techStack: 'Teknolojiler',
	projects: {
		name: 'Projeler',
		projectTabs: ['Özet', 'Kullanılan Teknolojiler']
	}
};
export const englishContent = {
	navbar: {
		about: 'About',
		techStack: 'Tech Stack',
		projects: 'Projects',
		theme: 'Theme',
		themes: {
			light: 'light',
			dark: 'dark',
			solarize: 'solarize',
			noemalize: 'normalize'
		}
	},
	header: {
		about:
			'Hi, I am Ali Saydam. I am a fullstack developer located in Turkey. I am excited about web technologies and contstantly learning new things. '
	},
	techStack: 'Tech Stack',
	projects: {
		title: 'Projects',
		projectTabs: ['Overview', 'Used Tech'],
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
				overview: 'A demo app I build while learning Node.js. I learned Node from a ',
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
	{ name: 'MongoDB', src: 'mongo.png' },
	{ name: 'npm', src: 'npm.png' }
];
