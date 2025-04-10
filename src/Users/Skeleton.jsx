import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <>
      <ContentLoader
        speed={2}
        width={200}
        height={50}
        viewBox="0 0 200 50"
        backgroundColor="#f3f3f3"
        foregroundColor="#fcfcee"
      >
        <circle cx="20" cy="20" r="20" />
        <rect x="64" y="0" rx="6" ry="6" width="137" height="25" />
        <rect x="64" y="32" rx="6" ry="6" width="183" height="15 " />
        <rect x="270" y="12" rx="6" ry="6" width="26" height="26" />
      </ContentLoader>
    </>
  );
};

export default Skeleton;
