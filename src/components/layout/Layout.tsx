import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
