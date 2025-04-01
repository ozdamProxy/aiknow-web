'use client';

import React from 'react';
import Link from 'next/link';

const PaymentInfo = () => {
  const paymentData = [
    {
      title: '【Commercial Disclosure】',
      items: [
        { label: 'Seller Information', value: 'Proxy Code Inc.' },
        { label: 'Responsible Officer', value: 'Ranmaru Yamamoto' },
        { label: 'Address', value: '1-18-18 Hamadayama, Suginami-ku, Tokyo, Japan' },
        { label: 'Phone Number', value: '(+81) 080-4873-8989' },
        { label: 'Mail Address', value: 'yamamoto@proxycode.jp' },
      ],
    },
    {
      title: 'Service Description',
      items: [
        {
          label: 'Description',
          value: 'Our web app is a book summary application that provides summaries of various books. Users can listen to these summaries using our text-to-speech (TTS) technology, making it similar to an audiobook app but in a concise format. This allows users to gain key insights from books in a short amount of time.',
        },
      ],
    },
    {
      title: 'Additional Fees',
      items: [
        { label: 'Fees', value: 'There are no additional fees as this is a digital content service.' },
      ],
    },
    {
      title: 'Pricing & Payment',
      items: [
        { label: 'Pricing', value: 'The pricing details for each plan are listed on the respective plan pages.' },
        { label: 'Payment Methods', value: 'Credit Card (VISA / MasterCard / JCB / AMEX)' },
        { label: 'Payment Processing Time', value: 'Credit card payments are processed immediately.' },
        { label: 'Payment Timing', value: 'Monthly & Annual Subscription Plans:\nCharged immediately upon subscription and auto-renewed thereafter.' },
        { label: 'Purchase Limit', value: 'Each user is entitled to one account per purchase.' },
        { label: 'Delivery Time', value: 'The service will be available immediately after payment is completed.' },
      ],
    },
    {
      title: 'Refund Policy',
      items: [
        {
          label: 'General Policy',
          value: 'As this is a digital service, refunds and cancellations are not supported after purchase.',
        },
        {
          label: 'Exceptions',
          value: 'However, exceptions will be made under the following conditions:\n\nA major service malfunction or operational issue occurs.\n\nDuplicate payments are made.\n\nFor refund inquiries, please contact customer support.',
        },
      ],
    },
    {
      title: 'Subscription Cancellation',
      items: [
        {
          label: 'Policy',
          value: 'Monthly and annual plans are automatically renewed.\n\nTo cancel a subscription, users must complete the cancellation process through the account settings page before the next renewal date.\n\nThe service will remain accessible until the end of the current billing cycle after cancellation.',
        },
      ],
    },
    {
      title: 'Terms of Service & Privacy Policy',
      items: [
        {
          label: 'Policies',
          value: (
            <div>
              The service is governed by the following policies:
              <div className="mt-2 space-y-1">
                <Link href="https://www.ikbook.app/termsofcondition" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>
                <br />
                <Link href="https://www.ikbook.app/privacypolicy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      
      <div className="space-y-8">
        {paymentData.map((section, index) => (
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

export default PaymentInfo; 