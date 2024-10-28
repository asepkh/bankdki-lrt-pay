# LRTJPay Application

A Next.js application for LRT payment system integration with JakOne Pay.

## Overview

LRTJPay is a web application that enables users to manage their LRT payments
through JakOne Pay integration. The application features user registration, PIN
management, and secure payment processing.

## Features

- User registration with phone number verification
- OTP verification system
- Secure PIN creation and management
- Integration with JakOne Pay
- Responsive mobile-first design
- Redux state management
- Form validation with Formik and Yup
- Tailwind CSS styling

## Project Structure

```

lrt-pay/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.jsx      # Root layout component
│   │   ├── page.jsx        # Main page component
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   │   ├── Form/          # Form-related components
│   │   └── Layout/        # Layout components
│   ├── screens/           # Page-specific screen components
│   ├── store/             # Redux store configuration
│   │   └── user/          # User-related redux files
│   └── helpers/           # Utility functions
├── public/                # Static assets
└── config files          # Configuration files

```

## Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd lrt-pay
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables: Create a `.env.local` file in the root
   directory:

```env
NEXT_PUBLIC_ENCRYPTION_KEY=your_encryption_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint issues
- `npm run format` - Formats code with Prettier
- `npm run fix` - Runs both lint:fix and format

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Redux](https://redux.js.org/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Formik](https://formik.org/) - Form management
- [Yup](https://github.com/jquense/yup) - Form validation
- [Crypto-JS](https://github.com/brix/crypto-js) - Encryption utilities

## Code Style and Quality

This project uses:

- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS class sorting
- JSX accessibility rules

## Security Features

- PIN encryption using CryptoJS
- Environment variable protection
- OTP verification system
- Secure form handling

## License

This project is licensed under the MIT License - see the LICENSE file for
details.