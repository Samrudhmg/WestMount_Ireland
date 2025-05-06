import Image from "next/image";

const PartnerLogos = () => {
    const partners = [
        {
            name: "Microsoft",
            imageUrl: "/images/image-hiring-1.png",
            width: 70,
            height: 40,
        },
        {
            name: "Amazon",
            imageUrl: "/images/image-hiring-2.png",
            width: 60,
            height: 12,
        },
        {
            name: "Meta",
            imageUrl: "/images/image-hiring-3.png",
            width: 60,
            height: 42,
        },
        {
            name: "Nestle",
            imageUrl: "/images/image-hiring-4.png",
            width: 70,
            height: 50,
        },
        {
            name: "Samsung",
            imageUrl: "/images/image-hiring-5.png",
            width: 90,
            height: 48,
        },
        {
            name: "Virgin",
            imageUrl: "/images/image-hiring-6.png",
            width: 70,
            height: 40,
        },
        {
            name: "Virgi",
            imageUrl: "/images/image-hiring-7.png",
            width: 60,
            height: 45,
        },
    ];

    return (
        <div className="mt-10 flex flex-col gap-3">
            <h1 className="text-center text-xl 2xl:text-2xl">Hiring partners</h1>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
                {partners.map((partner) => (
                    <div
                        key={partner.name}
                        className="flex items-center justify-center"
                    >
                        <Image
                            src={partner.imageUrl}
                            alt={partner.name}
                            width={partner.width}
                            height={partner.height}
                            className="object-contain contrast-200"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerLogos;
