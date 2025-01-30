interface StoriesProps {
  title: string;
  subtitle: string;
  videoUrl: string;
}

export default function Stories({ title, subtitle, videoUrl }: Readonly<StoriesProps>) {
  return (
    <div className="bg-white py-16 font-inter">
      <div className="mx-auto max-w-5xl px-4 ">
        <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
          <h2 className="mb-4 text-4xl font-bold md:mb-0 md:w-1/2" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-md font-medium text-muted-foreground md:w-1/2">{subtitle}</p>
        </div>
        <div className="aspect-[16/9]">
          <iframe
            src={videoUrl}
            title="Inspiring Stories Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="size-full rounded-lg"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}
