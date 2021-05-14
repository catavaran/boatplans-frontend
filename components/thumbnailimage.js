export default function ThumbnailImage({ image, alt, className, lazyLoad }) {
    return (
        <picture>
            {image.sources.map(source =>
                <source srcSet={source.srcset} type={source.type} key={source.srcset} />
            )}
            <img
                src={image.src}
                srcSet={image.srcset}
                width={image.width}
                height={image.height}
                alt={alt}
                className={className}
                loading={lazyLoad ? 'lazy' : 'eager'}
            />
        </picture>
    );
}