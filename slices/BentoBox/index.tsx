"use client";

import { FC, useEffect, useState, useRef } from "react";
import { asText, Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import clsx from "clsx";
import VariableProximity from "@/components/VariableProximity";

export type BentoBoxProps = SliceComponentProps<Content.BentoBoxSlice>;

const BentoBox: FC<BentoBoxProps> = ({ slice }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [products, setProducts] = useState<
    {
      id: number;
      title: string;
      description: string;
      price: number;
      thumbnail: string;
      rating: number;
      category: string;
    }[]
  >([]);
  const [err, setErr] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        const allProducts = (data.products || []) as {
          id: number;
          title: string;
          description: string;
          price: number;
          thumbnail: string;
          rating: number;
          category: string;
        }[];
        const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
        setProducts(shuffled.slice(0, 6));
      } catch (error) {
        setErr(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2
        ref={headingRef}
        id="features"
        className="font-bold-slanted mb-8 scroll-pt-6 text-6xl uppercase md:text-8xl"
      >
        <VariableProximity
          label={asText(slice.primary.heading)}
          fromFontVariationSettings="'wght' 600, 'wdth' 100"
          toFontVariationSettings="'wght' 1000, 'wdth' 125"
          containerRef={headingRef}
          radius={150}
          falloff="exponential"
        />
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {slice.primary.items.map((item) => (
          <BentoBoxItem key={asText(item.text)} item={item} />
        ))}
      </div>

      <div className="mt-12">
        <h2
          ref={headingRef}
          id="features"
          className="font-bold-slanted mb-8 scroll-pt-6 text-6xl uppercase md:text-8xl"
        >
          <VariableProximity
            label={"Products "}
            fromFontVariationSettings="'wght' 600, 'wdth' 100"
            toFontVariationSettings="'wght' 1000, 'wdth' 125"
            containerRef={headingRef}
            radius={150}
            falloff="exponential"
          />
        </h2>

        {err && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
            {err}
          </div>
        )}

        {!err && isLoading && (
          <div className="text-lg text-gray-500">Loading products…</div>
        )}

        {!err && !isLoading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg leading-tight font-semibold">
                      {product.title}
                    </h4>
                    <span className="shrink-0 rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">
                      ${product.price}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm text-gray-600">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="capitalize">{product.category}</span>
                    <span>⭐ {product.rating}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default BentoBox;

type BentoBoxItemProps = {
  item: Content.BentoBoxSliceDefaultPrimaryItemsItem;
};

function BentoBoxItem({ item }: BentoBoxItemProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl",
        item.size === "Small" && "md:col-span-2",
        item.size === "Medium" && "md:col-span-3",
        item.size === "Large" && "md:col-span-4",
      )}
    >
      <PrismicNextImage
        field={item.image}
        className="h-full w-full object-cover"
        quality={96}
        width={700}
      />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-black"></div>

      <div className="absolute bottom-0 left-0 max-w-xl p-6 text-xl text-balance text-white">
        <PrismicRichText field={item.text} />
      </div>
    </div>
  );
}
