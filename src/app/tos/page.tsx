"use client";
import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

export default function ToSPage() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="text-white">
      <div className="container mx-auto text-justify">
        <div>
          <h1 className="text-xl xl:text-3xl font-bold py-10">
            Trimatra Studio Term of Services
          </h1>
          <div>
            <h2 className="text-lg xl:text-xl font-bold ">Introduce</h2>
            <p className="text-justify">
              Welcome to Trimatra Studio. We are a game development team
              dedicated to creating innovative and engaging gaming experiences.
              By engaging with our services, you agree to the following Terms of
              Service. Please read these terms carefully.
            </p>
          </div>
          <div className="mx-0 xl:mx-8">
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                1. Definitions
              </h1>
              <div>
                <ul className="list-disc px-9 gap-5">
                  <li>
                    <span className="font-bold">Company :</span> Refers to
                    Trimatra Studio.
                  </li>
                  <li>
                    <span className="font-bold">Client :</span> Any individual,
                    developer, publisher, or entity that engages in a service
                    contract with the Company.
                  </li>
                  <li>
                    <span className="font-bold">Services :</span> RefeIncludes
                    game development, collaboration, 3D asset creation, UI/UX
                    design, game mechanic programming, and any other service
                    offered by the Company.
                  </li>
                  <li>
                    <span className="font-bold">Assets :</span> Digital
                    materials created by the Company, including but not limited
                    to 3D models, textures, UI elements, and game code.
                  </li>
                  <li>
                    <span className="font-bold">Projects :</span> Specific tasks
                    or products the Company is contracted to create for the
                    Client.
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                2. Services Provided
              </h1>
              <p>Trimatra Studio offers the following services:</p>
              <div>
                <ul className="list-disc px-9 gap-5">
                  <li>
                    <span className="font-bold">Game Development :</span>{" "}
                    Creation of both profit and non-profit games, including
                    concept, design, programming, and deployment.
                  </li>
                  <li>
                    <span className="font-bold">Collaboration :</span> Working
                    with other developers or publishers on game development
                    projects.
                  </li>
                  <li>
                    <span className="font-bold">3D Asset Creation :</span>{" "}
                    Designing and creating 3D models, textures, and other
                    related assets.
                  </li>
                  <li>
                    <span className="font-bold">UI/UX Design :</span> Crafting
                    user interfaces and user experiences for games and
                    applications.
                  </li>
                  <li>
                    <span className="font-bold">
                      Game Mechanic Programming :
                    </span>{" "}
                    Developing and implementing game mechanics and systems.
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                3. Asset Licensing
              </h1>
              <div>
                <ul className="list-disc px-9 gap-5">
                  <li>
                    <span className="font-bold">Full Access :</span> Clients may
                    be granted full access to assets for use in multiple
                    projects as specified in the agreement.
                  </li>
                  <li>
                    <span className="font-bold">Project-Specific Access :</span>{" "}
                    Clients may use assets only for the specific project for
                    which they were created. projects.
                  </li>
                  <li>
                    <span className="font-bold">Prohibited Uses :</span> Clients
                    are not permitted to use assets in any other project or
                    context without explicit permission from Trimatra Studio.
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                4. Ownership and Intellectual Property
              </h1>
              <div>
                <ul className="list-disc px-9 gap-5">
                  <li>
                    <span className="font-bold">Client Projects :</span> All
                    rights to the final game or product created for the Client
                    belong to the Client, subject to the limitations outlined in
                    these terms.
                  </li>
                  <li>
                    <span className="font-bold">Company Assets :</span> All
                    rights to assets created by the Company, including 3D
                    models, textures, UI elements, and code, remain with
                    Trimatra Studio unless otherwise agreed upon in writing.
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                5. Collaboration Terms
              </h1>
              <div>
                <ul className="list-disc px-9 gap-5">
                  <li>
                    <span className="font-bold">Joint Projects :</span> When
                    collaborating with other developers or publishers, the terms
                    of engagement, including rights and responsibilities, will
                    be outlined in a separate agreement.
                  </li>
                  <li>
                    <span className="font-bold">Revenue Sharing :</span> Any
                    profit-sharing or revenue-splitting arrangements will be
                    clearly defined and agreed upon prior to the commencement of
                    the project.
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                6. Payment Terms
              </h1>
              <div>
                <ul className="list-disc px-9 gap-5">
                  <li>
                    <span className="font-bold">Quotes and Invoices :</span>{" "}
                    Quotes will be provided for all services. Invoices will be
                    issued upon completion of milestones or at the end of the
                    project as agreed upon.
                  </li>
                  <li>
                    <span className="font-bold">Payment Schedule :</span>{" "}
                    Payments are due as specified in the agreement. Late
                    payments may incur additional fees. clearly defined and
                    agreed upon prior to the commencement of the project.
                  </li>
                  <li>
                    <span className="font-bold">Refunds</span>Refunds will be
                    handled on a case-by-case basis and are not guaranteed.
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                7. Confidentiality
              </h1>
              <p>
                Both parties agree to keep all project details, concepts, and
                intellectual property confidential unless permission is granted
                by the other party.
              </p>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                8. Termination
              </h1>
              <div>
                <ul className="list-disc px-9 gap-5">
                  <li>
                    <span className="font-bold">By Client :</span> The Client
                    may terminate the agreement at any time with written notice.
                    The Client will be responsible for payment of all work
                    completed up to the date of termination.
                  </li>
                  <li>
                    <span className="font-bold">By Company :</span> Trimatra
                    Studio reserves the right to terminate the agreement if the
                    Client breaches any terms or fails to make payments as
                    agreed.
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                9. Limitation of Liability
              </h1>
              <p>
                Trimatra Studio will not be liable for any indirect, incidental,
                or consequential damages arising from the use of our services.
              </p>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                10. Governing Law
              </h1>
              <p>
                These Terms of Service are governed by the laws of Indonesian
                Government. Any disputes will be resolved in the courts of
                Indonesian Government.
              </p>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                11. Amendments
              </h1>
              <p>
                Trimatra Studio reserves the right to amend these Terms of
                Service at any time. Clients will be notified of any changes and
                have the option to accept the amended terms or terminate the
                agreement.
              </p>
            </div>
            <div className="py-2 xl:py-4">
              <h1 className="text-base xl:text-lg font-bold pb-0 xl:pb-2">
                12. Contact Information
              </h1>
              <p>
                For any questions or concerns regarding these Terms of Service,
                please contact us at:
              </p>
              <div>
                <ul className="list-disc px-9 gap-5 pb-0 xl:pb-3">
                  <li>
                    <span className="font-bold">Email :</span>{" "}
                    contact@trimatra.io{" "}
                    <button
                      onClick={() => copyToClipboard("contact@trimatra.io")}
                    >
                      {copied ? (
                        <>
                          <Check />
                        </>
                      ) : (
                        <>
                          <Clipboard />
                        </>
                      )}
                    </button>
                  </li>
                  <li>
                    <span className="font-bold">Phone :</span> -
                  </li>
                  <li>
                    <span className="font-bold">Address :</span> Parakansalak,
                    Sukabumi Regency, West Java, Indonesia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p>
          By engaging with Trimatra Studio{"'"}s services, you acknowledge that
          you have read, understood, and agree to be bound by these Terms of
          Service.
        </p>
      </div>
    </div>
  );
}
