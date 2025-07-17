import { Outlet } from "react-router";

const Layout = () => {
	return (
		<div className="mt-20">
			<Outlet />
		</div>
	);
};

export default Layout;
