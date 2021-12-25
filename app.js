const app = Vue.createApp({
	data() {
		return {
			url: 'https://www.google.com/',
			showBooks: true,
			books: [
				{
					title: 'name of the wind',
					author: 'patrick rothfuss',
					img: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/1.jpg',
					isFav: true,
				},
				{
					title: 'the way of kings',
					author: 'brandon sardersand',
					img: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/2.jpg',
					isFav: false,
				},
				{
					title: 'thr final empire',
					author: 'brandon sardersand',
					img: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/3.jpg',
					isFav: true,
				},
			],
		};
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},
	},
});

app.mount('#app');
