import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import {
  Field,
  ImageField,
  LinkField,
  Text,
  RichTextField,
  RichText,
  NextImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';

interface BannerData {
  title: Field<string>;
  description: RichTextField;
  link: LinkField;
  cta: LinkField;
  image: ImageField;
  contentPosition: Field<string>;
}
export type BannerDataProps = {
  fields: BannerData;
  rendering: { componentName: string };
  params: { [key: string]: string };
};
const Banner = ({ fields }: BannerDataProps): JSX.Element => {
  if (fields === null || fields === undefined) return <></>;
  return (
    <div className="py-5 relative">
      <div>
        <NextImage field={fields?.image} className="w-full" />
      </div>
      <div
        className={clsx('container mx-auto flex', {
          'justify-end text-right': fields?.contentPosition?.value === 'right',
          'justify-center text-center': fields?.contentPosition?.value === 'center',
        })}
      >
        <div
          className={clsx(
            'md:absolute top-1/2 md:-translate-y-1/2 text-xs md:text-lg lg:text-xl md:max-w-lg flex flex-col text-white py-5 px-5 rounded bg-gradient-to-r from-indigo-500 font-bold font-mono',
            {
              '!bg-gradient-to-l from-indigo-500': fields?.contentPosition?.value === 'right',
              'bg-red-300': fields?.contentPosition?.value === 'center',
            }
          )}
        >
          <Text field={fields?.title} />
          <RichText field={fields?.description} className="my-3" />
          <LinkWrapper field={fields?.link} className="hover:text-black focus:text-black" />
          <LinkWrapper
            field={fields?.cta}
            className="bg-black px-4 py-2 my-2 rounded-full hover:bg-white hover:text-black focus:bg-white focus:text-black"
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
