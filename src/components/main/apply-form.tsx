"use client";

import type { CreateLeadDTO } from "@/lib/enquire.form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createLead } from "@/lib/enquire.form";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const COURSE_OPTIONS = [
    { value: "ACCA", label: "ACCA" },
    { value: "CA", label: "CA" },
    { value: "CMA IND", label: "CMA IND" },
    { value: "CMA US", label: "CMA US" },
    { value: "CS", label: "CS" },
    { value: "Commerce Entrance", label: "Commerce Entrance" },
] as const;

const QUALIFICATION_OPTIONS = [
    { value: "Plus One", label: "Plus One" },
    { value: "Plus Two", label: "Plus Two" },
    { value: "UG", label: "UG" },
    { value: "PG", label: "PG" },
    {
        value: "Commerce Professional Student",
        label: "Commerce Professional Student",
    },
] as const;
const COUNTRY_OPTIONS = [
    {
        name: "India",
        code: "IN",
        flag: "/icons/india.svg",
        dialCode: "+91",
    },
    {
        name: "United Kingdom",
        code: "GB",
        flag: "/icons/united-Kingdom.svg",
        dialCode: "+44",
    },
    {
        name: "Ireland",
        code: "IE",
        flag: "/icons/Ireland-icon.svg",
        dialCode: "+353",
    },
    {
        name: "Germany",
        code: "DE",
        flag: "/icons/germany.svg",
        dialCode: "+49",
    },
    {
        name: "Austria",
        code: "AT",
        flag: "/icons/austria.svg",
        dialCode: "+43",
    },
    {
        name: "Slovakia",
        code: "SK",
        flag: "/icons/slovakia.svg",
        dialCode: "+421",
    },
    {
        name: "Poland",
        code: "PL",
        flag: "/icons/poland.svg",
        dialCode: "+48",
    },
    {
        name: "Czech Republic",
        code: "CZ",
        flag: "/icons/czech-republic.svg",
        dialCode: "+420",
    },
    {
        name: "Slovenia",
        code: "SI",
        flag: "/icons/slovenia.svg",
        dialCode: "+386",
    },
    {
        name: "Lithuania",
        code: "LT",
        flag: "/icons/lithuania.svg",
        dialCode: "+370",
    },
] as const;

