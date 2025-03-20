export default function Footer() {
    const courses = [
        {
            name: "ACCA in Ireland",
            url: "/",
        },
        {
            name: "MBBS in Armenia",
            url: "/",
        },
        {
            name: "ACCA in UK",
            url: "/",
        },
        {
            name: "Engineering in Ireland",
            url: "/",
        },
        {
            name: "Pharma in Ireland",
            url: "/",
        },
    ];

    const branches = [
        { name: "Kochi", url: "https://maps.app.goo.gl/UCd5KwLfjLao8FkDA" },
        {
            name: "Trivandrum",
            url: "https://maps.app.goo.gl/6Q1TjQ4WenZ88bLV8",
        },
        { name: "Calicut", url: "https://maps.app.goo.gl/VBvVDN4XgQ1QdCET6" },
    ];

    const socialLinks = [
        {
            name: "@west_mount_studyabroad",
            followers: "220K followers",
            url: "https://www.instagram.com/west_mount_studyabroad",
            icon: "/icons/social1.svg",
            title: "Instagram",
        },
        {
            name: "West Mount Study Abroad",
            followers: "22.5K followers",
            url: "https://www.youtube.com/@westmountstudyabroad",
            icon: "/icons/social2.svg",
            title: "YouTube",
        },
        {
            name: "@Westmount.Studyabroad",
            followers: "5.6K followers",
            url: "https://www.facebook.com/Westmount.Studyabroad/",
            icon: "/icons/social3.svg",
            title: "Facebook",
        },
    ];

    const legalLinks = [
        {
            name: "Privacy policy",
            url: "/",
        },
        {
            name: "Terms & Conditions",
            url: "/",
        },
        { name: "Disclaimer", url: "/" },
        {
            name: "Refund policy",
            url: "/",
        },
        { name: "Cancellation", url: "/" },
    ];

    return (
        <footer
            className="mt-10 bg-West-black px-4 py-8 text-white md:px-6 lg:px-8"
            aria-label="Website footer"
        >
            <div className="mx-auto max-w-6xl ">
                <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[auto_150px_auto_auto]">
                    {/* Courses Section */}
                    <section>
                        <h3 className="mb-4 text-lg font-medium">Courses</h3>
                        <nav aria-label="Course navigation">
                            <ul className="space-y-2">
                                {courses.map((course) => (
                                    <li key={course.name}>
                                        <a
                                            href={course.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-white"
                                            aria-label={`Learn more about ${course.name} course`}
                                        >
                                            {course.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>

                    {/* Branches Section */}
                    <section>
                        <h3 className="mb-4 text-lg font-medium">Branches</h3>
                        <nav aria-label="Branch locations">
                            <ul className="space-y-2">
                                {branches.map((branch) => (
                                    <li key={branch.name}>
                                        <a
                                            href={branch.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-white"
                                            aria-label={`View location of ${branch.name} branch`}
                                        >
                                            {branch.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>

                    {/* Contact Section */}
                    <section>
                        <h3 className="mb-4 text-lg font-medium">Contact us</h3>
                        <address className="not-italic">
                            <div className="space-y-3">
                                <a
                                    href="tel:+919072123477"
                                    className="flex items-center text-gray-300 hover:text-white"
                                >
                                    <img
                                        src="/icons/call-fill.svg"
                                        alt="call"
                                        title="call us"
                                        aria-hidden="true"
                                        className="mr-2 size-5"
                                    />
                                    +91 9072 1234 77
                                </a>
                                <a
                                    href="mailto:westmountoverseas@gmail.com"
                                    className="flex items-center text-gray-300 hover:text-white"
                                >
                                    <img
                                        src="/icons/mail.svg"
                                        alt="mail"
                                        title="mail us"
                                        aria-hidden="true"
                                        className="mr-2 size-5"
                                    />
                                    westmountoverseas@gmail.com
                                </a>
                            </div>
                        </address>
                    </section>

                    {/* Follow Us Section */}
                    <section>
                        <h3 className="text-md mb-4 font-medium">Follow us</h3>
                        <nav aria-label="Social media links">
                            <div className="space-y-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.icon}
                                        href={social.url}
                                        className="flex items-center text-gray-300 hover:text-white"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit our ${social.name} profile`}
                                    >
                                        <img
                                            src={
                                                social.icon ||
                                                "/placeholder.svg"
                                            }
                                            alt={social.title}
                                            title={social.title}
                                            aria-hidden="true"
                                            className="mr-2 size-5"
                                        />
                                        <div>
                                            <div className="flex items-center gap-3">
                                                {social.name}
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {social.followers}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </section>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <div className="text-sm font-semibold text-gray-400">
                            Copyright ©{new Date().getFullYear()}{" "}
                            <a
                                href="https://westmount.co.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit Tripleica homepage"
                                className="hover:text-white"
                            >
                                Westmount Study Abroad
                            </a>
                        </div>
                        <nav aria-label="Legal links">
                            <ul className="flex flex-wrap justify-center gap-4 text-sm">
                                {legalLinks.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className="text-gray-400"
                                    >
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-white"
                                            aria-label={`Read our ${link.name}`}
                                        >
                                            {link.name}
                                        </a>
                                        {index < legalLinks.length - 1 && (
                                            <span
                                                className="mx-2 text-gray-600"
                                                aria-hidden="true"
                                            >
                                                ·
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
