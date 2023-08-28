function Photo({ photo, alt }) {
  // Import result is the URL of your image
  return (
    <img
      src={photo}
      alt={alt}
      style={{
        width: "100%",
        maxHeight: "400px",
        objectFit: "cover",
        marginTop: "2rem",
        borderRadius: "4px",
      }}
    />
  );
}

export default Photo;