export function ApplyForm() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const leadSource = searchParams.get("lead");
    const leadSubSource = searchParams.get("leadSubSource");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedDialCode, setSelectedDialCode] = useState<string>(
        COUNTRY_OPTIONS[0].dialCode,
    ); // ✅ Explicitly set as string
    const router = useRouter();

    const [errors, setErrors] = useState({
        name: "",
        phoneNumber: "",
    });

    const validateForm = (values: CreateLeadDTO) => {
        const validationErrors = { ...errors };

        if (values.name.length < 3) {
            validationErrors.name = "Name must be at least 3 characters long";
        }

        const phonePattern = /^\d{10}$/; // Only 10 digits allowed

        // Extract only the numeric phone number (excluding dial code)
        const phoneWithoutDialCode = values.phone
            .replace(/^\+\d+\s*/, "")
            .replaceAll(/[-\s]/g, "");

        if (!phonePattern.test(phoneWithoutDialCode)) {
            validationErrors.phoneNumber =
                "Please enter a valid 10-digit phone number";
        }

        return validationErrors;
    }

    // eslint-disable-next-line unicorn/prevent-abbreviations
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        const values: CreateLeadDTO = {
            name: formData.get("name") as string,
            phone: `${selectedDialCode} ${formData.get("phoneNumber") as string}`, // ✅ Combine dial code + phone number
            interestedCourse: formData.get(
                "interestedCourse",
            ) as CreateLeadDTO["interestedCourse"],
            latestQualification: formData.get(
                "latestQualification",
            ) as CreateLeadDTO["latestQualification"],
            leadSource: leadSource
                ? (leadSource as CreateLeadDTO["leadSource"])
                : "Google Ad",
            leadSubSource: leadSubSource
                ? (leadSubSource as CreateLeadDTO["leadSubSource"])
                : "Search Ad",
        };

        setErrors({ name: "", phoneNumber: "" });

        const validationErrors = validateForm(values);

        if (Object.values(validationErrors).some((error) => error !== "")) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            await createLead(values, pathname);
            router.push("/thankyou");
        } catch (error) {
            console.error("Lead creation failed", error);
            toast.error("Lead creation failed");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full  rounded-lg border bg-white p-2 shadow-sm">
            <div className="block px-5 py-4 md:px-2">
                <h3 className="mb-6 text-center text-2xl font-semibold">
                    Get in touch
                </h3>
                <form onSubmit={handleSubmit} className="mb-5 space-y-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700"
                        >
                            Full name
                        </label>
                        <Input
                            type="text"
                            name="name"
                            className="h-12 shadow-none"
                            placeholder="Enter your name"
                            required
                            aria-label="Name"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="phone"
                            className=" text-sm font-medium text-gray-700"
                        >
                            Phone number
                        </label>
                        <div className="flex items-center gap-3">
                            {/* Country Code Select */}
                            <Select
                                value={selectedDialCode}
                                onValueChange={(value) =>
                                    setSelectedDialCode(value)
                                }
                            >
                                <SelectTrigger className="flex h-12 w-[115px] items-center justify-center rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-500">
                                    <SelectValue>
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={
                                                    COUNTRY_OPTIONS.find(
                                                        (c) =>
                                                            c.dialCode ===
                                                            selectedDialCode,
                                                    )?.flag ||
                                                    "/placeholder.svg"
                                                }
                                                alt={
                                                    COUNTRY_OPTIONS.find(
                                                        (c) =>
                                                            c.dialCode ===
                                                            selectedDialCode,
                                                    )?.name || "Country"
                                                }
                                                width={20}
                                                height={15}
                                                className="size-6 rounded-full object-cover"
                                            />
                                            <span className="font-medium text-gray-700">
                                                {selectedDialCode}
                                            </span>
                                        </div>
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {COUNTRY_OPTIONS.map((country) => (
                                        <SelectItem
                                            key={country.code}
                                            value={country.dialCode}
                                            className="cursor-pointer"
                                        >
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={country.flag}
                                                    alt={country.name}
                                                    width={20}
                                                    height={15}
                                                    className="size-6 rounded-full object-cover"
                                                />

                                                <span className="font-medium">
                                                    {country.dialCode}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    ({country.name})
                                                </span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Phone Number Input */}
                            <Input
                                type="tel"
                                name="phoneNumber"
                                className="h-12 flex-1 rounded-lg border border-gray-300 px-4 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your phone number"
                                required
                                aria-label="Phone Number"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="phone"
                            className="text-sm font-medium text-gray-700"
                        >
                            Courses
                        </label>
                        <Select name="interestedCourse" required>
                            <SelectTrigger className="h-12 shadow-none">
                                <SelectValue placeholder="Select your preferred course" />
                            </SelectTrigger>
                            <SelectContent>
                                {COURSE_OPTIONS.map((course) => (
                                    <SelectItem
                                        key={course.value}
                                        value={course.value}
                                    >
                                        {course.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="phone"
                            className="text-sm font-medium text-gray-700"
                        >
                            Qualification
                        </label>
                        <Select name="latestQualification" required>
                            <SelectTrigger className="h-12 shadow-none">
                                <SelectValue placeholder="Select your qualification" />
                            </SelectTrigger>
                            <SelectContent>
                                {QUALIFICATION_OPTIONS.map((qual) => (
                                    <SelectItem
                                        key={qual.value}
                                        value={qual.value}
                                    >
                                        {qual.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="text-sm text-gray-500">
                        By Submitting this form, you agree to our{" "}
                        <Link
                            href="https://www.tripleica.com/terms-and-conditions"
                            target="_blank"
                            className="text-West-contrast hover:underline"
                        >
                            T&C
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="https://www.tripleica.com/privacy-policy"
                            target="_blank"
                            className="text-West-contrast hover:underline"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <Button
                        type="submit"
                        className="w-full rounded-lg py-5"
                        disabled={isSubmitting}
                        variant="default"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export function ApplyBottomForm() {
    const searchParams = useSearchParams();
    const leadSource = searchParams.get("lead");
    const leadSubSource = searchParams.get("leadSubSource");
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const pathname = usePathname();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [interestedCourse, setInterestedCourse] =
        useState<CreateLeadDTO["interestedCourse"]>("CA");
    const [selectedDialCode, setSelectedDialCode] = useState<string>(
        COUNTRY_OPTIONS[0].dialCode,
    ); // ✅ Explicitly set as string
    //   const [latestQualification, setLatestQualification] = useState<CreateLeadDTO['latestQualification']>('Plus One');

    // eslint-disable-next-line unicorn/prevent-abbreviations
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        const values: CreateLeadDTO = {
            name: formData.get("name") as string,
            phone: `${selectedDialCode} ${formData.get("phoneNumber") as string}`, // ✅ Ensure name matches form input// ✅ Combine dial code + phone number
            interestedCourse: formData.get(
                "interestedCourse",
            ) as CreateLeadDTO["interestedCourse"],
            latestQualification: formData.get(
                "latestQualification",
            ) as CreateLeadDTO["latestQualification"],
            leadSource: leadSource
                ? (leadSource as CreateLeadDTO["leadSource"])
                : "Google Ad",
            leadSubSource: leadSubSource
                ? (leadSubSource as CreateLeadDTO["leadSubSource"])
                : "Search Ad",
        };
        try {
            const isResponse = await createLead(values, pathname);
            if (isResponse) {
                setIsSubmitting(false);
                setName("");
                setPhone("");
                setInterestedCourse("CA");
                // setLatestQualification('Plus One');
                toast.success(
                    "Thank you! Our Sales Executive will be connecting with you soon :)",
                );
                router.push("/thankyou");
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error("Lead creation failed", error);
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return;
    }
    return (
        <div className="w-full">
            {/* Desktop view shows horizontal compact form */}
            <div className="bg-iii-black hidden py-7 md:block">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-wrap items-center justify-center gap-5"
                >
                    <Input
                        type="text"
                        placeholder="Enter your Name"
                        required
                        name="name"
                        className="h-10 w-[150px] rounded-md bg-white"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <div className="flex items-center ">
                        {/* Country Code Select */}
                        <Select
                            value={selectedDialCode}
                            onValueChange={(value) =>
                                setSelectedDialCode(value)
                            }
                        >
                            <SelectTrigger className="flex h-10 w-[100px] items-center justify-start rounded-l-md border  border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-500">
                                <SelectValue>
                                    <div className="flex items-center justify-start gap-1">
                                        <Image
                                            src={
                                                COUNTRY_OPTIONS.find(
                                                    (c) =>
                                                        c.dialCode ===
                                                        selectedDialCode,
                                                )?.flag || "/placeholder.svg"
                                            }
                                            alt={
                                                COUNTRY_OPTIONS.find(
                                                    (c) =>
                                                        c.dialCode ===
                                                        selectedDialCode,
                                                )?.name || "Country"
                                            }
                                            width={20}
                                            height={15}
                                            className="size-4 rounded-full object-cover"
                                        />
                                        <span className="font-medium text-gray-700">
                                            {selectedDialCode}
                                        </span>
                                    </div>
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                {COUNTRY_OPTIONS.map((country) => (
                                    <SelectItem
                                        key={country.code}
                                        value={country.dialCode}
                                        className="cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={country.flag}
                                                alt={country.name}
                                                width={20}
                                                height={15}
                                                className="size-6 rounded-full object-cover"
                                            />

                                            <span className="font-medium">
                                                {country.dialCode}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                ({country.name})
                                            </span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Phone Number Input */}
                        <Input
                            type="tel"
                            name="phoneNum"
                            className="h-10 flex-1 rounded-r-md border border-gray-300 bg-white px-4 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                            required
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)} // ✅ Ensure phone number is stored in state
                            aria-label="Phone Number"
                        />
                    </div>
                    <Select
                        name="interestedCourse"
                        required
                        value={interestedCourse}
                        onValueChange={(value) =>
                            setInterestedCourse(
                                value as CreateLeadDTO["interestedCourse"],
                            )
                        }
                    >
                        <SelectTrigger className="h-10 w-[200px] rounded-md bg-white">
                            <SelectValue placeholder="Select your course" />
                        </SelectTrigger>
                        <SelectContent>
                            {COURSE_OPTIONS.map((course) => (
                                <SelectItem
                                    key={course.value}
                                    value={course.value}
                                >
                                    {course.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select name="latestQualification" required>
                        <SelectTrigger className="h-10 w-[250px] rounded-md bg-white shadow-none">
                            <SelectValue placeholder="Select your qualification" />
                        </SelectTrigger>
                        <SelectContent>
                            {QUALIFICATION_OPTIONS.map((qual) => (
                                <SelectItem key={qual.value} value={qual.value}>
                                    {qual.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button
                        type="submit"
                        className="bg-teal-600 hover:bg-teal-700/90"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Applying..." : "Apply Now"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
