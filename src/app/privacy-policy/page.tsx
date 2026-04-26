import Link from "next/link";
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="w-full h-full justify-between p-5 xl:p-16">
      <div className="container mx-auto text-white">
        <h1 className="xl:text-5xl text-3xl font-extrabold">Privacy Policy</h1>
        <p className="pt-5 xl:pt-10 font-semibold">
          This Privacy Policy applies to all applications and games (hereinafter
          referred to as &#34;Application&#34;) created by Trimatra Studio
          (hereinafter referred to as &#34;Service Provider&#34;). This service
          is provided &#34;AS IS&#34; and is available for use under the terms
          described herein.
        </p>
        <p className="pt-5 xl:pt-10 font-semibold">
          By downloading or using the Application, you agree to this Privacy
          Policy, which discloses how we collect, use, and manage user data.
        </p>
        <div className="p-0 xl:p-16">
          <div>
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Information Collection and Use
            </h1>
          </div>
          <div className="text-justify space-y-3">
            <p>
              The Application collects certain data to provide better services,
              improve functionality, and personalize your experience. The types
              of data collected include:
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Device Information:</strong> Such as IP address,
                operating system, device model, and browser type.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited within the
                Application, duration of usage, and interaction logs.
              </li>
              <li>
                <strong>Location Data:</strong> Approximate geographical
                location to enhance features such as personalized content and
                analytics.
              </li>
            </ul>
            <p>We use collected data to:</p>
            <ul className="list-disc pl-8">
              <li>Improve user experience and Application functionality.</li>
              <li>Deliver personalized recommendations.</li>
              <li>Analyze trends and monitor usage statistics.</li>
            </ul>
          </div>
          <div className="pt-5">
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Log Files
            </h1>
          </div>
          <div className="text-justify pt-5 xl:pt-10">
            <p>
              The Application records log files, which include IP addresses,
              browser types, ISPs, date/time stamps, and referring/exit pages.
              These are used to:
            </p>
            <ul className="list-disc pl-8">
              <li>Diagnose technical issues.</li>
              <li>Analyze user trends and behaviors.</li>
              <li>Enhance security and prevent misuse.</li>
            </ul>
          </div>
          <div className="pt-5">
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Publishers
            </h1>
          </div>
          <div className="text-justify pt-5 xl:pt-10">
            <p>The current publisher for the Application is:</p>
            <ul className="list-disc pl-8">
              <li>
                <strong>KajewDev</strong>
                <br />
                Role: Partner for advertising, analytics, and feature
                optimization.
                <br />
                Contact: kjwkevinjayawiguna@gmail.com
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Third-Party Services
            </h1>
          </div>
          <div className="text-justify pt-5 xl:pt-10">
            <p>
              We use trusted third-party services to enhance the Application,
              provide advertisements, and analyze data. These services may
              collect data such as IP addresses and usage statistics. The
              third-party services used include:
            </p>
            <ul className="list-disc p-8 space-y-4">
              <li>
                <Link
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="hover:underline hover:text-blue-500 transition-all duration-500"
                >
                  Google Play Services
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.google.com/admob/answer/6128543?hl=en"
                  target="_blank"
                  className="hover:underline hover:text-blue-500 transition-all duration-500"
                >
                  Google AdMob
                </Link>
              </li>
              <li>
                <Link
                  href="https://unity.com/legal/privacy-policy"
                  target="_blank"
                  className="hover:underline hover:text-blue-500 transition-all duration-500"
                >
                  Unity Engine
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.epicgames.com/site/en-US/privacypolicy?lang=en-US"
                  target="_blank"
                  className="hover:underline hover:text-blue-500 transition-all duration-500"
                >
                  Unreal Engine
                </Link>
              </li>
              <li>
                <Link
                  href="https://store.steampowered.com/privacy_agreement/"
                  target="_blank"
                  className="hover:underline hover:text-blue-500 transition-all duration-500"
                >
                  Steam
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Opt-Out Rights
            </h1>
          </div>
          <div>
            <p className="pb-5">
              You can stop all collection of information by the Application
              easily by uninstalling it. You may use the standard uninstall
              processes as may be available as part of your mobile device or via
              the mobile application marketplace or network.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Data Retention Policy
            </h1>
          </div>
          <div>
            <p className="pb-5">
              The Service Provider will retain User Provided data for as long as
              you use the Application and for a reasonable time thereafter. If
              you`d like them to delete User Provided Data that you have
              provided via the Application, please contact them at
              Support@Trimatra.io and they will respond in a reasonable time.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Children
            </h1>
          </div>
          <div>
            <p className="pb-5">
              The Service Provider does not use the Application to knowingly
              solicit data from or market to children under the age of 13.
            </p>
            <p className="pb-5">
              The Application does not address anyone under the age of 13. The
              Service Provider does not knowingly collect personally
              identifiable information from children under 13 years of age. In
              the case the Service Provider discover that a child under 13 has
              provided personal information, the Service Provider will
              immediately delete this from their servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact the Service Provider
              (Contact@Trimatra.io) so that they will be able to take the
              necessary actions.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Security
            </h1>
          </div>
          <div>
            <p className="pb-5">
              The Service Provider is concerned about safeguarding the
              confidentiality of your information. The Service Provider provides
              physical, electronic, and procedural safeguards to protect
              information the Service Provider processes and maintains.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Changes
            </h1>
          </div>
          <div>
            <p className="pb-5">
              This Privacy Policy may be updated from time to time for any
              reason. The Service Provider will notify you of any changes to the
              Privacy Policy by updating this page with the new Privacy Policy.
              You are advised to consult this Privacy Policy regularly for any
              changes, as continued use is deemed approval of all changes.
            </p>
            <p className="pb-5">
              This privacy policy is effective as of 2024-04-25
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Your Consent
            </h1>
          </div>
          <div>
            <p className="pb-5">
              By using the Application, you are consenting to the processing of
              your information as set forth in this Privacy Policy now and as
              amended by us.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl xl:text-2xl justify-center items-center">
              Contact Us
            </h1>
          </div>
          <div>
            <p className="pb-5">
              If you have any questions about this Privacy Policy, please
              contact us:
              <br />
              <strong>Email:</strong> Contact@Trimatra.io
            </p>
          </div>
          <p className="text-sm">Effective Date: April 25, 2024</p>
        </div>
      </div>
    </div>
  );
}
