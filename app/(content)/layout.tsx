import BootstrapClient from '../_components/BootstrapClient';
import Footer from '../_components/Footer';
import Header from '../_components/Header';

export default function ContentLayout({children}: {children: React.ReactNode}) {
	return (
		<section>
			<Header />
			{children}
			<Footer />
			<BootstrapClient />
		</section>
	);
}
