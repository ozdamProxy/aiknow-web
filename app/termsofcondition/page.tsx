'use client';

import React from 'react';

const TermsOfCondition = () => {
  const termsData = [
    {
      title: 'Important Subscription Information',
      items: [
        {
          label: 'Auto-Renewing Subscriptions',
          value: '"I Know" (the "App") and associated website (the "Website") may offer subscription plans that auto-renew. Please read these Terms carefully before enrolling in a free trial or completing a purchase.',
        },
        {
          label: 'Subscription Cancellation',
          value: '- If you subscribed via an app store (e.g., Apple App Store, Google Play), you must cancel at least 24 hours before the current billing period or free trial ends.\n- If you subscribed directly on our Website, you must cancel the subscription or free trial before it renews through the Website\'s account settings.\n- If you\'re unsure how to cancel, please visit the relevant app store\'s support page or follow the instructions in your Website account settings.\n- Deleting the App does not cancel your subscription. Ensure you follow proper cancellation steps to avoid charges.',
        },
        {
          label: 'Consider Taking a Screenshot',
          value: 'For clarity and future reference, you may want to screenshot these Terms or print a copy.',
        },
      ],
    },
    {
      title: '1. Acceptance of These Terms',
      items: [
        {
          label: '1.1 Overview',
          value: 'These Terms and Conditions of Use (the "Terms") govern your use of the "I Know" App, the Website, and all related content, emails, and services (collectively, the "Service") offered by Proxy Code, a company registered in Japan ("we," "us," "our," or the "Company"). By accessing or using the Service, you agree to be bound by these Terms.',
        },
        {
          label: '1.2 Related Policies',
          value: 'Please also review our [Privacy Policy], which is incorporated by reference. We may modify these Terms or the Privacy Policy at any time. If you continue using the Service after changes become effective, you agree to the updated Terms.',
        },
        {
          label: '1.3 Notices of Changes',
          value: 'Any changes to these Terms will be indicated by an update of the "Last Updated" date. You waive the right to specific notice for each modification.',
        },
      ],
    },
    {
      title: '2. Important Disclaimers',
      items: [
        {
          label: '2.1 Key Disclaimers, Arbitration, and Class Action Waiver',
          value: 'These Terms include disclaimers of warranties (Section 8) and limitation of liability (Section 9). They also require binding arbitration (Section 12) that waives rights to a jury trial and class actions unless you opt out within 30 days.',
        },
        {
          label: '2.2 Acceptance or Non-Use',
          value: 'If you do not agree to any part of these Terms, or cannot lawfully be bound by them, do not download, install, or use the Service.',
        },
      ],
    },
    {
      title: '3. Registration of a User Profile',
      items: [
        {
          label: '3.1 Profile Creation',
          value: 'Using certain features of the Service may require creating an account ("Profile") by providing details such as your name and email address.',
        },
        {
          label: '3.2 Accuracy and Age',
          value: 'You represent and warrant that all account information is accurate, up-to-date, and that you are at least 16 years of age. If you are under 18, you need permission from a parent or guardian to use the Service.',
        },
        {
          label: '3.3 Account Security',
          value: 'You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. Notify us immediately if you suspect unauthorized use of your Profile.',
        },
        {
          label: '3.4 Profile Suspension/Termination',
          value: 'We may suspend or terminate your Profile if you violate these Terms, without liability for any resulting damages.',
        },
        {
          label: '3.5 Communications',
          value: 'By registering, you consent to receive certain email communications from us about the Service or relevant promotions. You can unsubscribe from non-essential communications at any time.',
        },
      ],
    },
    {
      title: '4. Use of the Service',
      items: [
        {
          label: '4.1 Intellectual Property',
          value: 'All content, text, images, logos, or software associated with the Service (excluding user-generated content) belongs to the Company or its licensors. Unauthorized use, reproduction, or distribution is prohibited.',
        },
        {
          label: '4.2 User Content',
          value: 'Any data or content ("User Content") you submit remains your property. You grant us a global, non-exclusive, irrevocable license to display or distribute that content within the Service as reasonably necessary for Service operation.',
        },
        {
          label: '4.3 License to You',
          value: 'Subject to these Terms, we grant you a non-transferable, non-exclusive license to use the Service for personal, non-commercial purposes. You agree not to resell or otherwise exploit any part of the Service for commercial gain unless explicitly authorized.',
        },
        {
          label: '4.4 Modifications',
          value: 'We may introduce enhancements, remove features, or modify the Service at any time. We are not liable if any modifications affect your access.',
        },
        {
          label: '4.5 System Requirements',
          value: 'You are responsible for the hardware, software, and internet connection necessary to access and use the Service.',
        },
        {
          label: '4.6 No Guarantee',
          value: 'Access to the Service is at your own risk. We are not liable for device damage, data loss, or adverse outcomes arising from Service use.',
        },
        {
          label: '4.7 No Required Support',
          value: 'We have no obligation to provide support, but may do so at our discretion.',
        },
      ],
    },
    {
      title: '5. App Stores, Ads, and External Links',
      items: [
        {
          label: '5.1 App Stores',
          value: 'If you download the App from a third-party platform (e.g., Apple App Store, Google Play), you agree to that store\'s terms. The store may also charge fees related to your use of the App.',
        },
        {
          label: '5.2 Third-Party Ads and Links',
          value: 'Our Service may display or link to third-party advertisements or websites ("Third-Party Ads"). We do not monitor or control these services and are not responsible for their content or privacy practices.',
        },
        {
          label: '5.3 Interactions with Other Users',
          value: 'Users are solely responsible for the content they post. We do not guarantee accuracy or quality of user-generated content. Your interactions with other users are at your own risk. We disclaim liability for disputes between users.',
        },
        {
          label: '5.4 Release from Liability',
          value: 'By using the Service, you release us (and our affiliates and employees) from any claims or damages arising from interactions with app stores, other users, or external sites/ads.',
        },
      ],
    },
    {
      title: '6. Subscription Fees and Payment',
      items: [
        {
          label: '6.1 Subscription-Based Features',
          value: 'While the App can be downloaded at no cost, certain premium features or content require an active subscription. You may purchase a subscription through an app store or directly via our Website.',
        },
        {
          label: '6.2 Pricing Changes',
          value: 'We reserve the right to change subscription fees. We will make reasonable efforts to notify you before such changes take effect. If you disagree with the new price, you must cancel your subscription before the updated fees are applied.',
        },
        {
          label: '6.3 Auto-Renewal',
          value: 'By subscribing, you authorize the automatic renewal of your subscription at the end of each billing period unless you cancel.\n- App store subscriptions require cancellation at least 24 hours before the billing cycle ends.\n- Website subscriptions require cancellation in your Website account settings prior to renewal.',
        },
        {
          label: '6.4 Free Trials',
          value: 'We may offer a free trial. Unless you cancel before the trial ends, you will be charged at the interval disclosed during sign-up. Each free trial is subject to additional terms, and we reserve the right to modify or terminate free trials at any time.',
        },
        {
          label: '6.5 Payment Processing',
          value: 'When making purchases, you authorize the app store or our payment processor to charge your selected method of payment. We do not store complete payment card details ourselves.',
        },
        {
          label: '6.6 Refunds',
          value: '- For app store purchases, refunds are governed by the relevant store\'s refund policies.\n- For direct Website purchases, unless required by law, all sales are final and non-refundable.\n- Residents of the European Union (EU) have certain withdrawal rights under EU consumer protection laws, subject to exceptions.',
        },
        {
          label: '6.7 Discounts and Promotions',
          value: 'Promotional codes or discounts may be offered. Once a promotion ends, your subscription will auto-renew at the then-current rate unless stated otherwise.',
        },
      ],
    },
    {
      title: '7. User Representations and Restrictions',
      items: [
        {
          label: '7.1 Eligibility',
          value: 'You confirm that you have the legal capacity to enter into these Terms and you will comply with local laws while using the Service.',
        },
        {
          label: '7.2 Prohibited Conduct',
          value: 'You agree not to:\n- Use the Service for illegal or unauthorized purposes.\n- Copy, reproduce, distribute, reverse-engineer, or alter any part of the Service.\n- Circumvent security features or disrupt Service operations.\n- Upload malicious software or content.\n- Use automated scripts or data-harvesting methods without authorization.',
        },
      ],
    },
    {
      title: '8. Disclaimer of Warranties',
      items: [
        {
          label: 'Disclaimer',
          value: 'THE SERVICE, INCLUDING ALL CONTENT, IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE TIMELY, ERROR-FREE, OR SECURE',
        },
      ],
    },
    {
      title: '9. Limitation of Liability',
      items: [
        {
          label: '9.1 No Liability for Indirect Damages',
          value: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE (AND OUR AFFILIATES) ARE NOT RESPONSIBLE FOR INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
        },
        {
          label: '9.2 Liability Cap',
          value: 'OUR TOTAL LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER WILL NOT EXCEED THE AMOUNT YOU HAVE PAID TO US FOR THE SERVICE DURING THE LAST TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY.',
        },
        {
          label: '9.3 Exclusions',
          value: 'Some jurisdictions do not allow certain limitations. In such cases, some limitations may not apply to you.',
        },
      ],
    },
    {
      title: '10. Indemnification',
      items: [
        {
          label: 'Indemnification Clause',
          value: 'You agree to defend, indemnify, and hold harmless the Company, its affiliates, and employees from any third-party claims, losses, or damages arising out of (i) your use of the Service, (ii) your User Content, or (iii) your breach of these Terms.',
        },
      ],
    },
    {
      title: '11. International Use',
      items: [
        {
          label: 'International Usage',
          value: 'We make no representation that the Service is appropriate or available in every location. You are responsible for following your local laws if they apply.',
        },
      ],
    },
    {
      title: '12. Mandatory Binding Arbitration & Class Action Waiver',
      items: [
        {
          label: '12.1 Agreement to Arbitrate',
          value: 'Except where prohibited by law, you agree that all disputes arising from or related to these Terms or the Service must be resolved exclusively via confidential binding arbitration rather than in court.',
        },
        {
          label: '12.2 Class Action Waiver',
          value: 'You agree to resolve disputes on an individual basis. You waive the right to be a plaintiff or class member in any class, consolidated, or representative action.',
        },
        {
          label: '12.3 Opt-Out Right',
          value: 'You may opt out of arbitration by sending a written notice to our contact address within 30 days of first using the Service. If you do not opt out, you are bound by arbitration and the class action waiver.',
        },
        {
          label: '12.4 Procedures',
          value: 'The American Arbitration Association (AAA) will administer the arbitration. Details on the process, location, and fees will follow the AAA Consumer Arbitration Rules, subject to modifications in these Terms.',
        },
        {
          label: '12.5 One-Year Deadline',
          value: 'Any claim must be initiated within one (1) year of the event giving rise to the claim; otherwise, it is time-barred.',
        },
      ],
    },
    {
      title: '13. Governing Law',
      items: [
        {
          label: 'Governing Law Clause',
          value: 'These Terms are governed by the laws of Japan, without regard to its conflict of law principles. Where arbitration does not apply, any lawsuit must be brought in the courts located in Tokyo, Japan, and you consent to their jurisdiction.',
        },
      ],
    },
    {
      title: '14. Miscellaneous',
      items: [
        {
          label: '14.1 No Waiver',
          value: 'Failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other.',
        },
        {
          label: '14.2 Severability',
          value: 'If any part of these Terms is held invalid, the rest remains enforceable, reflecting as closely as possible the original intent.',
        },
        {
          label: '14.3 Entire Agreement',
          value: 'These Terms, along with the Privacy Policy, constitute the entire agreement between you and the Company regarding your use of the Service.',
        },
        {
          label: '14.4 Assignment',
          value: 'We may assign our rights and obligations under these Terms without notice. You may not assign or transfer your rights to any third party.',
        },
        {
          label: '14.5 Electronic Communications',
          value: 'Using the Service or emailing us constitutes electronic communications. You consent to receive communications electronically and agree that these satisfy legal requirements for written communications.',
        },
        {
          label: '14.6 Force Majeure',
          value: 'We are not liable for failing to perform any obligation under these Terms if such failure is due to events beyond our reasonable control.',
        },
      ],
    },
    {
      title: '15. Contact Information',
      items: [
        {
          label: 'Contact Details',
          value: 'If you have questions about these Terms or the Service, or wish to send notices, please contact us at:\nEmail: yamamoto@proxycode.jp\nAddress: 1-18-18 Hamadayama, Suginami-ku, Tokyo, Japan',
        },
      ],
    },
    {
      title: 'Acknowledgement',
      items: [
        {
          label: 'Final Acknowledgement',
          value: 'YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO THESE TERMS AND CONDITIONS OF USE.',
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms and Conditions of Use</h1>
      <p className="text-center text-gray-600 mb-8">Last updated: March 30, 2025</p>
      
      <div className="space-y-8">
        {termsData.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                  <dd className="mt-1 text-sm text-gray-900 whitespace-pre-line">{item.value}</dd>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfCondition; 