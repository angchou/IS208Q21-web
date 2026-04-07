import lpn from "../assets/team/lpn.png";
import cga from "../assets/team/cga.png";
import chh from "../assets/team/chh.png";
import ntk from "../assets/team/ntk.png";

import { BsCheck2Circle } from "react-icons/bs";

export default function AboutUs() {
  const members = [
    {
      id: "lpn",
      image: lpn,
      name: "Lê Phong Nhã",
      role: "Trưởng nhóm",
      jobs: ["Project Manager", "Frontend Developer", "Data Analyst"],
      strength: [
        "Project Planning, Team Coordination",
        "Database",
        "C++, Java",
      ],
      desc: "Là một Quản lý Dự án nhiệt thành với nền tảng vững vàng về chiến lược và làm việc nhóm, Nhã luôn khao khát mang đến những giải pháp tối ưu nhất để nâng cao hiệu suất và chất lượng cho từng dự án đảm nhận.",
    },
    {
      id: "cga",
      image: cga,
      name: "Châu Gia An",
      role: "Phó nhóm",
      jobs: ["Fullstack Developer"],
      strength: ["Figma, CSS", "Database", "C++, Java"],
      desc: "Không chỉ dừng lại ở việc thiết kế các hệ thống hiệu suất cao và dễ dàng mở rộng, An còn liên tục học hỏi để chinh phục những nấc thang mới trong lĩnh vực phát triển fullstack.",
    },
    {
      id: "chh",
      image: chh,
      name: "Châu Hải Hàm",
      role: "Thư ký",
      jobs: ["Business Analyst", "Tester", "Data Analyst"],
      strength: ["PowerBI, Excel", "Database", "C++, Java"],
      desc: "Kết hợp nhạy bén giữa phân tích dữ liệu và nghiệp vụ, Hàm luôn đảm bảo mọi hệ thống đều được kiểm thử khắt khe để tạo ra những giải pháp công nghệ hoàn hảo.",
    },
    {
      id: "ntk",
      image: ntk,
      name: "Nguyễn Thành Khang",
      role: "Thành viên",
      jobs: ["Business Analyst", "Tester"],
      strength: ["PowerBI", "Database", "C++, Java"],
      desc: "Là cầu nối giữa yêu cầu khách hàng và chất lượng hệ thống, Khang kết hợp khéo léo vai trò BA và Tester để mang đến những giải pháp công nghệ hoàn thiện và không tì vết.",
    },
  ];

  return (
    <div className="mt-40 w-full flex flex-col items-center mb-20 px-4 cursor-default">
      <div className="flex flex-col items-center justify-center mb-20">
        <h1 className="text-orange-500 font-bold text-4xl mb-5">
          Về chúng tôi
        </h1>
        <p className="text-justify text-lg max-w-3xl">
          Hãy gặp gỡ đội ngũ{" "}
          <span className="text-orange-500 font-semibold">404NotFound</span> của
          chúng tôi, những người luôn nỗ lực không ngừng để biến những ý tưởng
          tưởng chừng "mất tích" thành hiện thực. Với chúng tôi, không có rào
          cản nào là không thể vượt qua để tạo ra những sản phẩm và kết quả xuất
          sắc nhất.
        </p>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center w-full max-w-4xl p-5">
        {members.map((member) => (
          <div
            key={member.id}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 mb-10 w-full"
          >
            <div className="col-span-1 md:col-span-2 relative group z-0 w-full max-w-sm mx-auto">
              <img
                src={member.image}
                alt=""
                className="rounded-xl w-full h-auto object-cover"
              />

              <span className="absolute inset-0 border-[4px] border-blue-400 rounded-xl -z-10  translate-x-3 translate-y-3 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="absolute inset-0 border-[4px] border-orange-500 rounded-xl z-10  -translate-x-3 -translate-y-3 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            </div>

            <div className="col-span-1 md:col-span-3 text-center md:text-left">
              <h2 className="text-xl font-semibold">{member.role}</h2>
              <h1 className="text-2xl font-bold">{member.name}</h1>

              <div className="flex flex-wrap gap-2 my-4 justify-center md:justify-start">
                {member.jobs.map((job, index) => (
                  <span
                    key={index}
                    className="bg-[#ffa257] py-1 px-3 rounded-xl font-semibold text-white"
                  >
                    {job}
                  </span>
                ))}
              </div>

              <p className="text-justify leading-relaxed text-sm md:text-base">
                {member.desc}
              </p>

              <ul className="mt-3 space-y-1">
                {member.strength.map((str, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <BsCheck2Circle className="text-orange-500 mt-1" />
                    <li>{str}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
