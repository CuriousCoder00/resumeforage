export const HowItWorks = () => (
  <section id="how-it-works" className="w-full py-20 lg:py-40 sm:px-12 px-4 max-w-screen-xl">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end  gap-10">
        <div className="flex gap-4 flex-col items-start justify-start h-full">
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              How It Works?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight dark:text-slate-100 text-slate-900 text-left">
              Your Resume Transformation in 3 Simple Steps
            </p>
          </div>
        </div>
        <div className="w-full max-w-full px-6 space-y-3">
          Upload Your Resume or Start Fresh
          <br /> Begin by uploading your existing resume or starting from
          scratch with our easy-to-use editor.
          <br />
          Analyze & Optimize
          <br /> Our AI scans your resume and compares it with the job
          description to enhance keywords, structure, and formatting for maximum
          ATS compatibility.
          <br />
          Download & Apply
          <br /> Download your tailored resume in seconds and start applying to
          your dream jobs with confidence.
        </div>
      </div>
    </div>
  </section>
);
