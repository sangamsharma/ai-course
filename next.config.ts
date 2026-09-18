import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // --- Lessons that moved to a different parent module (specific paths first) ---
      { source: "/modules/ai-for-personal-documents/learning-and-research", destination: "/modules/the-art-of-asking/learning-and-research", permanent: true },
      { source: "/modules/ai-for-personal-documents/letters-and-forms", destination: "/modules/ai-for-everyday-tasks/letters-and-forms", permanent: true },
      { source: "/modules/ai-for-personal-documents/resume-writing", destination: "/modules/ai-for-your-business/resume-writing", permanent: true },
      { source: "/modules/ai-for-personal-documents/creative-writing", destination: "/modules/creative-and-multimodal/creative-writing", permanent: true },
      { source: "/modules/the-art-of-asking/ai-pipeline", destination: "/modules/advanced-prompting/ai-pipeline", permanent: true },
      { source: "/modules/travel-planning/packing-lists", destination: "/modules/ai-for-everyday-tasks/packing-lists", permanent: true },
      { source: "/modules/travel-planning/language-help", destination: "/modules/travel-extras/language-help", permanent: true },
      { source: "/modules/personal-finance/comparing-products", destination: "/modules/ai-for-everyday-tasks/comparing-products", permanent: true },
      { source: "/modules/personal-finance/financial-goals", destination: "/modules/ai-for-everyday-tasks/financial-goals", permanent: true },
      { source: "/modules/job-search/interview-prep", destination: "/modules/ai-for-your-business/interview-prep", permanent: true },
      { source: "/modules/health-wellness/doctor-visit-prep", destination: "/modules/health-wellness-extras/doctor-visit-prep", permanent: true },
      { source: "/modules/health-wellness/fitness-routines", destination: "/modules/health-wellness-extras/fitness-routines", permanent: true },
      { source: "/modules/creative-projects/speeches-toasts", destination: "/modules/creative-and-multimodal/speeches-toasts", permanent: true },
      { source: "/modules/creative-projects/creative-hobbies", destination: "/modules/creative-and-multimodal/creative-hobbies", permanent: true },

      // --- Whole old modules that were retired, merged, or renamed (wildcard fallback) ---
      { source: "/modules/personal-finance", destination: "/modules/ai-for-everyday-tasks", permanent: true },
      { source: "/modules/personal-finance/:path*", destination: "/modules/ai-for-everyday-tasks", permanent: true },
      { source: "/modules/travel-planning", destination: "/modules/ai-for-everyday-tasks", permanent: true },
      { source: "/modules/travel-planning/:path*", destination: "/modules/ai-for-everyday-tasks", permanent: true },
      { source: "/modules/health-wellness", destination: "/modules/health-wellness-extras", permanent: true },
      { source: "/modules/health-wellness/:path*", destination: "/modules/health-wellness-extras", permanent: true },
      { source: "/modules/job-search", destination: "/modules/ai-for-your-business", permanent: true },
      { source: "/modules/job-search/:path*", destination: "/modules/ai-for-your-business", permanent: true },
      { source: "/modules/creative-projects", destination: "/modules/creative-and-multimodal", permanent: true },
      { source: "/modules/creative-projects/:path*", destination: "/modules/creative-and-multimodal", permanent: true },
      { source: "/modules/ai-for-personal-documents", destination: "/modules/ai-for-your-business", permanent: true },
      { source: "/modules/ai-for-personal-documents/:path*", destination: "/modules/ai-for-your-business", permanent: true },

      // --- Empty stub modules that were removed from the catalog entirely ---
      { source: "/modules/small-business-ops", destination: "/modules", permanent: false },
      { source: "/modules/small-business-ops/:path*", destination: "/modules", permanent: false },
      { source: "/modules/digital-literacy", destination: "/modules", permanent: false },
      { source: "/modules/digital-literacy/:path*", destination: "/modules", permanent: false },
      { source: "/modules/civic-participation", destination: "/modules", permanent: false },
      { source: "/modules/civic-participation/:path*", destination: "/modules", permanent: false },
      { source: "/modules/education-tutoring", destination: "/modules", permanent: false },
      { source: "/modules/education-tutoring/:path*", destination: "/modules", permanent: false },
      { source: "/modules/legal-documents", destination: "/modules", permanent: false },
      { source: "/modules/legal-documents/:path*", destination: "/modules", permanent: false },
      { source: "/modules/senior-living", destination: "/modules", permanent: false },
      { source: "/modules/senior-living/:path*", destination: "/modules", permanent: false },

      // --- Microsoft 365 Copilot moved to the gated corporate training section ---
      { source: "/modules/microsoft-copilot", destination: "/corporate/microsoft-copilot", permanent: true },
      { source: "/modules/microsoft-copilot/:path*", destination: "/corporate/microsoft-copilot", permanent: true },
    ];
  },
};

export default nextConfig;
