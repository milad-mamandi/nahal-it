import {Delete, Edit, Trash} from 'lucide-react';
import Image from 'next/image';

export default function Dashboard() {
	return (
		<main>
			<nav className="outer-shadow flex h-[100px] flex-row items-center justify-between bg-nahal-green px-16">
				<span className="mr-4 text-2xl font-bold text-white">پنل ادمین نهال آی تی</span>
				<div className="relative h-[60px] w-[60px] overflow-hidden rounded-full">
					<Image alt="user pic" src={'/images/admin.jpg'} fill={true} />
				</div>
			</nav>
			<div className="mx-16 mt-12 flex flex-row items-start justify-between gap-16">
				<div className="flex h-[600px] w-1/3 flex-col justify-between rounded-3xl bg-nahal-green p-12 text-xl font-bold text-white">
					<div className="flex flex-col gap-4">
						<span>داشبورد</span>
						<hr className="text-black" />
						<span>منو ها</span>
						<hr className="text-black" />
						<span>محصولات</span>
						<hr className="text-black" />
						<span>دسته بندی محصولات</span>
						<hr className="text-black" />
					</div>
					<button className="w-full rounded-xl bg-[#FFC107] py-3 shadow-md hover:brightness-90">خروج</button>
				</div>
				<div className="flex w-2/3 flex-col gap-4 rounded-3xl bg-nahal-green py-8">
					<div className="mr-12 text-2xl font-bold text-white">داشبورد</div>
					<hr className="text-black" />
					<div className="p-8">
						<table className="table-style w-full table-auto border-collapse gap-4 bg-white">
							<thead>
								<tr>
									<th>ردیف</th>
									<th>نام کاربری</th>
									<th>ایمیل</th>
									<th>وضعیت</th>
									<th>مقام</th>
									<th>پسورد</th>
									<th>تنظیمات</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mohammadaa1382</td>
									<td>mohammadgmailco_13@gmail.com</td>
									<td>
										<div className="mx-auto flex w-[100px] items-center justify-center rounded-lg bg-green-600 py-2 text-lg text-white hover:brightness-105">
											فعال
										</div>
									</td>
									<td>Admin</td>
									<td>admin123</td>
									<td>
										<div className="flex flex-row overflow-hidden rounded-xl">
											<div className="flex w-1/2 items-center justify-center bg-[#DC3545] p-2 text-white hover:cursor-pointer hover:brightness-105">
												<Trash />
											</div>
											<div className="flex w-1/2 items-center justify-center bg-[#FFCB05] p-2 text-white hover:cursor-pointer hover:brightness-105">
												<Edit />
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Ali43irwww_90</td>
									<td>Ali43irwww_90@gmail.com</td>
									<td>
										<div className="mx-auto flex w-[100px] items-center justify-center rounded-lg bg-red-600 py-2 text-lg text-white hover:brightness-105">
											غیر فعال
										</div>
									</td>
									<td>Writer</td>
									<td>123ali@azar</td>
									<td>
										<div className="flex flex-row overflow-hidden rounded-xl">
											<div className="flex w-1/2 items-center justify-center bg-[#DC3545] p-2 text-white hover:cursor-pointer hover:brightness-105">
												<Trash />
											</div>
											<div className="flex w-1/2 items-center justify-center bg-[#FFCB05] p-2 text-white hover:cursor-pointer hover:brightness-105">
												<Edit />
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}
