"use client";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const termsContent = `
**Terms & Conditions for Vintage Football Kit Web Store**

**Effective Date:** June 27, 2025

**1. Acceptance of Terms**

By accessing and using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or purchase any products.

**2. Definitions**

- **"We", "Us", "Our":** Refers to the owner and operator of this vintage football kit web store.
- **"You", "Customer", "User":** Refers to any individual or entity browsing, using, or purchasing from this website.

**3. Products**

- All products sold are original vintage football kits, not modern reproductions.
- As vintage items, products may show signs of previous use. We strive to accurately describe the condition of each item using standardized categories (e.g., Mint, Excellent, Very Good, Good).
- Product images and descriptions are for informational purposes and may not be binding.

**4. Orders & Acceptance**

- Orders must be placed online via our website's automated system.
- All orders are subject to acceptance and availability. We reserve the right to refuse or cancel orders at our discretion, including in cases of prior disputes.
- A confirmation email will be sent upon order acceptance.

**5. Pricing & Payment**

- All prices are listed in the specified currency and include applicable taxes unless stated otherwise.
- We reserve the right to change prices at any time before your order is accepted.
- Payment must be made in full at the time of purchase using the payment methods provided.

**6. Shipping & Delivery**

- We ship worldwide. Shipping options, costs, and estimated delivery times are provided at checkout.
- Orders are typically shipped within 24 hours of purchase, with tracking provided if applicable.
- The risk for untracked shipments lies with the buyer. Delays or issues with shipping will be communicated as soon as possible.

**7. Returns & Cancellations**

- You have the right to withdraw from the purchase and return items within the period specified by law, provided the item is returned in its original condition.
- Return instructions and any applicable restocking fees will be detailed in our Returns Policy.
- Refunds will be processed upon receipt and inspection of the returned item.

**8. Authenticity & Condition**

- We guarantee the authenticity of all vintage football kits sold.
- If you have doubts about a product's authenticity or description, contact us promptly so we can address the issue.

**9. User Obligations**

- You agree to provide accurate, current, and complete information for all purchases and account registrations.
- You are responsible for maintaining the confidentiality of your account and password.

**10. Limitation of Liability**

- We are not liable for indirect, incidental, or consequential damages arising from the use of our website or products, to the maximum extent permitted by law.
- Our total liability is limited to the amount paid for the product.

**11. Intellectual Property**

- All content on this website, including images, text, and logos, is the property of the store owner or its licensors and may not be used without permission.

**12. Privacy & Cookies**

- Your use of the website is also governed by our Privacy Policy and Cookies Policy, which describe how your data is collected and used.

**13. Changes to Terms**

- We reserve the right to update or modify these Terms & Conditions at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of those changes.

**14. Governing Law & Jurisdiction**

- These Terms & Conditions are governed by the laws of the country in which the store is registered. Any disputes will be subject to the exclusive jurisdiction of the local courts.

**15. Contact Information**

- For questions regarding these Terms & Conditions, please contact us through the details provided on our website.

**By using this website and purchasing from us, you acknowledge that you have read, understood, and agree to these Terms & Conditions.**
`;

export default function TermsPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li>
        <a
          href="#"
          onClick={openModal}
          className="text-muted-foreground hover:text-[#8b0000]"
        >
          Terms & Conditions
        </a>
      </li>

     {isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2">
    <div className="bg-white rounded-lg w-full max-w-md max-h-screen flex flex-col shadow-lg overflow-y-auto">
      {/* Header */}
   <div className="flex-shrink-0 p-4 border-b flex justify-between items-center">
    <h2 className="text-lg font-bold">Terms & Conditions</h2>
    <button
      onClick={closeModal}
      className="text-gray-400 hover:text-gray-600 text-xl"
    >
          ×
        </button>
      </div>

    {/* Scrollable content */}
  <div className="overflow-y-auto p-4 flex-1">
    <div className="prose prose-sm text-sm text-gray-700 max-w-none">
      <ReactMarkdown>{termsContent}</ReactMarkdown>
    </div>
  </div>

    <button
      onClick={closeModal}
      className="w-full bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800"
    >
          Close
        </button>
      </div>
    </div>
)}
    </>
  );
}