<h1 align="center">
  ⚛ Simplefolio React ⚛
</h1>

<h2 align="center">
  A clean, beautiful, <i>themeable</i>, responsive portfolio template for developers!
</h2>

<img src="./public/preview.gif" alt="Simplefolio React portfolio preview" />

Feel free to use it as-is or customize it as much as you want. This template was created from scratch and inspired by [Simplefolio](https://github.com/cobidev/simplefolio) by [Jacobo Martinez](https://github.com/cobidev). 
Simplefolio React uses Jacobo Martinez's portfolio template and updates it for modern breakpoints and theming.

---

## Getting Started

See the instructions down below at [Installation](#installation) 
and [Running / Development](#running-/-development) to get a copy of the 
project up and running on your local machine for development and 
testing purposes.

---

## Template Instructions:

### Step 1

Update the portfolio content in [pages/index.json](./pages/index.json):

```json
{
  "theme": "snow",
  "navigation": [
		{
			"title": "About",
			"url": "#about"
		},
		{
			"title": "Projects",
			"url": "#portfolio"
		},
		{
			"title": "Contact",
			"url": "#contact"
		}
	],
  "hero": {
    "name": "Your Name",
    "subtitle": "I'm the Unknown Developer."
  },
  "about": {
    "title": "About me",
    "image": "/placeholder.png",
    "primary": "This is where you can describe about yourself. The more you describe about yourself, the more chances you have!",
    "secondary": "Extra Information about you! like hobbies and your goals."
  },
  "projects": {
    "title": "Projects",
    "projects": [
      {
        "title": "Project 1",
        "description": "Describe the project being very specific, you can use the Twitter standard: no more than 280 characters: complement the information: the skills learned or reinforced in its realization and how you faced it, prove to be proactive in the search for solutions.",
        "url": "http://www.example.com/project1",
        "github": "http://www.example.com/github",
        "image": "/placeholder-700x350.png"
      },
      {
				"title": "Project 2",
				"description": "Demonstrate in this description the skills of a programmer: such as having commitment, having perseverance and accepting alternative solutions. Remember that being a portfolio you are not selling the project, you are selling yourself, it reflects the resources used: Frameworks, libraries, platforms, etc.",
				"url": "http://www.example.com/project2",
        "github": "http://www.example.com/github",
				"image": "/placeholder-700x350.png"
			},
      {
				"title": "Project 3",
				"description": "If the project was collaborative, reflect it in this description, that will demonstrate communication and/or leadership skills. Additionally, if you made use of the mastery of a second language, it will reflect on you professionalism.",
				"url": "http://www.example.com/project3",
        "github": "http://www.example.com/github",
				"image": "/placeholder-700x350.png"
			}
    ]
  },
  "contact": {
    "title": "Contact",
    "description": "This is where you can describe about your contact. The more you describe about your contact, the more chances you have!",
    "formId": "[INSERT YOUR FORMSPREE FORM ID HERE]"
  },
  "footer": [
    {
      "title": "LinkedIn",
      "url": ""
    },
    {
      "title": "Twitter",
      "url": ""
    },
    {
      "title": "GitHub",
      "url": ""
    }
  ]
}
```

Available themes are `dylan`, `snow`, `sage`, `sunset`, `onyx`, and
`simplefolio-original`. Their color tokens are defined in
[styles/themes.css](./styles/themes.css).

### Step 2

Set up a contact form with Formspree.

1. Go to [https://formspree.io/](https://formspree.io/).
2. Create an account.
3. Get your form ID.
4. Paste the form ID into the `formId` field in [pages/index.json](./pages/index.json).

---

## Technologies used

- [Tailwind](https://tailwindcss.com/) - Utility-First CSS framework
- [Next.js](https://nextjs.org/) - Web development framework
- [ScrollReveal.js](https://scrollrevealjs.org/) - JavaScript library
- [Formspree](https://formspree.io/) - Form processing API

## Authors

- **Dylan Arveson** - [https://github.com/dyyllaann](https://github.com/dyyllaann)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

I was motivated to create this project after seeing the Simplefolio that [Jacobo Martinez](https://github.com/cobimr) created and shared with the [ZTM Community](https://github.com/zero-to-mastery).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) 24 or later (with npm)

## Installation

```bash
git clone https://github.com/dyyllaann/simplefolio-react.git
cd simplefolio-react
npm install
```

## Running / Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Linting

```bash
npm run lint
```

### Building

```bash
npm run build
npm start
```

### Hosting

This project is hosted with Vercel, although my personal portfolio uses the same template and is hosted on AWS. I strongly recommend Vercel for ease of use.

To deploy with Vercel, create a new project and import the Git repository.
