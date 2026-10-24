
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
      bg-black/60 backdrop-blur-sm p-4"
      onClick={closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-2xl max-h-[85vh]
        flex-col overflow-hidden rounded-2xl border border-white/10
        bg-gradient-to-l from-midnight to-navy shadow-2xl"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Image Section */}
        <div className="relative w-full shrink-0">
          <img
            src={image}
            alt={title}
            className="block w-full max-h-[30vh] object-contain
            bg-black/20"
          />

          {/* Close Button */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close project details"
            className="absolute right-3 top-3 z-20 flex h-10 w-10
            items-center justify-center rounded-full
            border border-white/20 bg-black/80 text-white
            shadow-lg backdrop-blur-md transition
            hover:bg-red-500 focus:outline-none
            focus:ring-2 focus:ring-white"
          >
            <img
              src="src/assets/close.svg"
              alt=""
              className="h-5 w-5 invert"
            />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
          <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
            {title}
          </h2>

          <p className="mb-4 text-sm leading-6 text-neutral-300 sm:text-base">
            {description}
          </p>

          <div className="space-y-3">
            {subDescription.map((subDesc, index) => (
              <p
                key={`${index}-${subDesc.slice(0, 20)}`}
                className="text-sm leading-6 text-neutral-400 sm:text-base"
              >
                {subDesc}
              </p>
            ))}
          </div>

          {/* Technologies and Project Link */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="h-9 w-9 rounded-lg object-contain
                  transition-transform hover:scale-110"
                />
              ))}
            </div>

            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2
                font-medium text-white transition-colors
                hover:text-cyan-400"
              >
                View Project
                <img
                  src="/src/assets/arrow-up.svg"
                  alt=""
                  className="h-4 w-4"
                />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

