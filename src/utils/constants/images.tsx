interface IImage {
  url: string;
  alt: string;
}

interface ILinkImage {
  image_discount: IImage;
  remates: IImage;
}

export const LINK_IMAGES: ILinkImage = {
  image_discount: {
    url: "https://http2.mlstatic.com/D_NQ_617895-MLA79886773366_102024-F.jpg",
    alt: "IMAGE DISCOUNT",
  },
  remates: {
    url: "https://http2.mlstatic.com/D_NQ_612776-MLA78044282209_072024-F.jpg",
    alt: "IMAGE REMATES",
  },
};
