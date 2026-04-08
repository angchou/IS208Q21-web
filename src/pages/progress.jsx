import { useState } from "react";
import { VscFiles } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";

// Progress 1
import BienBan1 from "../assets/files/progress1/BienBan1.pdf";
import BusinessCase from "../assets/files/progress1/BusinessCase.pdf";
import PhanCong1 from "../assets/files/progress1/PhanCong1.pdf";
import ProjectCharter from "../assets/files/progress1/ProjectCharter.pdf";
import SOW from "../assets/files/progress1/SOW.pdf";

// Progress 2
import DanhSachHoatDong from "../assets/files/progress2/DanhSachHoatDong.pdf";
import KhungDuAn from "../assets/files/progress2/KhungDuAn.pdf";
import MoTaPhuongAn from "../assets/files/progress2/MoTaPhuongAn.pdf";
import PhanCong2 from "../assets/files/progress2/PhanCong2.pdf";
import BienBan2 from "../assets/files/progress2/BienBan2.pdf";
import DanhSachTaiNguyen from "../assets/files/progress2/DanhSachTaiNguyen.pdf";
import PDM from "../assets/files/progress2/PDM.pdf";
import WBS from "../assets/files/progress2/WBS_Gantt.pdf";
import YeuCauChucNang from "../assets/files/progress2/YeuCauChucNang.pdf";

export default function Progress() {
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    {
      title: "Khởi động dự án",
      time: "05-03-2026",
      desc: "​Đội ngũ dự án đã được phân công vai trò và trách nhiệm ban đầu.",
      detail_desc: (
        <div className="text-lg">
          <span className="font-bold">Mô tả</span>: Khởi động dự án (05-03-2026)
        </div>
      ),
      todo: [
        "Họp bắt đầu dự án",
        "Phân chia công việc",
        "Xác định các công nghệ, môi trường sử dụng",
        "Xây dựng SOW, Business Case",
        "Thiết lập Project Charter",
        "Khảo sát hiện trạng",
      ],
      links: [
        {
          name: "Statement Of Work",
          file: SOW,
        },
        {
          name: "Project Charter",
          file: ProjectCharter,
        },
        {
          name: "Business Case",
          file: BusinessCase,
        },
        {
          name: "Phân công công việc",
          file: PhanCong1,
        },
        {
          name: "Biên bản họp nhóm",
          file: BienBan1,
        },
      ],
    },
    {
      title: "Khảo sát và phân tích thiết kế hệ thống",
      time: "18-03-2026",
      desc: "​Đội ngũ dự án đã được phân công vai trò và trách nhiệm ban đầu.",
      detail_desc: (
        <div className="text-lg">
          <span className="font-bold">Mô tả</span>: Khảo sát và phân tích thiết
          kế (18-03-2026)
        </div>
      ),
      todo: [
        "Họp chỉnh sửa nội dung",
        "Phân chia công việc",
        "Xác định phương án",
        "Xây dựng WBS, Activity, Biểu đồ Gantt",
        "Thiết lập khung dự án",
        "Xác định yêu cầu chức năng, phi chức năng",
      ],
      links: [
        {
          name: "Danh sách hoạt động",
          file: DanhSachHoatDong,
        },
        {
          name: "Khung dự án",
          file: KhungDuAn,
        },
        {
          name: "Mô tả phương án",
          file: MoTaPhuongAn,
        },
        {
          name: "Phân công công việc",
          file: PhanCong2,
        },
        {
          name: "Biên bản họp nhóm",
          file: BienBan2,
        },
        {
          name: "Danh sách tài nguyên",
          file: DanhSachTaiNguyen,
        },
        {
          name: "PDM",
          file: PDM,
        },
        {
          name: "WBS, Biểu đồ Gantt, Critical Path",
          file: WBS,
        },
        {
          name: "Yêu cầu chức năng, phi chức năng",
          file: YeuCauChucNang,
        },
      ],
    },
  ];

  return (
    <>
      <div className="px-4 md:px-[148px] pt-32 pb-20 bg-gray-50 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-16 text-center">Lộ trình dự án</h1>

        <div className="relative w-full">
          {/* Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-orange-300 -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`cursor-default relative flex flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 w-4 h-4 bg-orange-500 rounded-full -translate-x-1/2 z-1"></div>

                <div className="w-full md:w-1/2 flex justify-center md:px-4">
                  <div
                    className={`cursor-pointer max-w-md w-full bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                    ${
                      index % 2 === 0
                        ? "md:ml-auto md:pr-8"
                        : "md:mr-auto md:pl-8"
                    }
                    `}
                    onClick={() => setSelectedStep(step)}
                  >
                    <span className="text-sm text-orange-500 font-semibold">
                      {step.time}
                    </span>

                    <h3 className="text-xl font-bold mt-2 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-gray-600">{step.desc}</p>

                    <div className="flex gap-2 mt-5 items-center">
                      <VscFiles className="text-orange-500 size-5" />
                      <span className="text-orange-500 font-semibold">
                        Click to view detail
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedStep && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-2">
          <div className="bg-white rounded-2xl max-w-2xl w-full relative animate-fadeIn max-h-[90vh] flex flex-col">
            <div className="w-full bg-[#ED7542] p-6 rounded-t-2xl text-white shrink-0">
              <IoCloseSharp
                onClick={() => setSelectedStep(null)}
                className="absolute top-3 right-3 hover:rotate-10 size-7"
              />

              <div className="flex gap-3 mb-2">
                <FaRegCalendarCheck className="size-5 text-white" />
                <span className="font-bold">{selectedStep.time}</span>
              </div>
              <span className="font-bold text-xl">{selectedStep.title}</span>
            </div>

            <div className="w-full p-6 rounded-b-2xl text-black overflow-y-auto">
              {selectedStep.detail_desc}

              <div className="flex flex-col">
                <div className="flex gap-3 mt-4">
                  <SlNote className="text-orange-500 size-6 mt-1" />
                  <span className="font-semibold text-lg text-[#ED7542]">
                    To-do list
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                  {selectedStep.todo.map((td, index) => (
                    <div key={index} className="flex gap-3">
                      <IoCheckmarkDone className="size-6 text-green-600 shrink-0" />
                      <span>{td}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <div className="flex gap-3">
                  <FaLink className="text-orange-500 size-6 mt-1" />
                  <span className="font-semibold text-lg text-[#ED7542]">
                    Tài liệu liên quan
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                  {selectedStep.links.map((link, index) => (
                    <div key={index}>
                      <button
                        className="flex gap-3 items-center shadow-md w-full h-full p-2 rounded-lg hover:shadow-lg cursor-pointer"
                        onClick={() => window.open(link.file)}
                      >
                        <CiFileOn className="size-5 text-green-600 shrink-0 mb-1" />
                        <span className="text-left">{link.name}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
