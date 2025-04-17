# Fishtail Info Solutions

A modern web application built with Next.js 15 and React 19, featuring interactive UI components and mapping capabilities.

## 🚀 Features

- Modern UI with Tailwind CSS
- Interactive animations using Framer Motion
- Map integration with Leaflet and Google Maps
- Email functionality with EmailJS
- Custom UI components using Radix UI
- Responsive design
- Toast notifications
- SVG icons support with Lucide React and React Feather

## 🛠️ Technologies Used

- **Framework:** Next.js 15.2.3 with Turbopack
- **UI Library:** React 19.0.0
- **Styling:**
  - Tailwind CSS
  - Class Variance Authority
  - tailwind-merge
  - tw-animate-css
- **Maps:**
  - Leaflet
  - Google Maps JavaScript API
- **Components:**
  - Radix UI (Label, Slot, Tabs)
  - Framer Motion for animations
- **Icons:**
  - Lucide React
  - React Feather
- **Notifications:** React Hot Toast
- **Development:**
  - TypeScript
  - ESLint
  - Node.js

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/khadka27/fishtail-info-solutions.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add necessary environment variables:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_EMAILJS_KEY=your_emailjs_public_key
```

## 🚀 Running the Project

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
src/
  ├── app/         # Next.js app router pages
  ├── Components/  # Reusable React components
  ├── data/        # Static data and configurations
  ├── Images/      # Image assets
  ├── lib/         # Utility functions and helpers
  └── projects/    # Project-related components
public/            # Static files
```

## 🧰 Available Scripts

- `npm run dev` - Starts development server with Turbopack
- `npm run build` - Creates production build
- `npm start` - Starts production server
- `npm run lint` - Runs ESLint for code quality

## 🔧 Dependencies

### Core

- Next.js 15.2.3
- React 19.0.0
- React DOM 19.0.0

### UI & Styling

- Tailwind CSS
- Class Variance Authority
- clsx
- tailwind-merge
- tw-animate-css

### Components & Animation

- Radix UI components
- Framer Motion
- React Hot Toast

### Maps

- Leaflet
- Google Maps JavaScript API

### Development

- TypeScript
- ESLint
- Various type definitions (@types/\*)

## 📝 License

This project is private and proprietary. All rights reserved.

## 🤝 Contributing

This is a private repository. Contact the repository owner for contribution guidelines.
