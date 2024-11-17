import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="mt-16  mb-10  privacy-policy max-w-7xl mx-auto p-6 md:p-12 bg-gray-100 rounded-lg shadow-lg">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 mt-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Privacy Policy
      </motion.h1>

      <motion.div
        className="content space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <section>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Introduction
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to SMBULL. This Privacy Policy outlines how we handle your
            personal information in the context of influencer marketing. We
            value your privacy and are committed to safeguarding your personal
            data. Please read this policy carefully.
          </p>
        </section>

        <section>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Information We Collect
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            In our influencer marketing services, we may collect the following
            types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">
              Personal Identification Information: Name, email address, social
              media profiles, etc.
            </li>
            <li className="text-gray-700">
              Usage Data: Information about how you interact with our platform
              and services.
            </li>
            <li className="text-gray-700">
              Cookies and Tracking Technologies: To enhance user experience and
              analyze engagement.
            </li>
          </ul>
        </section>

        <section>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            How We Use Your Information
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            We utilize the collected information for various purposes,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">
              To provide and maintain our influencer marketing services.
            </li>
            <li className="text-gray-700">
              To analyze trends and improve our services based on your feedback.
            </li>
            <li className="text-gray-700">
              To communicate with you regarding campaigns, opportunities, and
              inquiries.
            </li>
            <li className="text-gray-700">
              To ensure the security and integrity of our platform.
            </li>
          </ul>
        </section>

        <section>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Data Protection and Security
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            completely secure. We strive to use commercially acceptable means to
            protect your personal data, but we cannot guarantee its absolute
            security.
          </p>
        </section>

        <section>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Your Rights
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">
              The right to access your personal data.
            </li>
            <li className="text-gray-700">
              The right to correct or update inaccurate data.
            </li>
            <li className="text-gray-700">
              The right to request deletion of your personal data under certain
              conditions.
            </li>
            <li className="text-gray-700">
              The right to restrict or object to processing of your personal
              data.
            </li>
          </ul>
        </section>

        <section>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Changes to This Policy
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy periodically. We will notify you
            of any changes by posting the updated Privacy Policy on this page.
            You are encouraged to review this Privacy Policy regularly for any
            changes.
          </p>
        </section>

        <section>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Contact Us
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <p className="text-gray-800">
            Email:{" "}
            <a
              href="mailto:privacy@smbull.com"
              className="text-[#a6c465] font-bold hover:underline"
            >
              privacy@smbull.com
            </a>
          </p>
          <p className="text-gray-800">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-[#a6c465] font-bold hover:underline"
            >
              +91 9308788991
            </a>
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
