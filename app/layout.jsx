import './globals.css';
import ServiceWorkerRegistration from '../components/ServiceWorkerRegistration';

export const metadata = {
  title: 'Citizen Portal Demo',
  description: 'Citizen Portal Demo application',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.png',
    apple: '/icon-192.png',
  },
};

export const viewport = {
  themeColor: '#0066b3',
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
