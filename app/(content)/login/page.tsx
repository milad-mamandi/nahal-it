export default function Login() {
	return (
		<div className="mx-12 mt-12 flex h-[480px] flex-row items-start justify-between gap-12 rounded-2xl bg-nahal-green px-16 py-12">
			<div className="flex w-1/2 flex-col items-center justify-center gap-6 font-bold">
				<div className="text-2xl font-bold text-white">ورود</div>
				<input
					type="email"
					placeholder="ایمیل خود را وارد کنید"
					className="w-full rounded-lg border-0 p-3 outline-none"
				/>
				<input
					type="password"
					placeholder="رمز خود را وارد کنید"
					className="w-full rounded-lg border-0 p-3 outline-none"
				/>
				<button className="w-full rounded-lg bg-[#D9D9D9] p-3 text-lg text-black hover:brightness-110">
					ورود
				</button>
			</div>
			<div className="h-full w-[2px] bg-white"></div>
			<div className="flex w-1/2 flex-col items-center justify-center gap-6 font-bold">
				<div className="text-2xl font-bold text-white">ثبت نام</div>
				<input
					type="text"
					placeholder="نام کاربری خود را وارد کنید"
					className="w-full rounded-lg border-0 p-3 outline-none"
				/>
				<input
					type="email"
					placeholder="ایمیل خود را وارد کنید"
					className="w-full rounded-lg border-0 p-3 outline-none"
				/>
				<input
					type="password"
					placeholder="رمز خود را وارد کنید"
					className="w-full rounded-lg border-0 p-3 outline-none"
				/>
				<button className="w-full rounded-lg bg-[#D9D9D9] p-3 text-lg text-black hover:brightness-110">
					ثبت نام
				</button>
			</div>
		</div>
	);
}
