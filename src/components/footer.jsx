import { NavLink } from "react-router-dom";

export default function Footer() {
  const items = [
    { id: "about_us", label: "Về chúng tôi", path: "/about_us" },
    { id: "project", label: "Dự án", path: "/project" },
    { id: "progress", label: "Tiến độ", path: "/progress" },
    {
      id: "project_agreement",
      label: "Thỏa thuận dự án",
      path: "/project_agreement",
    },
  ];

  return (
    <footer className="bg-black flex flex-col justify-center items-center py-15">
      <div className="max-w-5xl text-white grid md:grid-cols-3">
        <div className="flex flex-col justify-center mb-10">
          <img src="src\assets\uit_logo.png" alt="" className="w-70 mb-5" />
          <h1 className="font-bold text-orange-500 mb-2">404NotFound</h1>
          <p>Even when the link breaks,</p>
          <p>our connection doesn't.</p>
        </div>

        <div className="flex flex-col justify-center mb-10">
          <h1 className="font-semibold text-orange-500 mb-3">Truy cập nhanh</h1>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-orange-500 ${
                      isActive ? "text-orange-500 font-semibold" : "text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center mb-10">
          <h1 className="font-semibold text-orange-500 mb-3">Giới thiệu</h1>
          <p>Địa chỉ: Khu phố 34, Phường Linh Xuân, Thành phố Hồ Chí Minh.</p>
          <p>Phone: (+84) 769 338 271</p>
          <p>Email: 24520445@gm.uit.edu.vn</p>
        </div>
      </div>
    </footer>
  );
}
