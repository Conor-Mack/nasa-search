type NasaImageLink = [{ href: string }];
type NasaImageData = [{ title: string; description: string }];
type NasaImageItems = Array<{ links: NasaImageLink; data: NasaImageData }>;

//Typings for relevant properties coming back from images request
export type NasaImagesResponse = {
  collection: {
    items: NasaImageItems;
  };
};

export type ImagesWithTitle = Array<{ title: string; href: string }>;

export type CenteredElementProps = {
  center?: boolean;
};
