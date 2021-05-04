type NasaImageLink = [{ href: string }];
type NasaImageData = [{ title: string }];
type NasaImageItems = Array<{ links: NasaImageLink; data: NasaImageData }>;

export type NasaImagesResponse = {
  collection: {
    items: NasaImageItems;
  };
};

export type ImagesWithTitle = Array<{ title: string; href: string }>;
