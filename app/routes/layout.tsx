import { Outlet } from "react-router";

const Layout = () => {
	return (
		<div className="w-full h-full mt-20 overflow-hidden">
			<Outlet />
		</div>
	);
};

export default Layout;
