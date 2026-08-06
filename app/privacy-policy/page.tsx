import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import PrivacyOptOutForm from "@/components/PrivacyOptOutForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy - Vidi Meth Digital Services",
  description: "Privacy Policy for Vidi Meth Digital Services (OPC) Private Limited.",
};

type PrivacySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  listStyle?: "bullet" | "number";
  form?: boolean;
};

const privacySections: PrivacySection[] = [
  {
    heading: "Privacy Policy",
    paragraphs: [
      "While you use and enjoy our services, we view protection of your privacy policy as a very important principle. We understand clearly that You and Your Personal Information is one of our most important assets. We value the trust you place in us, and hence insist upon the highest level of protection for securing your personal information. We are obligated to protect your personal information in accordance with applicable laws, and regulations.",
      "This Policy is subject to modification based on changes in the business, legal and regulatory requirements and will be made available to you online. Vidi Meth Digital Services OPC Private Limited policy on sharing or transferring Your data or information with third parties. You are encouraged to periodically visit the website to review the policy and any changes.",
      "We request to you please read this Privacy Policy carefully. By accessing or using our website, You acknowledge that you have read, understand and agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree please do not use or access our Website.",
    ],
  },
  {
    heading: "Collection of Information",
    paragraphs: [
      "When you use our Website, we require certain information be shared by you with us. Vidi Meth Digital Services OPC Private Limited may collect the following types of Information:",
      "Personal Information: Personal information collected that can be used to identify personally. Personal Information for the purposes of this Privacy Policy shall include, but not limited to the following:",
    ],
    bullets: [
      "Basic details which you provide during the registration process such as Name, Phone Number, Other Contact Information, Email Address, Communication or Permanent Address.",
      "User name along with your password.",
      "Demographic details such as gender, Date of Birth, city, PIN code or nearest location.",
      "Information regarding your transactions on the website.",
      "Usage logs, server logs and cookies which may contain details of your personal or sensitive personal information.",
      "Any other Information that You provide during Your registration process, if any, on the Website.",
    ],
  },
  {
    heading: "Non-Personal Information and Cookies",
    paragraphs: [
      "We also collect your information other than Personal Information, when You use and/or visit the Website. Non-Personal Information does not identify you or any other individual, and includes session, web beacons and usage and transaction data, aggregate log data and aggregate information.",
      "This Information may include your geographical location, the URL that you just came from, which URL you next go to, your computer browser information, and your IP address. The duration of Your stay on the Website is also stored in the session along with the date and time of Your access.",
      "Cookies are small files placed on your hard drive that assist us in providing our services. We place both permanent and temporary cookies in your computer's hard drive. You can erase or choose to block these cookies from your computer. You can configure your computer's browser to alert you when we attempt to send you a cookie with an option to accept or refuse the cookie. If You have turned cookies off, You may be prevented from using certain features of the Website.",
    ],
  },
  {
    heading: "Use of Information",
    paragraphs: [
      "The User Information provided by you to us is used for vidimeth.com to facilitate a better, customized and convenient use of the Website's services.",
      "The User Information is used by Vidi Meth Digital Services OPC Private Limited inter alia to:",
    ],
    bullets: [
      "Responds to the user's requests and enquiries and complaints, customer services.",
      "Improve, customize and update new features of the Website.",
      "Communicating to you about online and offline offers, bills, invoices, existing or new offers, contents, advertisements, surveys, key policies, other administrative information and marketing communications that Vidi Meth Digital Services OPC Private Limited believes may be of interest to the user.",
      "Detect and protect us against error, fraud and other criminal activity.",
      "Identify and use your IP address to help diagnose problems with our server and to administer our Website.",
      "Inform any change in the Terms of Use or this Policy or the Terms and Conditions of Sale.",
      "Complete and fulfill the user's purchase, process payments, communicate with the user regarding the user's purchase and provide the user with related customer service.",
      "Support law enforcement agencies or investigations on matters related to public safety, as permitted by law or anti-fraud activities/systems.",
      "Protect the integrity of the Website.",
      "Comply with all applicable laws and regulations.",
    ],
  },
  {
    heading: "Sharing and Disclosure",
    paragraphs: [
      "We may share personal information with our other corporate entities and affiliates. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt out.",
      "We may transfer, disclose or share Information, other than Your Personal Information, to those parties or third parties who support our business or services, contact information verification, payment processing, customer service, website hosting, data analysis, infrastructure provision, IT services, legal compliance, user agreement enforcement, marketing and advertising activities, or prevention, detection, mitigation and investigation of fraudulent or illegal activities related to our Services and other similar services.",
      "We do not sell, trade or rent Personal Information in any manner, except as specified in this Policy or if express consent is sought from the user. We understand that the User Information is very crucial and is important for the user.",
      "We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to notices, court orders, or other legal process. We may disclose personal information to law enforcement offices and third party rights owners.",
      "We may also share Personal Information if Vidi Meth Digital Services OPC Private Limited believes it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of various terms and conditions or our policies.",
      "In a scenario where we or our assets are merged or acquired by the other business entity, or during restructuring of business or re-organization, we may have to share information provided by you with the other business entities. If such a transaction occurs, the other business entity or newly combined business entity would be required to follow this Privacy Policy.",
      "We reserve the right to disclose your information when required to do so by law or regulation, under any legal obligation or order under law, in response to a request from a law enforcement or governmental agency, judicial, quasi-judicial or any other statutory or constitutional authority, or to establish or exercise our legal rights or defend against legal claims.",
    ],
  },
  {
    heading: "Links to Third Party Websites",
    paragraphs: [
      "Links to third-party advertisements, websites or any third party electronic communication service may be provided on the Website which are operated by third parties. Such websites or applications are governed by their respective privacy policies, which are beyond our control.",
      "The user should read the privacy policy of each and every linked website and any access or use of the linked websites is entirely at the user's own risk. Vidi Meth Digital Services OPC Private Limited is not responsible for any direct, indirect, solicited or unsolicited communication made by any of these linked third party websites.",
      "We only collect your Personal Information to conduct our business and to enable us to deliver and improve our services. We do not for any reason whatsoever sell your Correspondence Information to any third party or otherwise trade on it.",
    ],
  },
  {
    heading: "Security Precautions",
    paragraphs: [
      "The security of your Personal Information is important to us. Vidi Meth Digital Services OPC Private Limited strives to ensure the security of Your Personal Information and to protect Your Personal Information against unauthorized access or unauthorized alteration, disclosure or destruction.",
      "For the purpose of checking possible vulnerabilities and attacks, Vidi Meth Digital Services OPC Private Limited may conduct periodical internal review of data collection, storage and processing practice and security measures on the Website. Vidi Meth Digital Services OPC Private Limited may use such software as it determines is best for maintaining security. However, the internet is not absolutely a secure environment and the Website cannot ensure or warrant a 100% security of the User Information.",
      "Notwithstanding anything contained in this Policy or elsewhere, Vidi Meth Digital Services OPC Private Limited shall not be held responsible for any loss, damage or misuse of the User Information, if such loss, damage or misuse is attributable to a Force Majeure Event.",
      "A Force Majeure Event means any event that is beyond the reasonable control of Vidi Meth Digital Services OPC Private Limited and includes, without limitation, fire, flood, explosion, acts of God, civil commotion, strikes, lock outs or industrial action of any kind, riots, insurrection, war, acts of government, power failure, sabotage, computer hacking, unauthorized access to computer data and storage device, system failure, virus, attacks, bugs, computer crashes, breach of security and encryption.",
    ],
  },
  {
    heading: "User Discretion and Opt-Out",
    paragraphs: [
      "The user should be aware that the User Information or other data the user provides to the Website for availing the services through the Website could be read, collected, or used by third parties, in which case the User Information might be used for sending unsolicited messages or communications for which Vidi Meth Digital Services OPC Private Limited is not responsible.",
      "You can add or update Your Personal Information on regular basis. Kindly note that Vidi Meth Digital Services OPC Private Limited would retain Your previous Personal Information in its records.",
      "In case you do not want to be disturbed over telephonic calls, kindly fill up the details requested under this section below, including the details of the telephone number(s) on which you do not wish to be contacted and submit the same at info@vidimeth.com from your email address registered at Vidi Meth Digital Services OPC Private Limited.",
      "The details that you provide through the opt-out email will remain confidential and once you have submitted the same to us, your telephone number(s) will be removed from all our telemarketing calling lists within 21 working days. We will make every effort to ensure that you do not get any further telemarketing calls on such telephone number(s).",
    ],
    form: true,
  },
  {
    heading: "Advertisements",
    paragraphs: [
      "We may use third-party advertising companies and/or ad agencies to serve ads when you visit our Website. These companies may use information, excluding your name, address, email address, or telephone number, about your visits to this Website in order to provide advertisements on this Website and other third party websites about services that may be of interest to you.",
    ],
  },
  {
    heading: "EMAIL & SMS Communications from us and Our Partners",
    paragraphs: [
      "We provide our registered customers with periodic emailers and email/SMS alerts. We also allow users to subscribe to email newsletters and from time to time may transmit emails promoting Vidi Meth Digital Services OPC Private Limited or third-party products.",
      "Subject to the express consent clause above, Vidi Meth Digital Services OPC Private Limited's Website subscribers may opt-out of receiving our promotional emails and terminate their newsletter subscriptions by following the instructions in the emails. Opting out in this manner will not end transmission of service-related emails/SMS, such as email/SMS alerts. The above services are also provided by our partners.",
    ],
  },
  {
    heading: "Social Media",
    paragraphs: [
      "Vidi Meth Digital Services OPC Private Limited operates channels, pages and accounts on some social media sites to inform, assist and engage with you. Vidi Meth Digital Services OPC Private Limited monitors and records comments and posts made on these channels about Vidi Meth Digital Services OPC Private Limited in order to improve its products and services.",
      "Please note that you must not communicate with Vidi Meth Digital Services OPC Private Limited through such social media sites the following information:",
    ],
    bullets: [
      "Sensitive personal data including special categories of personal data, meaning any information revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership.",
      "Genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation.",
      "Other sensitive personal data such as criminal convictions and offenses and national identification number.",
      "Excessive, inappropriate, offensive or insulting information towards individuals.",
      "Vidimeth.com is not responsible for any information posted on those sites other than the information posted by its employees on its behalf. Vidi Meth Digital Services OPC Private Limited is only responsible for its own use of the personal data received through such sites.",
    ],
    listStyle: "number",
  },
  {
    heading: "Changes to this Privacy Policy",
    paragraphs: [
      "Vidi Meth Digital Services OPC Private Limited reserves the right to update, change or modify this policy at any time. The policy shall come to effect from the date of such update, change or modification.",
    ],
  },
  {
    heading: "Disclaimer",
    paragraphs: [
      "Vidi Meth Digital Services OPC Private Limited shall not be liable for any loss or damage sustained by reason of any disclosure, inadvertent or otherwise, of any information concerning the user's account and/or information relating to or regarding online transactions using credit cards/debit cards and/or their verification process and particulars, nor for any error, omission or inaccuracy with respect to any information so disclosed and used whether or not in pursuance of a legal process or otherwise.",
      "Vidi Meth Digital Services OPC Private Limited does not store any Credit/Debit card details. Any other personal information shared by you which is not asked by Vidi Meth Digital Services OPC Private Limited during registration, either mandatorily or optionally, accounts to wilful and intentional furnishing, and Vidi Meth Digital Services OPC Private Limited will not be liable for breach of such information.",
    ],
  },
  {
    heading: "Your Consent",
    paragraphs: [
      "Changes in law or changes in Vidi Meth Digital Services OPC Private Limited's business may require changes to be made to the terms of this Privacy Policy from time to time, so Vidi Meth Digital Services OPC Private Limited encourages you to review this Privacy Policy periodically for any such changes.",
      "As our privacy policy is subject to change at any time without notice, it is your responsibility to carefully read, agree with the Privacy Policy on each occasion you use the Website.",
      "By using or browsing the Website, you agree to be bound by the terms and conditions of this Privacy Policy, as amended and in force from time to time, and you expressly consent to our use and disclosure of your Information including personal Information and other Information in accordance with this Privacy Policy, as amended from time to time.",
      "If you do not agree to the terms of this Privacy Policy, please do not use or browse the Website or any Services thereof.",
    ],
  },
  {
    heading: "Grievance Officer",
    paragraphs: [
      "In case of any complaints or grievances, the user may contact the Grievance Officer at: info@vidimeth.com",
    ],
  },
  {
    heading: "Further Acknowledgements",
    paragraphs: ["You hereby acknowledge and agree that this Privacy Policy:"],
    bullets: [
      "Is clear and easily accessible and provide statements of Vidi Meth Digital Services OPC Private Limited policies and practices with respective to the Information.",
      "Provides for the various types of personal or sensitive personal data of information to be collected.",
      "Provides for the purposes of collection and usage of the Information.",
      "Provides for disclosure of Information.",
      "Provides for reasonable security practices and procedures.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="border-b border-line paper-texture">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow mb-4">Privacy Policy</p>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Privacy Policy
            </h1>
            <nav
              aria-label="Breadcrumb"
              className="mt-5 flex flex-wrap items-center gap-2 text-sm text-text-muted"
            >
              <Link href="/" className="inline-flex items-center gap-1.5 hover:text-teal">
                <Home size={15} />
                Vidi Meth Digital Services
              </Link>
              <ChevronRight size={15} aria-hidden />
              <span className="text-ink">Privacy Policy</span>
            </nav>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Please read this Privacy Policy carefully before accessing or using the website.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="space-y-10">
          {privacySections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.03}>
              <article className="border-b border-line pb-10 last:border-b-0 last:pb-0">
                <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-text-muted sm:text-base">
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <div className="space-y-2">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <div
                          key={bullet}
                          className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 sm:grid-cols-[2.75rem_minmax(0,1fr)]"
                        >
                          <span className="text-right font-mono text-sm font-semibold leading-7 tabular-nums text-teal sm:text-base">
                            {section.listStyle === "number" ? `${bulletIndex + 1}.` : "•"}
                          </span>
                          <p>{bullet}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {section.form && <PrivacyOptOutForm />}
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
