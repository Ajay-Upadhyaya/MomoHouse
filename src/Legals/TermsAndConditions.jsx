import React from "react";
import { NavLink } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: April 15, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our website. By accessing and using our services, you
            agree to comply with the following terms and conditions. Please read
            them carefully.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            2. User Responsibilities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for ensuring that your use of this site complies
            with all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            3. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All content and materials on this site are owned or licensed by us
            and are protected by intellectual property laws. You may not reuse
            or distribute content without permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            4. Termination
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to suspend or terminate access to our site at
            any time, without notice, for conduct that we believe violates these
            terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            5. Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may revise these terms from time to time. Any updates will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
            6. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions or concerns about these Terms and Conditions,
            please contact us at
            <NavLink className="text-blue-500" to="mailto:momohouse@gmail.com ">
              momohouse@gmail.com
            </NavLink>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
