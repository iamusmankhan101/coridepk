# Co Ride - Carpool & Ride Sharing Website

A modern React-based website for Co Ride, a carpool and ride-sharing platform that connects drivers with passengers for sustainable and affordable transportation.

## Features

- **Find Rides**: Search for available rides based on route, date, and passenger count
- **Offer Rides**: Post your own rides and connect with passengers
- **User Authentication**: Login and registration system
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Clean and intuitive user experience

## Project Structure

```
co-ride-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── FindRide/
│   │   │   ├── FindRide.js
│   │   │   └── FindRide.css
│   │   ├── OfferRide/
│   │   │   ├── OfferRide.js
│   │   │   └── OfferRide.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   └── Auth/
│   │       ├── Login.js
│   │       ├── Register.js
│   │       └── Auth.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Pages

- **Home**: Landing page with hero section, features, and how it works
- **Find Ride**: Search and browse available rides
- **Offer Ride**: Create and publish new ride offers
- **About**: Company information and mission
- **Contact**: Contact form and company details
- **Login/Register**: User authentication pages

## Technologies Used

- React 18
- React Router DOM
- CSS3 with CSS Variables
- Responsive Design
- Modern JavaScript (ES6+)

## Color Scheme

- Primary: #2563eb (Blue)
- Secondary: #10b981 (Green)
- Accent: #f59e0b (Amber)
- Text Dark: #1f2937
- Text Light: #6b7280
- Background Light: #f9fafb

## Next Steps

To enhance the website further, consider adding:

- Backend API integration
- Real-time messaging system
- Payment processing
- User profiles and ratings
- Map integration
- Push notifications
- Mobile app development