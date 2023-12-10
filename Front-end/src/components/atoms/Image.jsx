const Image = ({ src, ...props }) => {
  return <img src={src} loading="lazy" {...props} />;
};

export default Image;
