import project_agreement from "../assets/files/project_agreement.pdf";

export default function ProjectAgreement() {
  return (
    <div className="mt-40 w-full flex flex-col items-center mb-20 px-4">
      <div className="flex flex-col items-center justify-center mb-20">
        <h1 className="text-orange-500 font-bold text-4xl mb-5">
          Hợp đồng thành lập nhóm
        </h1>
        <p className="text-justify text-lg max-w-4xl">
          Nhằm đảm bảo quá trình thực hiện đồ án hiệu quả và có tổ chức, các
          thành viên trong nhóm thống nhất xây dựng hợp đồng làm việc nhóm. Hợp
          đồng này quy định rõ nguyên tắc làm việc, trách nhiệm của từng thành
          viên, cũng như cơ chế phối hợp và đánh giá trong suốt quá trình thực
          hiện dự án. Tất cả thành viên cam kết tuân thủ các nội dung đã đề ra.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4">
        <iframe
          src={project_agreement}
          className="w-full h-[90vh] rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
