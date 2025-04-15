import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: April 15, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We respect your privacy and are committed to protecting your
            personal information. This policy explains how we collect, use, and
            safeguard your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            2. Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information such as your name, email
            address, and usage data when you use our services or visit our
            website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We use your information to provide and improve our services,
            communicate with you, and comply with legal obligations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            4. Data Sharing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell your personal information. We may share data with
            trusted third parties who assist in operating our site and providing
            our services, under strict confidentiality agreements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            5. Your Rights
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You have the right to access, update, or delete your personal
            information. Contact us to make a request regarding your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            6. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us
            at
            <a
              href="mailto:privacy@example.com"
              className="text-blue-600 hover:underline ml-1"
            >
              privacy@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
