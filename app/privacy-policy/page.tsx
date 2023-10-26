import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="px-8 md:px-16 lg:px-24 xl:px-24 leading-relaxed">
      <h1 className="text-lg font-bold mb-2">Privacy Policy</h1>
      <h2 className="text-md font-bold my-2">Introduction</h2>
      <p className="text-sm">
        Welcome to{" "}
        <Link href="/" className="hover:underline" draggable={false}>
          <strong>Pixel Muse</strong>
        </Link>
        . We are committed to respecting and protecting your privacy. This
        Privacy Policy outlines our commitment to your privacy and covers our
        practices regarding the information we collect and how we use it.
      </p>
      <h2 className="text-md font-bold my-2">Information We Collect</h2>
      <p className="text-sm">
        While using our website, we may collect certain non-personally
        identifiable information about your usage and device. This information
        is used to ensure the optimal functioning of our website and to enhance
        your user experience.
      </p>
      <h2 className="text-md font-bold my-2">How We Use Information</h2>
      <p className="text-sm">
        The information we collect is used for various purposes:
      </p>
      <ul className="list-disc list-outside text-sm my-2 pl-8">
        <li>
          <strong>Service Provision:</strong> We use the collected information
          to provide and maintain our service, ensuring an optimal user
          experience.
        </li>
        <li>
          <strong>Service Improvement:</strong> The collected information helps
          us understand how our website is being used, helping us to improve our
          services and develop new ones.
        </li>
        <li>
          <strong>Trend Analysis:</strong> By analyzing the collected
          information, we can identify trends and preferences of our users,
          which allows us to make more informed decisions about the development
          of new features and services.
        </li>
      </ul>
      <h2 className="text-md font-bold my-2">Sharing of Information</h2>
      <p className="text-sm">
        We value your privacy. We do not sell or share your personal information
        with third parties for their marketing purposes. The non-personally
        identifiable data we collect is used solely for the purposes outlined in
        this policy.
      </p>
      <h2 className="text-md font-bold my-2">Your Rights</h2>
      <p className="text-sm">
        As a user, you have certain rights regarding your data. As we do not
        directly collect personal information, there are no personal data for
        you to access or delete. However, you can typically manage cookies and
        similar technologies via your browser settings.
      </p>
      <h2 className="text-md font-bold my-2">Changes to This Policy</h2>
      <p className="text-sm">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, so please check back regularly to stay informed.
      </p>
      <h2 className="text-md font-bold my-2">Contact Us</h2>
      <p className="text-sm">
        If you have any questions or concerns about this Privacy Policy, please
        don&apos;t hesitate to{" "}
        <Link
          href="mailto:samiwarraich51@gmail.com"
          className="hover:underline"
          draggable={false}
        >
          <strong>contact</strong>
        </Link>{" "}
        us.
      </p>
    </div>
  );
}
