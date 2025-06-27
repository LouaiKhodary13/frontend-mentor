# Intro Component with Sign-Up Form

A responsive and modern signup form challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-BFOwyEnqbs). This project includes HTML, SCSS, and JavaScript validation logic for a better user experience.

## 📸 Preview

![Preview Image](./design/desktop-design.jpg) <!-- You can add a real screenshot here -->

## 🚀 Live Demo

[Live Site](https://sign-up-form-frontendmentor.netlify.app/) <!-- Replace with your live URL if hosted -->

## 🛠️ Built With

- HTML5
- SCSS (Modular BEM structure)
- JavaScript (Form validation logic)
- Responsive Web Design (Media Queries)

## 🧠 Features

- Clear and accessible form layout
- Client-side validation for:
  - First Name
  - Last Name
  - Email address format
  - Password presence
- Dynamic error display with icons and feedback messages
- Responsive design for mobile and desktop screens

## 📁 Folder Structure

project/
│
├── css/
│ └── main.css # Compiled CSS from SCSS
├── images/ # Icons and favicon
│ └── icon-error.svg
├── js/
│ └── app.js # JavaScript validation logic
├── index.html # Main HTML file
├── README.md # Project documentation
└── style.scss # SCSS source file (optional, if using SCSS)

## ⚙️ Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/LouaiKhodary13/frontend-mentor/tree/main/intro-component-with-signup-form-master
   cd intro-signup-form
   ```
2. Open index.html in your browser or use a live server (like VS Code's Live Server extension).

3.Optional: Compile SCSS to CSS if you're modifying the SCSS source.

🧪 Validation Logic (JS)
Empty fields trigger red borders and display the .form\_\_error div.

Email field is checked for basic format.

When corrected, the red error indicators are removed instantly on re-submission.

📱 Responsive Design
Desktop layout: Side-by-side hero text and form

Mobile layout: Stack with centered alignment

💡 Inspiration
This project is based on a Frontend Mentor challenge to improve form design and validation UI/UX practices.

🙌 Acknowledgements
Frontend Mentor

Design inspired by professional UI form patterns

👤 Author
Louai Khodary
