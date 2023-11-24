import {Chrome, Instagram, Volume2} from 'lucide-react';
import {ReactNode} from 'react';

const services = [
	{
		icon: <Chrome size={64} />,
		title: 'فروش سایت اختصاصی و اقتصادی',
		description:
			'در این بخش از خدمات، سایت های آماده فروشگاهی و سازمانی و شرکتی و مدیریتی و اداری و خبری و اختصاصی ، آماده به فروش می باشد که با زبان ها و فریم ورک های مختلف مانند جنگو و لاراول و وردپرس و php ارائه می شود.',
	},
	{
		icon: <Instagram size={64} />,
		title: 'فروش سایت اختصاصی و اقتصادی',
		description:
			'در این بخش از خدمات، سایت های آماده فروشگاهی و سازمانی و شرکتی و مدیریتی و اداری و خبری و اختصاصی ، آماده به فروش می باشد که با زبان ها و فریم ورک های مختلف مانند جنگو و لاراول و وردپرس و php ارائه می شود.',
	},
	{
		icon: <Volume2 size={64} />,
		title: 'فروش سایت اختصاصی و اقتصادی',
		description:
			'در این بخش از خدمات، سایت های آماده فروشگاهی و سازمانی و شرکتی و مدیریتی و اداری و خبری و اختصاصی ، آماده به فروش می باشد که با زبان ها و فریم ورک های مختلف مانند جنگو و لاراول و وردپرس و php ارائه می شود.',
	},
];

interface ServiceCardProps {
	icon: ReactNode; // Assuming icon is a ReactNode, adjust the type accordingly
	title: string;
	description: string;
}

export function ServiceCard({icon, title, description}: ServiceCardProps) {
	return (
		<div className="flex w-1/3 flex-col items-center justify-center gap-8 text-lg font-extrabold">
			<div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-nahal-green text-white">
				{icon}
			</div>
			<div>{title}</div>
			<div>{description}</div>
			<button className="w-full rounded-lg bg-nahal-green py-3 text-lg text-white hover:brightness-110">
				اطلاعات بیشتر
			</button>
		</div>
	);
}

export default function Services() {
	return (
		<div className="my-16 flex w-full flex-row gap-16">
			{services.map((service, index) => (
				<ServiceCard key={index} {...service} />
			))}
		</div>
	);
}
