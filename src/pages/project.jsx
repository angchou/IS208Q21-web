import { FaRegLightbulb } from "react-icons/fa";
import { PiSpeakerHigh } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";

import image1 from "../assets/project/image1.png";
import image2 from "../assets/project/image2.png";
import image3 from "../assets/project/image3.png";
import image4 from "../assets/project/image4.png";

export default function Project() {
  const items = [
    {
      name: "TỔNG QUAN",
      icon: FaRegLightbulb,
      desc: "​Nền tảng số hóa toàn diện quy trình vận hành, bán hàng và quản lý kho chuyên biệt cho chuỗi cà phê.",
      color: "bg-[#091b3b]",
      text_color: "text-white",
    },
    {
      name: "MỤC TIÊU DỰ ÁN",
      icon: PiSpeakerHigh,
      desc: "Tối ưu hóa quy trình phục vụ, giảm thiểu sai sót và cung cấp dữ liệu trực quan để ra quyết định chiến lược.",
      color: "bg-gray-400",
      text_color: "text-white",
    },
    {
      name: "TÍNH NĂNG CHÍNH",
      icon: IoChatbubbleEllipsesOutline,
      desc: "Quản lý tồn kho realtime, bán hàng tại quầy (POS), phân quyền thông minh và xuất báo cáo doanh thu tự động",
      color: "bg-[#4f8dff]",
      text_color: "text-white",
    },
    {
      name: "CÔNG NGHỆ SỬ DỤNG",
      icon: FaPencilAlt,
      desc: "Phát triển trên nền tảng web hiện đại, kiến trúc linh hoạt, bảo mật cao và tốc độ xử lý nhanh chóng.",
      color: "bg-[#ffd773]",
      text_color: "text-gray",
    },
  ];

  const sections = [
    {
      title: "Tổng quan",
      content: [
        "Được thiết kế chuyên biệt cho mô hình kinh doanh chuỗi, Hệ thống Quản lý Cửa hàng Cà phê giúp doanh nghiệp dễ dàng theo dõi lượng nguyên liệu tiêu thụ, kiểm soát dòng tiền và tối ưu quy trình phục vụ. Hệ thống được tích hợp tính năng phân quyền thông minh cùng các báo cáo chuyên sâu cho từng chi nhánh.",
        "Xây dựng trên nền tảng công nghệ hiệu suất cao và dễ dàng mở rộng, hệ thống đảm bảo tính đồng bộ và độ chính xác tuyệt đối của dữ liệu. Từ quản lý bảo mật đến phân tích kinh doanh, ứng dụng mang đến cái nhìn toàn cảnh giúp các nhà quản lý đưa ra quyết định nhanh chóng và hiệu quả.",
      ],
      img: image1,
    },
    {
      title: "Mục tiêu dự án",
      content: [
        "● Giảm tỷ lệ lãng phí nguyên liệu của các chi nhánh xuống mức <2%.",
        "● Tối ưu hóa quy trình quản lý, giúp giảm 50% thời gian thực hiện công tác kiểm kho.",
        "● Cung cấp hệ thống báo cáo doanh thu theo từng chi nhánh, được cập nhật theo thời gian thực (real-time).",
        "● Hỗ trợ tính năng tự động trừ kho nguyên liệu một cách chính xác dựa trên định mức công thức pha chế (recipe).",
      ],
      img: image2,
    },
    {
      title: "Tính năng chính",
      content: [
        <span className="font-bold text-yellow-300">
          Cho Quản lý / Ban giám đốc:
        </span>,
        "● Quản lý danh sách menu và thiết lập định mức nguyên liệu (công thức pha chế) cho từng sản phẩm.",
        "● Thực hiện các nghiệp vụ quản lý kho bao gồm: nhập hàng, xuất hàng và điều chuyển kho giữa các chi nhánh.",
        "● Kiểm kho và giám sát số liệu tồn kho, đảm bảo khớp số liệu giữa kho tổng và các chi nhánh.",
        "● Xem báo cáo doanh thu và tồn kho của từng chi nhánh theo thời gian thực.",
        <span className="font-bold text-yellow-300">
          Cho Nhân viên bán hàng (Thu ngân tại POS):
        </span>,
        "● Thực hiện các giao dịch bán hàng trực tiếp trên hệ thống POS.",
        "● Tự động trừ số lượng nguyên liệu trong kho theo đúng định mức công thức khi đơn hàng được tạo.",
        "● Lưu trữ tạm thời các giao dịch cục bộ trên máy POS khi cửa hàng bị mất kết nối mạng.",
        <span className="font-bold text-yellow-300">Hệ thống hỗ trợ:</span>,
        "● Sử dụng cơ sở dữ liệu (CSDL) tập trung, cho phép máy POS từ nhiều chi nhánh kết nối trực tiếp về trung tâm.",
        "● Cơ chế tự động đồng bộ hóa dữ liệu từ các máy POS offline về hệ thống trung tâm ngay khi có mạng trở lại.",
        "● Tối ưu hóa hiệu năng để POS xử lý giao dịch nhanh chóng dưới 2 giây, đảm bảo ổn định trong giờ cao điểm.",
        "● Cập nhật báo cáo doanh thu liên tục trong vòng 5 phút.",
      ],
      img: image3,
    },
    {
      title: "Công nghệ sử dụng",
      content: [
        "● Ngôn ngữ lập trình: Java (rất lý tưởng và mạnh mẽ để phát triển Desktop Application).",
        "● Cơ sở dữ liệu:",
        <span>
          <span className="text-transparent">OK</span>
          ⦾CSDL Trung tâm: Oracle Database để quản lý dữ liệu tập trung và chịu
          tải cho toàn chuỗi."
        </span>,
        <span>
          <span className="text-transparent">OK</span>
          ⦾CSDL Cục bộ tại POS: SQLite (hoặc giải pháp database nhẹ tương đương)
          để lưu trữ tạm thời các giao dịch tại quầy khi mất kết nối mạng.
        </span>,
        "● ​Mô hình kiến trúc: Client-Server kết hợp mô hình kiến trúc phần mềm MVC hoặc 3-tier (3 lớp).",
        "● Xử lý & Tích hợp: Các thư viện/công cụ hỗ trợ đồng bộ dữ liệu (Data Synchronization) qua mạng, xử lý đa luồng (Multithreading) để đảm bảo ứng dụng không bị treo và POS xử lý giao dịch < 2 giây.",
        "● Quản lý mã nguồn: GitHub hoặc GitLab.",
        "● Bảo mật: Phân quyền người dùng chặt chẽ (Ban giám đốc, Quản lý chi nhánh, Thu ngân), mã hóa dữ liệu trong quá trình truyền tải và đồng bộ giữa các POS và server.",
      ],
      img: image4,
    },
  ];

  return (
    <div className="mt-40 w-full flex flex-col items-center 20 px-4 mb-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-orange-500 font-bold text-4xl mb-5 max-w-xl text-center">
          Dự Án Hệ Thống Quản Lý Chuỗi Cửa Hàng Coffee
        </h1>
      </div>

      <div className="max-w-7xl grid md:grid-cols-4 mt-10">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="h-full">
              <div
                className={`h-full p-10 ${item.color} ${item.text_color} flex flex-col items-center`}
              >
                <Icon size={50} />

                <h2 className="text-xl font-bold mt-3 text-center">
                  {item.name}
                </h2>

                <p className="text-lg text-center mt-2">{item.desc}</p>

                <button className="pt-10 mt-auto">Đọc thêm &gt;</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl flex flex-col gap-6 p-8">
        {sections.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group"
          >
            <img
              src={item.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition"></div>

            <div className="relative z-10 p-10 py-15 text-white flex flex-col justify-center max-w-4xl h-full">
              <h1 className="text-3xl font-bold">{item.title}</h1>
              {item.content.map((cont, cindex) => (
                <p key={cindex} className="text-lg mt-2 opacity-90">
                  {cont}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
