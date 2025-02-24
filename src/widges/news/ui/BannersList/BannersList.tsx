import { INews, NewsCard } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsCard key={banner.id} item={banner} type="banner" />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 10);

export default BannersListWithSkeleton;
