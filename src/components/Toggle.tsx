const Toggle = () => {
	return (
		<div className="mr-3  rounded-full inline-flex items-center gap-2">
			<label className="switch-component-on text-gray-50 text-sm cursor-pointer">☀️</label>

			<div className="relative inline-block w-11 h-5">
				<input id="switch-component-on" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-gray-800  cursor-pointer transition-colors duration-300" />
				<label className="switch-component-on absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
				</label>
			</div>

			<label className="switch-component-on text-gray-50 text-sm cursor-pointer">🌒</label>
		</div>
	)
}

export default Toggle;
