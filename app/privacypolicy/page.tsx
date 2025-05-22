'use client';

import React from 'react';

const PrivacyPolicy = () => {
  const privacyData = [
    {
      title: 'Introduction',
      items: [
        {
          label: 'Overview',
          value: '"I Know" (the "App") together with our associated website (the "Website," and collectively, the "Service") is dedicated to maintaining the privacy of all users.',
        },
        {
          label: 'User Agreement',
          value: 'By using the Service, you confirm that:\n- You have read, understand, and agree to this Privacy Policy.\n- You are at least 16 years old (or, if you are under 16, a parent or guardian has reviewed and agreed to this Privacy Policy on your behalf).',
        },
        {
          label: 'Disagreement Options',
          value: 'If you do not agree to these terms, please:\n- Delete or deactivate your account (using our account settings or by contacting us at the email below).\n- Cancel any subscriptions through the method you originally used to subscribe (e.g., via an app store or our Website).\n- Remove the App from your device(s).',
        },
      ],
    },
    {
      title: 'Types of Personal Data We Collect',
      items: [
        {
          label: 'Data You Provide Voluntarily',
          value: '- Reading Preferences and Profile Information: When creating or updating an account, you may be asked for details like your reading interests, name, or email address.\n- Customer Support Interactions: If you contact us for help or with questions, you may share additional information about your account or device.',
        },
        {
          label: 'Data from Third Parties',
          value: 'Social or Single Sign-On Services: If you opt to sign in with a provider like Google or Apple, we may receive basic profile details (e.g., name, email address, or profile photo) as authorized by that platform.',
        },
        {
          label: 'Automatically Collected Data',
          value: '- Technical and Usage Details: We automatically gather data such as language settings, IP address, device type and model, operating system, unique device IDs (e.g., IDFA or AAID), time zone, Internet service provider or mobile carrier, and app usage metrics.\n- Cookies and Tracking Technologies: We use cookies, pixels, and similar technologies on our Website to remember your preferences, measure ad performance, and gather analytics.',
        },
        {
          label: 'Transaction Data',
          value: 'If you make purchases within the Service (e.g., subscriptions), our payment processors may collect payment and billing information. We do not store complete credit card details ourselves.',
        },
      ],
    },
    {
      title: 'Why We Process Your Personal Data',
      items: [
        {
          label: 'Purposes',
          value: 'We use personal data for:\n- Providing and Improving Our Service\n- Personalizing User Experience\n- Account Management and Customer Support\n- Research and Analytics\n- Communication\n- Serving and Measuring Ads\n- Processing Payments\n- Enforcing Our Terms and Combating Fraud',
        },
      ],
    },
    {
      title: 'Legal Bases for Processing (EEA Users Only)',
      items: [
        {
          label: 'Legal Grounds',
          value: 'For individuals in the European Economic Area (EEA), we rely on several legal grounds:\n- Consent\n- Contractual Necessity\n- Legitimate Interests\n- Legal Compliance',
        },
      ],
    },
    {
      title: 'Data Sharing and Disclosure',
      items: [
        {
          label: 'Who We Share With',
          value: 'We share data with:\n- Service Providers\n- Advertising and Marketing Partners\n- Legal and Safety Reasons\n- Business Transactions (in case of merger, acquisition, or asset sale)',
        },
      ],
    },
    {
      title: 'Your Privacy Rights',
      items: [
        {
          label: 'Available Rights',
          value: 'Depending on where you live, you may have rights to:\n- Access, Update, or Correct Data\n- Delete Data\n- Object or Restrict Processing\n- Data Portability (EEA Users)',
        },
        {
          label: 'How to Exercise Rights',
          value: 'To submit a request, or if you have any questions, contact us at yamamoto@proxycode.jp',
        },
      ],
    },
    {
      title: 'Additional Information',
      items: [
        {
          label: 'Age Restrictions',
          value: 'We do not knowingly collect personal data from anyone under 16. If you believe a child under 16 has provided personal data, please contact us so we can remove that information.',
        },
        {
          label: 'International Data Transfers',
          value: 'Because we operate globally, your data might be stored or processed in countries other than where you live. Where required, we implement safeguards to ensure your data is protected.',
        },
        {
          label: 'Changes to Policy',
          value: 'We may occasionally update this Privacy Policy. If significant changes occur, we will notify you through the Service or other means.',
        },
        {
          label: 'California Privacy Rights',
          value: 'Under California\'s "Shine the Light" law, California residents can request information about how we share certain personal data with third parties for direct marketing.',
        },
        {
          label: 'Data Retention',
          value: 'We store your personal data for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy and as required by law.',
        },
        {
          label: 'Do Not Track',
          value: 'Our App and Website do not respond to "Do Not Track" signals. We recommend reviewing the privacy settings available in your browser or device to limit tracking if desired.',
        },
      ],
    },
    {
      title: 'Contact Information',
      items: [
        {
          label: 'Contact Us',
          value: 'For questions or concerns about this Privacy Policy, or if you\'d like to exercise any of your rights, please contact us at:\nEmail: yamamoto@proxycode.jp',
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-center">I Know: Privacy Policy</h1>
      <p className="text-center text-gray-600 mb-8">Last updated: March 30, 2025</p>
      
      <div className="space-y-8">
        {privacyData.map((section, index) => (
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

export default PrivacyPolicy; 