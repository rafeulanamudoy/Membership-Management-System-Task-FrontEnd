import DashNavBar from "../components/dashboard/DashNavbar";
import DashSideBar from "../components/dashboard/DashSidebar";
import { decodeUserCookie } from "../lib/actions/cookies";
import { ENUM_USER_ROLE } from "../types/Iuser";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = (await decodeUserCookie("accessToken")) || null;

  return (
    <section className={`flex flex-row-reverse `}>
      <div className="w-full bg-[#d8dcdd]">
        <DashNavBar />

        <div className="h-auto">{children}</div>
      </div>
      <div className="h-screen">
        <DashSideBar role={user?.role || ENUM_USER_ROLE.DEFAULT} />
      </div>
    </section>
  );
}
