module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontSize: {
			sm: ["10px", "10px"],
			base: ["13px", "16px"],
			lg: ["20px", "28px"],
			xl: ["24px", "32px"],
		},
	},
	variants: {
		extend: {
			maxHeight: ["focus"],
		},
	},
	plugins: [],
};
