import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, ShieldCheck, X, FileText, Lock, Users, Eye, Scale, FileCheck, Globe, AlertTriangle } from "lucide-react";
import Footer from "../components/Footer";

export default function Contact() {
  const [countryCode, setCountryCode] = useState("+91");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "loan",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const formData = new FormData();

      formData.append("entry.709760320", formState.name);
      formData.append("entry.1843571188", formState.email);
      formData.append(
        "entry.21724035",
        `${countryCode} ${formState.phone}`
      );
      formData.append(
        "entry.2811390",
        formState.service === "loan"
          ? "Loan Solutions & Borrowing Channels"
          : formState.service === "insurance"
            ? "Insurance Plans & Wealth Protection"
            : "Digital Marketing & Performance Growth"
      );
      formData.append(
        "entry.1800551029",
        formState.message
      );

      console.log("===== GOOGLE FORM SUBMISSION =====");

for (const pair of formData.entries()) {
  console.log(pair[0], ":", pair[1]);
}

console.log(
  "POST URL:",
  "https://docs.google.com/forms/d/e/1FAIpQLScF7tOJklIexqzJTkA1_Zj3ccohbvpRj6tn6l6qWvWfxEVupg/formResponse"
);

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScF7tOJklIexqzJTkA1_Zj3ccohbvpRj6tn6l6qWvWfxEVupg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      console.log("Google Form request completed");

      setIsSubmitted(true);

      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "loan",
        message: "",
        consent: false,
      });

    } catch (error) {
      setSubmissionError(
        "Unable to submit. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isOfficeOpen = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const currentTime = hours + minutes / 60;
    return currentTime >= 9 && currentTime <= 18.5;
  };

  const isFormValid = () => {
    return (
      formState.name.trim() !== "" &&
      formState.email.trim() !== "" &&
      formState.phone.trim() !== "" &&
      formState.phone.length === 10 &&
      formState.message.trim() !== "" &&
      formState.consent === true
    );
  };

  // Modal Components
  const PrivacyPolicyModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#0B132B] to-[#1a2a4a] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#00A896]" />
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] space-y-6 text-slate-600">
          <div className="text-sm text-slate-500 italic border-b border-slate-200 pb-4">
            <p>Last Updated: 16/06/2026</p>
          </div>

          <p className="text-sm leading-relaxed">
            At <span className="font-semibold text-[#0B132B]">Fintrust Financial Services</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our financial services.
          </p>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#00A896]" />
              1. Information We Collect
            </h3>
            <div className="space-y-2 text-sm pl-6">
              <p className="font-semibold text-[#0B132B]">a) Personal Information</p>
              <p className="leading-relaxed">We may collect personal information that you voluntarily provide, including:</p>
              <ul className="space-y-1 list-disc pl-6">
                <li>Full Name</li>
                <li>Mobile Number</li>
                <li>Email Address</li>
                <li>Residential/Business Address</li>
                <li>Date of Birth</li>
                <li>PAN Card Details</li>
                <li>Aadhaar Details (where legally permitted)</li>
                <li>Income and Employment Information</li>
                <li>Bank Statements and Financial Documents</li>
                <li>Any information submitted through forms, emails, WhatsApp, or phone calls</li>
              </ul>
              <p className="font-semibold text-[#0B132B] mt-2">b) Automatically Collected Information</p>
              <p className="leading-relaxed">When you visit our website, we may collect:</p>
              <ul className="space-y-1 list-disc pl-6">
                <li>IP Address</li>
                <li>Browser Type</li>
                <li>Device Information</li>
                <li>Operating System</li>
                <li>Website Usage Data</li>
                <li>Cookies and Analytics Information</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#00A896]" />
              2. How We Use Your Information
            </h3>
            <p className="text-sm leading-relaxed pl-6">We use your information to:</p>
            <ul className="space-y-1 text-sm list-disc pl-6">
              <li>Process loan and financial service inquiries</li>
              <li>Evaluate eligibility for financial products</li>
              <li>Coordinate with banks, NBFCs, insurance providers, and financial institutions</li>
              <li>Communicate regarding applications and services</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Send service-related updates and promotional communications (with your consent)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00A896]" />
              3. Data Sharing & Disclosure
            </h3>
            <ul className="space-y-1 text-sm list-disc pl-6">
              <li>Fintrust does not sell, rent, or trade your personal information.</li>
              <li>We may share information with:</li>
              <ul className="space-y-1 list-disc pl-6">
                <li>Banks and Financial Institutions</li>
                <li>NBFCs and Lending Partners</li>
                <li>Insurance Companies</li>
                <li>Verification Agencies</li>
                <li>Legal and Regulatory Authorities</li>
                <li>Technology and Service Providers assisting our operations</li>
              </ul>
              <li>Information may also be disclosed when required by law or to protect our legal rights.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#00A896]" />
              4. Cookies & Tracking Technologies
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              Our website may use cookies and similar technologies to improve website functionality, analyze website traffic, enhance user experience, and measure marketing effectiveness. You may disable cookies through your browser settings; however, some website features may not function properly.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#00A896]" />
              5. Data Security
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              We implement reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, loss, misuse, or disclosure. However, no internet transmission or storage system can be guaranteed to be 100% secure.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#00A896]" />
              6. Data Retention
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              We retain personal information only for as long as necessary to provide our services, meet legal and regulatory obligations, resolve disputes, and enforce agreements.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00A896]" />
              7. Your Rights
            </h3>
            <p className="text-sm leading-relaxed pl-6">Subject to applicable laws, you may have the right to:</p>
            <ul className="space-y-1 text-sm list-disc pl-6">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent where applicable</li>
              <li>Opt out of promotional communications</li>
            </ul>
            <p className="text-sm leading-relaxed pl-6 mt-2">
              To exercise these rights, please contact us using the details below.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#00A896]" />
              8. Third-Party Links
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices, content, or policies of such external websites.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#00A896]" />
              9. Changes to This Privacy Policy
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00A896]" />
              10. Contact Us
            </h3>
            <div className="pl-6 space-y-1">
              <p className="text-sm font-semibold text-[#0B132B]">Fintrust Financial Services</p>
              <p className="text-sm">Mobile: <a href="tel:+919167070916" className="text-[#00A896] hover:underline">+91 91670 70916</a></p>
              <p className="text-sm">Email: <a href="mailto:support@fintrustindia.com" className="text-[#00A896] hover:underline">support@fintrustindia.com</a></p>
              <p className="text-sm leading-relaxed mt-2">
                If you have any questions regarding this Privacy Policy, please contact us using the details above.
              </p>
              <p className="text-sm italic text-slate-500 mt-2">
                This version is suitable for a loan, insurance, and financial services website and looks professional for website publication.
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="w-full py-3 bg-[#0B132B] text-white rounded-xl font-semibold hover:bg-[#00A896] transition-colors"
          >
            I Understand
          </button>
        </div>
      </motion.div>
    </div>
  );

  const TermsModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#0B132B] to-[#1a2a4a] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#00A896]" />
            <h2 className="text-xl font-semibold">Terms & Conditions</h2>
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] space-y-6 text-slate-600">
          <div className="text-sm text-slate-500 italic border-b border-slate-200 pb-4">
            <p>Last Updated: 16/06/2026</p>
          </div>

          <p className="text-sm leading-relaxed">
            Welcome to <span className="font-semibold text-[#0B132B]">Fintrust Financial Services</span> ("Fintrust", "we", "our", or "us"). By accessing or using our website and services, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree with these terms, please refrain from using our website or services.
          </p>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#00A896]" />
              1. Acceptance of Terms
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              By accessing this website, submitting an inquiry, or using any of our services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#00A896]" />
              2. Services
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              Fintrust Financial Services acts as a financial services facilitator and consultant providing assistance for:
            </p>
            <ul className="space-y-1 text-sm list-disc pl-10">
              <li>Personal Loans</li>
              <li>Business Loans</li>
              <li>Unsecured Loans</li>
              <li>Home Loans</li>
              <li>Loan Against Property (LAP)</li>
              <li>Working Capital Finance</li>
              <li>Insurance Solutions</li>
              <li>Credit Card Assistance</li>
              <li>Other financial products offered through partner banks, NBFCs, insurance companies, and financial institutions</li>
            </ul>
            <p className="text-sm leading-relaxed pl-6 mt-2">
              Approval of any loan, insurance policy, or financial product is solely at the discretion of the respective lender, insurer, or service provider.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00A896]" />
              3. User Responsibilities
            </h3>
            <p className="text-sm leading-relaxed pl-6">You agree to:</p>
            <ul className="space-y-1 text-sm list-disc pl-10">
              <li>Provide accurate, complete, and truthful information.</li>
              <li>Submit genuine documents and financial records.</li>
              <li>Cooperate during verification and assessment processes.</li>
              <li>Use the website only for lawful purposes.</li>
              <li>Not engage in any activity that may harm the website, its systems, or its users.</li>
              <li>Comply with all applicable laws and regulations.</li>
            </ul>
            <p className="text-sm leading-relaxed pl-6 mt-2">
              Providing false, misleading, or fraudulent information may result in rejection of services and legal action where applicable.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00A896]" />
              4. No Guarantee of Approval
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              Fintrust Financial Services does not guarantee:
            </p>
            <ul className="space-y-1 text-sm list-disc pl-10">
              <li>Loan approval</li>
              <li>Insurance policy issuance</li>
              <li>Interest rates</li>
              <li>Loan amounts</li>
              <li>Processing timelines</li>
              <li>Eligibility outcomes</li>
            </ul>
            <p className="text-sm leading-relaxed pl-6 mt-2">
              All approvals, terms, conditions, rates, and decisions are determined solely by the respective banks, NBFCs, insurance companies, or financial institutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#00A896]" />
              5. Fees & Charges
            </h3>
            <ul className="space-y-1 text-sm list-disc pl-6">
              <li>Any applicable professional, consultation, processing, documentation, or service fees will be communicated separately before engagement.</li>
              <li>Fintrust Financial Services reserves the right to revise its fees and charges at any time without prior notice.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#00A896]" />
              6. Intellectual Property
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              All content available on this website, including but not limited to text, graphics, logos, images, designs, software, trademarks, and website content and layout, is the property of Fintrust Financial Services unless otherwise stated and may not be copied, reproduced, distributed, modified, or used without prior written permission.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#00A896]" />
              7. Limitation of Liability
            </h3>
            <p className="text-sm leading-relaxed pl-6">
              To the fullest extent permitted by applicable law, Fintrust Financial Services shall not be liable for:
            </p>
            <ul className="space-y-1 text-sm list-disc pl-10">
              <li>Loan rejections</li>
              <li>Insurance claim rejections</li>
              <li>Delays by lenders, insurers, or service providers</li>
              <li>Financial losses or business losses</li>
              <li>Data transmission interruptions</li>
              <li>Website downtime or technical issues</li>
              <li>Indirect, incidental, special, punitive, or consequential damages</li>
            </ul>
            <p className="text-sm leading-relaxed pl-6 mt-2">
              Users rely upon the information and services provided through the website at their own discretion and risk.
            </p>
            <p className="text-sm leading-relaxed pl-6 mt-2">
              Our total liability, if any, shall be limited to the amount of fees paid directly to Fintrust Financial Services for the relevant service.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#00A896]" />
              8. Third-Party Services & Links
            </h3>
            <ul className="space-y-1 text-sm list-disc pl-6">
              <li>Our website may contain links to third-party websites, lenders, insurers, banks, NBFCs, and service providers.</li>
              <li>Fintrust Financial Services is not responsible for third-party content, privacy policies, products or services offered, website availability, decisions made by lenders or insurers, or accuracy of information provided by third parties.</li>
              <li>Users are advised to review the terms, conditions, and privacy policies of such third-party providers before engaging with them.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00A896]" />
              9. Privacy Policy
            </h3>
            <ul className="space-y-1 text-sm list-disc pl-6">
              <li>Your use of our website and services is also governed by our Privacy Policy.</li>
              <li>By using our website or services, you consent to the collection, storage, and use of your information as described in our Privacy Policy.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#00A896]" />
              10. Changes to Terms & Conditions
            </h3>
            <ul className="space-y-1 text-sm list-disc pl-6">
              <li>Fintrust Financial Services reserves the right to update, modify, amend, or revise these Terms & Conditions at any time without prior notice.</li>
              <li>Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the website after such changes constitutes acceptance of the revised Terms & Conditions.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#00A896]" />
              11. Governing Law & Jurisdiction
            </h3>
            <ul className="space-y-1 text-sm list-disc pl-6">
              <li>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.</li>
              <li>Any disputes arising from or relating to these Terms & Conditions, the website, or services provided by Fintrust Financial Services shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#00A896]" />
              12. Disclaimer
            </h3>
            <ul className="space-y-1 text-sm list-disc pl-6">
              <li>Fintrust Financial Services acts solely as a facilitator, consultant, and advisor for financial products offered by banks, NBFCs, insurance companies, and other financial institutions.</li>
              <li>Fintrust Financial Services is not a lender, bank, NBFC, or insurance company.</li>
              <li>Approval, rejection, interest rates, loan amounts, tenure, premiums, and other terms are determined solely by the respective financial institution.</li>
              <li>Information provided on this website is for general informational purposes only and should not be considered financial, legal, tax, or investment advice.</li>
              <li>Users are encouraged to independently verify all product details, charges, benefits, and terms before making any financial decision.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0B132B] mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00A896]" />
              13. Contact Us
            </h3>
            <div className="pl-6 space-y-1">
              <p className="text-sm font-semibold text-[#0B132B]">Fintrust Financial Services</p>
              <p className="text-sm">Mobile: <a href="tel:+919167070916" className="text-[#00A896] hover:underline">+91 91670 70916</a></p>
              <p className="text-sm">Email: <a href="mailto:support@fintrustindia.com" className="text-[#00A896] hover:underline">support@fintrustindia.com</a></p>
              <p className="text-sm leading-relaxed mt-2">
                For any questions, concerns, or inquiries regarding these Terms & Conditions, please contact us using the details provided above.
              </p>
              <p className="text-sm text-slate-500 italic mt-2">
                © 2026 Fintrust Financial Services. All Rights Reserved.
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="w-full py-3 bg-[#0B132B] text-white rounded-xl font-semibold hover:bg-[#00A896] transition-colors"
          >
            I Agree to the Terms
          </button>
        </div>
      </motion.div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen pt-32 pb-24 px-6 lg:px-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT COLUMN: Corporate Information Architecture */}
          <div className="lg:col-span-5 space-y-10 lg:sticky top-32">
            <div className="space-y-4">
              <span className="text-[11px] font-bold tracking-super-wide text-brand-gold uppercase block">
                Connect With Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-brand-navy leading-none">
                Let's build your <br />
                <span className="font-semibold text-brand-blue">growth roadmap.</span>
              </h1>
              <p className="text-slate-500 font-light text-sm max-w-sm leading-relaxed">
                Simple, transparent procedures. Reach out directly to initiate premium financial scaling or dynamic marketing framework mapping.
              </p>
            </div>

            {/* Real-time Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-sm border border-slate-200/40 text-xs font-light">
              <span className={`w-2 h-2 rounded-full animate-pulse ${isOfficeOpen() ? "bg-emerald-500" : "bg-amber-500"}`} />
              <span className="text-slate-600">
                {isOfficeOpen() ? "Consultation Lines Active: Connect Live" : "Outside Standard Corporate Hours"}
              </span>
            </div>

            {/* Contact Direct Line Vectors */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue rounded-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Direct Line</span>
                  <a href="tel:+919167070916" className="text-sm font-medium text-brand-navy hover:text-brand-blue transition-colors font-mono">
                    +91 91670 70916
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center text-brand-gold rounded-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Corporate Inquiries</span>
                  <a href="mailto:suppoort@fintrust.com" className="text-sm font-medium text-brand-navy hover:text-brand-gold transition-colors font-mono">
                    support@fintrustindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium Lead Capture Form Engine */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 p-8 lg:p-12 rounded-sm shadow-sm relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-gold to-brand-digital" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" required placeholder="Enter your name"
                    value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 bg-slate-50 border text-sm font-light rounded-sm focus:outline-none focus:border-brand-blue focus:bg-white transition-all disabled:opacity-60 ${formState.name && formState.name.trim() !== ""
                      ? "border-green-400 focus:border-green-500"
                      : "border-slate-200"
                      }`}
                  />
                  {formState.name && formState.name.trim() !== "" && (
                    <p className="text-[10px] text-green-500">✓ Valid</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email" required placeholder="name@gmail.com"
                    value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 bg-slate-50 border text-sm font-light rounded-sm focus:outline-none focus:border-brand-blue focus:bg-white transition-all disabled:opacity-60 ${formState.email && formState.email.trim() !== ""
                      ? "border-green-400 focus:border-green-500"
                      : "border-slate-200"
                      }`}
                  />
                  {formState.email && formState.email.trim() !== "" && (
                    <p className="text-[10px] text-green-500"></p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className={`flex rounded-sm overflow-hidden focus-within:border-brand-blue border transition-all ${formState.phone && formState.phone.length === 10
                    ? "border-green-400"
                    : "border-slate-200"
                    }`}>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      disabled={isSubmitting}
                      className="px-3 bg-slate-100 border-r border-slate-200 text-sm font-light text-slate-600 focus:outline-none cursor-pointer disabled:opacity-60"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                    </select>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile phone number without spaces or symbols."
                      placeholder="9876543210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value.replace(/\D/g, "") })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-slate-50 text-sm font-light focus:outline-none focus:bg-white font-mono disabled:opacity-60"
                    />
                  </div>
                  {formState.phone && formState.phone.length === 10 && (
                    <p className="text-[10px] text-green-500">✓ Valid</p>
                  )}
                  {formState.phone && formState.phone.length > 0 && formState.phone.length < 10 && (
                    <p className="text-[10px] text-amber-500">Please enter 10 digits</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Requested Segment</label>
                  <select
                    value={formState.service} onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm font-light text-slate-600 rounded-sm focus:outline-none focus:border-brand-blue focus:bg-white transition-all cursor-pointer disabled:opacity-60"
                  >
                    <option value="loan">Loan Solutions & Borrowing Channels</option>
                    <option value="insurance">Insurance Plans & Wealth Protection</option>
                    <option value="digital">Digital Marketing & Performance Growth</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                  Message / Details of Requirement <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4" required placeholder="Tell us briefly about your financial requirements or business goals..."
                  value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 bg-slate-50 border text-sm font-light rounded-sm focus:outline-none focus:border-brand-blue focus:bg-white transition-all resize-none disabled:opacity-60 ${formState.message && formState.message.trim() !== ""
                    ? "border-green-400 focus:border-green-500"
                    : "border-slate-200"
                    }`}
                />
                {formState.message && formState.message.trim() !== "" && (
                  <p className="text-[10px] text-green-500">✓ Valid</p>
                )}
              </div>

              {/* Legal Consent Line Item Component with Modal Links */}
              <div className="space-y-2 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    required
                    checked={formState.consent}
                    onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                    disabled={isSubmitting}
                    className={`mt-1 w-4 h-4 rounded-sm border-slate-300 text-brand-blue focus:ring-brand-blue accent-brand-blue cursor-pointer disabled:opacity-60 ${formState.consent ? "border-green-400" : ""
                      }`}
                  />
                  <span className="text-xs font-light text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setActiveModal('privacy')}
                      className="text-brand-blue font-medium hover:underline cursor-pointer"
                    >
                      Privacy Policy
                    </button>
                    {" "}and{" "}
                    <button
                      type="button"
                      onClick={() => setActiveModal('terms')}
                      className="text-brand-blue font-medium hover:underline cursor-pointer"
                    >
                      Terms & Conditions
                    </button>
                    , and explicit consent to receive messages via SMS, WhatsApp, and RCS protocols. Message & data rates may apply.
                    <span className="text-red-500"> *</span>
                  </span>
                </label>
                {formState.consent && (
                  <p className="text-[10px] text-green-500">✓ Consent provided</p>
                )}
              </div>

              {submissionError && (
                <div className="text-xs font-medium text-red-500 bg-red-50 p-3 rounded-sm border border-red-100">
                  {submissionError}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-light text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>Encrypted end-to-end data transmission</span>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className={`px-8 py-4 text-white text-xs font-bold tracking-wider uppercase rounded-sm transition-colors cursor-pointer flex items-center gap-2 group ${isFormValid() && !isSubmitting
                    ? "bg-brand-navy hover:bg-brand-blue"
                    : "bg-slate-300 cursor-not-allowed opacity-60"
                    }`}
                >
                  <span>{isSubmitting ? "Transmitting..." : "Request Free Strategy Call"}</span>
                  {!isSubmitting && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>

              {/* Form validation helper text */}
              {!isFormValid() && (
                <div className="text-[10px] text-amber-500 mt-2">
                  Please fill all required fields (*) to enable the submit button
                </div>
              )}
            </form>

            {/* Elegant Floating Form Success Toast Alert */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 z-20"
              >
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center rounded-full mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy">Strategy Docket Received</h3>
                <p className="text-xs text-slate-500 font-light max-w-sm mt-1 leading-relaxed">
                  Thank you! Your strategic consultation query has been logged. A Fintrust representative will review your segment preference and reach out within 2 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs font-semibold text-brand-blue hover:underline cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            )}

          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'privacy' && <PrivacyPolicyModal />}
        {activeModal === 'terms' && <TermsModal />}
      </AnimatePresence>
    </>
  );
}