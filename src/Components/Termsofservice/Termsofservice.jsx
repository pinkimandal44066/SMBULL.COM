import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className=" bg-gray-100 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1
          className="text-5xl font-extrabold text-center mb-12 text-[#a6c465]"
          data-aos="fade-up"
        >
          Terms of Service
        </h1>

        <section
          data-aos="fade-up"
          className="mb-12 bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our influencer marketing platform! By using our services,
            you agree to comply with and be bound by these Terms of Service.
            These terms govern your use of our website, software, and related
            services. It is important that you thoroughly review and understand
            these terms. If you have any questions, feel free to contact us
            before using our services.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Our platform connects influencers with brands, ensuring a seamless
            and effective marketing experience. Whether you're an influencer or
            a brand, these terms ensure the smooth operation of our services and
            help protect the rights of all users.
          </p>
        </section>

        <section
          data-aos="fade-right"
          className="mb-12 bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">2. Eligibility</h2>
          <p className="text-gray-600 leading-relaxed">
            To use our platform, you must be at least 18 years old. If you are
            under 18, you may only use our services with the supervision of a
            parent or legal guardian who agrees to these Terms of Service.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            By using our services, you confirm that you meet these age
            requirements and have the legal capacity to enter into these terms.
          </p>
        </section>

        <section
          data-aos="fade-left"
          className="mb-12 bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">3. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update or modify these Terms of Service at
            any time without prior notice. Any changes will be effective
            immediately upon posting. It is your responsibility to regularly
            review the terms to stay informed of updates.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Your continued use of our services following any changes signifies
            your acceptance of those changes. If you do not agree to the
            modified terms, you must stop using our services immediately.
          </p>
        </section>

        <section
          data-aos="fade-up"
          className="mb-12 bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">4. User Responsibilities</h2>
          <p className="text-gray-600 leading-relaxed">
            As a user of our platform, you are responsible for ensuring the
            security of your account and all activities that occur under your
            account credentials. Do not share your account details with others.
            If you suspect unauthorized use of your account, you must notify us
            immediately.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Additionally, you agree to use our services in accordance with all
            applicable laws and regulations. Any use of our platform for illegal
            or prohibited activities may result in the suspension or termination
            of your account without prior notice.
          </p>
        </section>

        <section
          data-aos="fade-right"
          className="mb-12 bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">5. Payment and Billing</h2>
          <p className="text-gray-600 leading-relaxed">
            All payments for our services must be made promptly as per the
            billing cycle. We offer multiple payment methods for your
            convenience. Failure to make timely payments may result in a
            temporary suspension of your account or services.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            If you experience any issues with billing, please contact our
            support team immediately. We reserve the right to modify our pricing
            and payment terms with reasonable notice.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
