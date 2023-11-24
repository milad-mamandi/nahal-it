import ImageSlider from '../_components/ImageSlider';
import Caption from '../_components/Caption';
import Services from '../_components/Services';
import Offers from '../_components/Offers';
import Partners from '../_components/Partners';
import LatestProducts from '../_components/LatestProducts';
import Footer from '../_components/Footer';
import {ArrowLeft} from 'lucide-react';

export default function Home() {
	return (
		<main>
			<ImageSlider />
			<div className="px-20 py-2">
				<Caption value="خدمات نهال آی تی" />
				<Services />
				<Offers />
				<div className="mt-16 flex flex-row items-center justify-between">
					<Caption value="جدیدترین محصولات" />
					<div className="flex items-center justify-center rounded-full bg-nahal-green p-3">
						<div className="rounded-full bg-white p-2 text-nahal-green">
							<ArrowLeft />
						</div>
					</div>
				</div>
				<LatestProducts />
				<Caption value="همکاری" className="mt-16" />
				<Partners />
			</div>
		</main>
	);
}
