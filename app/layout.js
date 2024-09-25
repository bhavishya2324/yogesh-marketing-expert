import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: ' Yogesh Marketig Expert',
  description: 'Yogesh Marketing Expert and a seasoned expert in the world of marketing. With a wealth of experience and a passion for driving results. Known for his strategic thinking and creative flair and  Known for his strategic thinking and creative flair, Yogesh is committed to helping businesses elevate their brand, engage their audience, and achieve their goals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      < className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-4 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[80rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
