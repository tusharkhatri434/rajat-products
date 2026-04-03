export default function SubProductCard({ subProduct }) {
  return (
    <div
      className="
        group h-full flex flex-col cursor-pointer
        bg-white
        border-[1.5px] border-gray-500
        rounded-[10px]
        p-5

        shadow-[-8px_0px_0px_#6B7280]
        hover:shadow-[-12px_0px_0px_#6B7280]

        hover:-translate-x-[4px] hover:-translate-y-[4px]
        transition-all duration-200
      "
    >
      {/* Title */}
      <h3
        className="
          text-[16px] font-extrabold text-black
          mb-3 leading-tight tracking-wide uppercase
        "
      >
        {subProduct.name}
      </h3>

      {/* Description */}
      {subProduct.short_description && (
        <p
          className="
            text-[13px] text-[#3F3F3F]
            leading-relaxed mb-4 grow
          "
        >
          {subProduct.short_description}
        </p>
      )}

      {/* Bottom */}
      <div
        className="
          mt-auto flex items-center
          text-[12px] font-bold text-gray-500
          gap-1 group-hover:gap-2 transition-all
        "
      >
        <span>Specifications</span>
        <span className="text-[14px] font-black">›</span>
      </div>
    </div>
  );
}