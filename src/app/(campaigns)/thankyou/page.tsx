"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated import
import { useEffect, useState } from "react";

const socialIcons = [
    {
        name: "instagram",
        path: "/icons/instagram.png",
        url: "https://www.instagram.com/west_mount_studyabroad",
        title: "West Mount Instagram",
    },
    {
        name: "facebook",
        path: "/icons/facebook.png",
        url: "https://www.facebook.com/Westmount.Studyabroad/",
        title: "West-Mount Facebook",
    },
    {
        name: "youtube",
        path: "/icons/youtube.png",
        url: "https://www.youtube.com/@westmountstudyabroad",
        title: "West-Mount Youtube",
    },
];

export default function ThankYouPage() {
    const router = useRouter();
    const [imageSource, setImageSource] = useState("/icons/tick.gif");

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageSource("/icons/tick.svg");
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    const handleGoBack = () => {
        try {
            router.back();
        } catch (error) {
            console.error("Failed to navigate:", error);
        }
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <div className="flex min-h-[70vh] items-center justify-center">
                    <div className="w-full py-5 text-center md:w-1/2">
                        <div className="mb-4 inline-flex size-32 items-center justify-center rounded-full bg-teal-700">
                            <Image
                                id="tick"
                                src={imageSource}
                                alt="Success"
                                width={130}
                                height={130}
                                priority
                                title="Success"
                            />
                        </div>

                        <h1 className="mb-3 text-2xl font-bold">
                            <span className="text-teal-500">Thank you,</span>{" "}
                            for submitting!
                        </h1>
                        <p className="mb-4 text-gray-600">
                            Our team will connect with you soon!
                        </p>

                        <button
                            onClick={handleGoBack}
                            className="my-2 min-w-36 rounded-md bg-teal-700 p-3 text-sm font-medium text-white transition-colors hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-West-accent focus:ring-offset-2"
                            type="submit"
                        >
                            Back to home
                        </button>

                        <p className="mb-4 text-gray-500">
                            STAY CONNECTED WITH US
                        </p>
                        <div className="mt-10">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/images/West-Mount-Logo.png"
                                    alt="Triple I Logo"
                                    title="Triple I Commerce Academy"
                                    width={200}
                                    height={200}
                                />
                            </div>

                            <div>
                                {socialIcons.map((icon) => (
                                    <a
                                        key={icon.name}
                                        href={icon.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded-full p-2"
                                    >
                                        <Image
                                            src={
                                                icon.path || "/placeholder.svg"
                                            }
                                            alt={icon.name}
                                            width={40}
                                            height={40}
                                            title={icon.title}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
