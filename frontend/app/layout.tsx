import '@/app/globals.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="header">
            <Header />
          </header>
          <div className="flex flex-1">
            <aside className="sidebar">
              <Sidebar />
            </aside>
            <main className="flex-1 p-4 content">
              {children}
            </main>
          </div>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
