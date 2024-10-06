import "./Banner.css";

interface IBanner {
  title: string;
  subTitle?: string;
  image: string;
}

export const Banner: React.FC<IBanner> = ({ title, subTitle, image }) => {
  const BannerStyle = {
    backgroundImage: `url("/images/${image}")`,
  };

  return (
    <div id="banner" style={BannerStyle}>
      <h2>{title}</h2>
      {subTitle && <h3>{subTitle}</h3>}
    </div>
  );
};
