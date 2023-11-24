import Image from 'next/image';
import {Carousel, CarouselItem} from 'react-bootstrap';

export default function ImageSlider() {
	return (
		<div className="w-full rounded-xl p-12">
			<Carousel className="overflow-hidden rounded-3xl">
				<CarouselItem className="relative h-[600px] w-full">
					<Image alt="carousel image" src={'/images/c1.jpeg'} fill={true} />
				</CarouselItem>
				<CarouselItem className="relative h-[600px] w-full">
					<Image alt="carousel image" src={'/images/c2.jpg'} fill={true} />
				</CarouselItem>
				<CarouselItem className="relative h-[600px] w-full">
					<Image alt="carousel image" src={'/images/c3.jpg'} fill={true} />
				</CarouselItem>
			</Carousel>
		</div>
	);
}
